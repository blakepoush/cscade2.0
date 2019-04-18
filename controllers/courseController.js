const pug = require('pug');
var assignmentModel = require('../models/assignmentModel.js');
var courseModel = require('../models/courseModel.js');

/**
 * TODO: confer with others about what other data/functions are needed
 */

/**
 * Course controller, renders the data into the courses page.
 *
module.exports.index = function(req, res, next) {
  res.render('courses', {
    page: 'Courses'
   });
}*/

/**
 * Course controller, renders the data into the courses page.
 */
module.exports.index = function(req, res, next) {
  if(req.session.user) {
    courseModel.retrieveCourses_ofStudent(req.session.user.user_id)
    .then(courses => {
      res.render('courses', {
        page: 'Courses',
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

module.exports.getAssignments = function(req, res, next) {
  if(req.session.user) {
    assignmentModel.retrieveCourses_assignments(req.params.courseId)
      .then(assignments => {
        res.render('partials/assignmentList', {assignments: assignments});
      })
      .catch(err => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({"error": "Error Retrieving Data"}));
      });
  } else {
    res.end(JSON.stringify({"error": "You must be logged in to access assignments!"}));
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