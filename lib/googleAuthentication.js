// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth2').Strategy;
// const User = require('../models/userModel'); // Import your User model

// require("dotenv").config();

// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://localhost:4000/auth/google/callback",
//     passReqToCallback: true
//   },
//   function(request, accessToken, refreshToken, profile, done) {
//     User.findOne({ googleId: profile.id }, (err, user) => {
//       if (err) {
//         return done(err);
//       }
//       if (user) {
//         // If user exists, return the user
//         return done(null, user);
//       } else {
//         // If user doesn't exist, create a new user
//         const newUser = new User({
//           googleId: profile.id,
//           name: profile.displayName
//           // You can also save other user information from the profile if needed
//         });
//         newUser.save((err) => {
//           if (err) {
//             return done(err);
//           }
//           return done(null, newUser);
//         });
//       }
//     });
//   } 
// ));

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   User.findById(id, (err, user) => done(err, user));
// });
