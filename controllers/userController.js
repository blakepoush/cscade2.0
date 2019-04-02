/**
 * Controller to handle user operations.
 */

var userModel = require('../models/userModel.js');

/**
 * Retrieve Login Page. (GET)
 */
module.exports.index = function(req, res, next) {
  res.render('login', {
    page: 'Student Login'
   });
};

/**
 * Get Useful Links Page. (Get)
 */
module.exports.usefulLinks = function(req, res, next) {
  //Check if user is logged in
  
  //pass view
  res.render('usefulLinks', {
    page: 'Useful Links'
   });
}

/**
 * Login a User. (POST)
 */
module.exports.login = function(req, res, next) {
    userModel.retrieveUser(req.body.username,req.body.password)
            .then(user => {
                if(user.name === req.body.username){
                    res.render('dashboard', {page: 'Dashboard'});
                }
                else{
                    res.render('usefulLinks', {
                      page: user + req.body.username + req.body.username
                     });
                }
            })
            .catch(error =>{
                console.log("error");
            });
}

/**
 * Logout a User. (POST)
 */
module.exports.logout = function(req, res, next) {
  //Implement
}
