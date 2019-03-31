/**
 * Get the Assignments Page.
 */
module.exports.index = function(req, res, next) {
  res.render('assignments', {
    page: 'Assignments'
   });
}