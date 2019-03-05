var express = require('express');
var router  = express.Router();

/* GET Login Page */
router.get('/', function(req, res, next) {
  res.render('login', {
     title: 'Login',
     page: 'Home'
    });
});

module.exports = router;