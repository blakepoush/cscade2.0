const pug = require('pug');
var assignmentModel = require('../models/assignmentModel.js');

/**
 * Course controller, renders the data into the courses page.
 */
module.exports.index = function(req, res, next) {
  res.render('courses', {
    page: 'Courses'
   });
}

module.exports.getAssignments = function(req, res, next) {
  //TODO: Validate user ID
  //console.log(req.params);
  assignmentModel.retrieveCourses_assignments(req.params.courseId)
    .then(assignments => {
      res.render('partials/assignmentList', {assignments: assignments});
    })
    .catch(err => {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({"error": "Error"}));
    });
}