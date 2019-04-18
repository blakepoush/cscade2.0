var courseModel = require('../models/courseModel.js');
//var assignmentModel = require('../models/assignmentModel.js');

/**
 * TODO: confer with others about what other data/functions are needed
 */

/**
 * Get the Assignments Page.
 */
module.exports.index = function(req, res, next) {
  if(req.session.user) {
    courseModel.retrieveCourses_ofStudent(req.session.user.user_id)
    .then(courses => {
      res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
      res.render('assignments', {
        page: 'Assignments',
        courses: courses
       });
    });
  } else {
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.render('login', {
			page: 'Student Login',
			error: "You must be logged in to access this page."
		});
  }
}

/**
 * Get the Assignments Page.
module.exports.index = function(req, res, next) {
  if(req.session.user) {
    assignmentModel.retrieveUserAssignments(req.session.user.user_id)
    .then(assignments => {
      res.render('assignments', {
        page: 'Assignments',
        courses: courses
      });
    })
  } else {
    res.render('login', {
			page: 'Student Login',
			error: "You must be logged in to access this page."
		});
  }
}
*/

/**
 * TODO: confer with others about 
 *          whether Ajax or base JS to be used
 *          assignments or submitted_assignments table to be used
 *          new function in assignmentMethod for this?
 *       take file path and other relevent data and insert it into previously mentioned table
module.exports.submitAssignment = function(req, res, next) {

}
*/

