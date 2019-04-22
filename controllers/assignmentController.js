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
        var assignmentId = parseInt(req.params.assignmentId);
        courseModel.retrieveCourseID(req.params.assignmentId)
        .then(courseId => {
          assignmentModel.retrieveUserCurrentAssignmentsForCourse(req.session.user.user_id, courseId.course_id)
          .then(currentAssignments => {
            assignmentModel.retrieveUserPastAssignmentsForCourse(req.session.user.user_id, courseId.course_id)
              .then(pastAssignments => {
                assignmentModel.retrieveAssignmentDetails(req.session.user.user_id, assignmentId)
                  .then(details => {
                    res.render('assignments', {
                      page: 'Assignments',
                      courses: courses,
                      currentAssignments: currentAssignments, 
                      pastAssignments: pastAssignments, 
                      assignmentId: req.params.assignmentId, 
                      courseId: courseId.course_id,
                      details: details[0]
                    });
                  })
                  .catch(err => {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(err));
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
    var assignmentId = parseInt(req.params.assignmentId);
    assignmentModel.retrieveAssignmentDetails(req.session.user.user_id, assignmentId)
      .then(details => {
        res.render('partials/assignmentDetails', {details: details[0]});
        //res.end(JSON.stringify(details[0]));
      })
      .catch(err => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(err));
      });
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

