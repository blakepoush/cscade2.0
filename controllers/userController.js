/**
 * Controller to handle user operations.
 */

var userModel = require('../models/userModel.js');
var courseModel = require('../models/courseModel.js');
var assignmentModel = require('../models/assignmentModel.js');

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
  var assignments = [];
    userModel.retrieveUser(req.body.username,req.body.password)
		.then(user => {
			// User Exists
			console.log(user);
			if(user.email === req.body.username){
				console.log(user.user_id);
				assignmentModel.retrieveUserAssignments(user.user_id)
					.then(assignments => {
						res.render('dashboard', {
							page: 'Dashboard',
							assignments: assignments
						});
					})
					.catch(error => {
					console.log("Retrieving Assignment Error");
			});
		}
	})
	// User Entered In Incorrect Credentials
	.catch(error =>{
		res.render('usefulLinks', {
		page: "Wrong Password"
		});
	});
}

/**
 * Logout a User. (POST)
 */
module.exports.logout = function(req, res, next) {
  //Implement
}
