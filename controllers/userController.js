/**
 * Controller to handle user operations.
 */

var userModel        = require('../models/userModel.js');
var courseModel      = require('../models/courseModel.js');
var assignmentModel  = require('../models/assignmentModel.js');
var usefulLinksModel = require('../models/usefulLinksModel.js');
var announcementModel = require('../models/announcementModel.js');

/**
 * TODO: confer with others about if server time is still needed
 * 			 replace getUserAssignments calls with getUserCurrentAssignments calls
 */

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
  if(req.session.user) {
		usefulLinksModel.retrieveUsefulLinks()
			.then(links => {
				res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
				res.render('usefulLinks', {
					page: 'Useful Links',
					links: links
				});
			});
	} else {
		res.render('login', {
			page: 'Student Login',
			error: "You must be logged in to access this page."
		});
	}	
}

/**
 * Login a User. (POST)
 */
module.exports.login = function(req, res, next) {
    userModel.retrieveUser(req.body.username,req.body.password)
		.then(user => {
			// User Exists
			console.log(user);
			if(user.email === req.body.username){
				console.log(user.user_id);
				announcementModel.retrieveAnnouncements()
				.then(announcements => {
					assignmentModel.retrieveUserCurrentAssignments(user.user_id) //retrieveUserCurrentAssignments
					.then(assignments => {
						req.session.user = user;
						res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
						res.render('dashboard', {
							page: 'Dashboard',
							assignments: assignments,
							announcements: announcements
						});
					})
					.catch(error => {
						console.log("Retrieving Assignment Error");
					});
				});
		}
	})
	// User Entered In Incorrect Credentials
	.catch(error =>{
		res.render('login', {
			page: "Student Login",
			error: "Username and password don't match any accounts."
		});
	});
}

/**
 * Logout a User. (POST)
 */
module.exports.logout = function(req, res, next) {
  req.session.destroy(() => {
		res.render('login', {
			page: "Student Login",
			success: "Logout Success"
		});
	});
}

module.exports.getDashboard = function(req, res, next) {
	if(req.session.user) {
		announcementModel.retrieveAnnouncements()
			.then(announcements => {
				assignmentModel.retrieveUserCurrentAssignments(req.session.user.user_id) //retrieveUserCurrentAssignments
				.then(assignments => {
					res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
					res.render('dashboard', {
						page: 'Dashboard',
						assignments: assignments,
						announcements: announcements
					});
				})
				.catch(error => {
					console.log("Retrieving Assignment Error");
				});
			});
  } else {
		res.render('login', {
			page: 'Student Login',
			error: "You must be logged in to access this page."
		});
	}
}
