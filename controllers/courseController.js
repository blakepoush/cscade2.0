const pug = require('pug');
var assignmentModel = require('../models/assignmentModel.js');
var courseModel = require('../models/courseModel.js');
var noteModel = require('../models/noteModel.js');

/**
 * TODO: confer with others about what other data/functions are needed
 */

/**
 * Course controller, renders the data into the courses page.
 */
module.exports.index = function(req, res, next) {
  if(req.session.user) {
    courseModel.retrieveCourses_ofStudent(req.session.user.user_id)
    .then(courses => {
      res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
      res.render('courses', {
        page: 'Courses',
        courses: courses
       });
    })
  } else {
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.render('login', {
			page: 'Student Login',
			error: "You must be logged in to access this page."
		});
  }
}

/** 
 * Function called via AJAX to Get Assignments.
 */
module.exports.getAssignments = function(req, res, next) {
  if(req.session.user) {
    assignmentModel.retrieveUserCurrentAssignmentsForCourse(req.session.user.user_id, req.params.courseId)
      .then(currentAssignments => {
        assignmentModel.retrieveUserPastAssignmentsForCourse(req.session.user.user_id, req.params.courseId)
          .then(pastAssignments => {
            if(req.params.getSection == "true") {
              var courseId = parseInt(req.params.courseId);
              res.render('partials/assignmentSection', {currentAssignments: currentAssignments, pastAssignments: pastAssignments, courseId: courseId});
            } else {
              var courseId = parseInt(req.params.courseId);
              res.render('partials/assignmentList', {currentAssignments: currentAssignments, pastAssignments: pastAssignments,courseId: courseId});
            }
          })
          .catch(err => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({"error": "Error Retrieving Data"}));
          });
      })
      .catch(err => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({"error": "Error Retrieving Data"}));
      });
  } else {
    res.end(JSON.stringify({"error": "You must be logged in to access assignment grades!"}));
  }
}

/** 
 * Function called via AJAX to Get Course Notes.
 */
module.exports.getNotes = function(req, res, next) {
  if(req.session.user) {
    noteModel.retrieveCourses_notes(req.params.courseId)
      .then(notes => {
        res.render('partials/noteList', {notes: notes});
      })
      .catch(err => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({"error": "Error Retrieving Data"}));
      });
  } else {
    res.end(JSON.stringify({"error": "You must be logged in to access course notes!"}));
  }
}

/*
module.exports.getAssignments = function(req, res, next) {
  //TODO:
  //console.log(req.params);
  if(req.session.user) {
    assignmentModel.retrieveCourses_assignments(req.params.courseId)
      .then(assignments => {
        res.render('partials/assignmentList', {assignments: assignments});
      })
      .catch(err => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({"error": "Error"}));
      });
  } else {
    res.render('login', {
			page: 'Student Login',
			error: "You must be logged in to access this page."
		});
  }
}
*/