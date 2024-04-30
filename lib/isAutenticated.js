const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      // If user is authenticated, allow access to the next middleware or route handler
      return next();
    } else {
      // If user is not authenticated, redirect to login page or send an error response
      return res.redirect('/auth/google');
    }
  };
  
  module.exports = isAuthenticated;