/**
 * Temporary router to serve the dashboard
 * until login functionality is complete.
 */

var express = require('express');
var router = express.Router();

// Get Dashboard
router.get('/', function(req, res, next) {
  res.render('dashboard', {
     title: 'cscade 2.0',
     page: 'Home'
  });
});

module.exports = router;
