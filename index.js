const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db")
const bookrouter = require("./router/bookRouter");
const handleMongooseError = require("./lib/mongoDBErrormiddleware")
const passport = require("passport")
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const User = require('./models/userModel'); // Import your User model
const session = require('express-session');
const isAuthenticated = require("./lib/isAutenticated");


require("dotenv").config();



const app = express();
app.use(express.json());
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie :{ secure: false}
}));
// app.use(handleMongooseError);

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:4000/auth/google/callback",
  passReqToCallback: true
},
async function(req, accessToken, refreshToken, profile, done) {
  console.log(profile);
  let user = await User.findOne({ email: profile.email });
  if (user) {
    return done(null, user);
  } else {
    console.log(profile)
    const newUser = new User({
      name: profile.displayName,
      email: profile.email
    });
    await newUser.save();
    return done(null, newUser);
  }
})
);


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser( (user, done) => {
  done(null,user)  
});
// Define routes
app.get("/", (req,res)=>res.send("Hello World"))
app.get('/auth/google',
passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
passport.authenticate('google', { failureRedirect: '/' }),
(req, res) => {
  res.redirect('/');
});

app.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      console.log(err);
    } else {
      return res.redirect("/auth/google");
    }
  });
});

app.use("/api/book", bookrouter);

const PORT = process.env.PORT;

connectDB();


app.listen(PORT, ()=>{
    console.log(`App is listening on ${PORT}`)
})