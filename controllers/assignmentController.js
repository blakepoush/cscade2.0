var courseModel = require('../models/courseModel.js');
var assignmentModel = require('../models/assignmentModel.js');

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
      if(req.params.assignmentId) {
        courseModel.retrieveCourseID(req.params.assignmentId)
        .then(courseId => {
          assignmentModel.retrieveUserCurrentAssignmentsForCourse(req.session.user.user_id, courseId.course_id)
          .then(currentAssignments => {
            assignmentModel.retrieveUserPastAssignmentsForCourse(req.session.user.user_id, courseId.course_id)
              .then(pastAssignments => {
                var details = {
                  "title": "Test Assignment",
                  "duedate": "04-12-19",
                  "details": "This a test assignment used for testing purposes only!",
                  "assignment_id": "25",
                  "points": "40",
                  "submitted": "test.txt",
                  "feedback": "Good job, make sure to check your indentation."
                };
                res.render('assignments', {
                  page: 'Assignments',
                  courses: courses,
                  currentAssignments: currentAssignments, 
                  pastAssignments: pastAssignments, 
                  assignmentId: req.params.assignmentId, 
                  courseId: courseId.course_id,
                  details: details
                });
              })
              .catch(err => {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({"error": "Errors Retrieving Data"}));
              });
          })
          .catch(err => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({"error": "Errorss Retrieving Data"}));
          });
        })
        .catch(err => {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({"error": "Error Retrieving Data"}));
        });
      } else {
        res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
        res.render('assignments', {
          page: 'Assignments',
          courses: courses
        });
      }
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
 * Get the details for an assignment (AJAX Request).
 */
module.exports.getAssignmentInfo = function(req, res, next) {
  if(req.session.user) {
    /*assignmentModel.retrieveAssignment_info(req.session.user.user_id, req.params.assignmentId)
      .then(details => {
        res.render('partials/assignmentDetails', {details: details});
      })
      .catch(err => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({"error": "Error Retrieving Data"}));
      });*/
      //details.title,details.duedate,details.details,details.assignment_id,details.points,details.submitted,details.feedback
      var details = {
        "title": "Test Assignment",
        "duedate": "04-12-19",
        "details": "This a test assignment used for testing purposes only!",
        "assignment_id": "25",
        "points": "40",
        "submitted": "test.txt",
        "feedback": "Good job, make sure to check your indentation."
      };
      res.render('partials/assignmentDetails', {details: details});
  } else {
    res.end(JSON.stringify({"error": "You must be logged in to access assignment details!"}));
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

