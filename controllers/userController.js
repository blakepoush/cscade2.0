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