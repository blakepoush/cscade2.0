/**
 * Get the Courses Page.
 */
module.exports.index = function(req, res, next) {
  res.render('courses', {
    page: 'Courses'
   });
}