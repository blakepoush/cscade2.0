/**
 * Course controller, renders the data into the courses page.
 */
module.exports.index = function(req, res, next) {
  res.render('courses', {
    page: 'Courses'
   });
}