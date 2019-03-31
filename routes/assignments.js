/**
 * Temporary router to serve the dashboard
 * until login functionality is complete.
 */

var express = require('express');
var router = express.Router();
var assignmentController = require("../controllers/assignmentController");

/** GET Requests */

// Get Assignment Page
router.get('/', assignmentController.index);

module.exports = router;