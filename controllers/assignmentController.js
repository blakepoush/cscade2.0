module.exports.index = function(req, res, next) {
  res.render('login', {
    title: 'Student Login',
    page: 'Login'
   });
}