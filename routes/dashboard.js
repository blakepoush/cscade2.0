/**
 * Temporary router to serve the dashboard
 * until login functionality is complete.
 */

var express = require('express');
var router = express.Router();

// Get Dashboard
router.get('/', function(req, res, next) {
  res.render('dashboard', {
     page: 'Dashboard'
  });
});

module.exports = router;
