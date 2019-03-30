/**
 * Controller to handle user operations.
 */

//var Task = require('../model/userModel.js');

/**
 * Retrieve Login Page. (GET)
 */
module.exports.index = function(req, res, next) {
  res.render('login', {
    title: 'Student Login',
    page: 'Login'
   });
};

/**
 * Login a User. (POST)
 */
module.exports.login = function(req, res, next) {
  //Implement 
}

/**
 * Logout a User. (POST)
 */
module.exports.logout = function(req, rex, next) {
  //Implement
}