var gradeModel = require('../models/gradeModel.js');
var courseModel = require('../models/courseModel.js');

/**
 * TODO: confer with others about what other data/functions are needed
 */

/**
 * Renders grades page as a controller.
 */
module.exports.index = function(req, res, next) {
  res.render('grades', {
    page: 'Grades'
  });
}

/**
 * Renders grades into grades page
 * 
 * TODO: get course id based on retrieveCourses_ofStudents output
module.exports.index = function(req, res, next) {
  if(req.session.user) {
    courseModel.retrieveCourses_ofStudent(req.session.user.user_id)
    .then(courses => {                            ------------get course id from here
      gradeModel.retrieveGrades(req.session.user.user_id, course_id)
        res.render('grades', {
            page: 'Grades',
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
 * TODO: Get weight relative to each assignment
 *       Get grades in relation to those assignments
 *       Calculate average grade based on these numbers
 *       Return average
module.exports.calculateAvg (course_id, user_id) {
  
}
 */