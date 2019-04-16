/**
 * Routes to grade controller.
 */

var express = require('express');
var router = express.Router();
var gradeController = require("../controllers/gradeController");

/** GET Requests */

// Get Courses Page
router.get('/', gradeController.index);

module.exports = router;