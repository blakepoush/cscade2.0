var gradeModel = require('../models/gradeModel.js');
var courseModel = require('../models/courseModel.js');

/**
 * TODO: confer with others about what other data/functions are needed
 */

/**
 * Renders grades page as a controller.
 */
module.exports.index = function(req, res, next) {
  if(req.session.user) {
    courseModel.retrieveCourses_ofStudent(req.session.user.user_id)
    .then(courses => {
      res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
      res.render('grades', {
        page: 'Grades',
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
 * Function called via AJAX to Get Grades.
 */
module.exports.getGrades = function(req, res, next) {
  if(req.session.user) {
    gradeModel.retrieveGrades(req.session.user.user_id, req.params.courseId)
      .then(grades => {
        //res.render('partials/assignmentList', {assignments: assignments});
        res.end(JSON.stringify(grades));
      })
      .catch(err => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({"error": "Error Retrieving Data"}));
      });
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({"error": "You must be logged in to access grades!"}));
  }
}

/**
 * TODO: Get weight relative to each assignment
 *       Get grades in relation to those assignments
 *       Calculate average grade based on these numbers
 *       Return average
module.exports.calculateAvg (course_id, user_id) {
  
}
 */