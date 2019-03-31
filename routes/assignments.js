/**
 * Assignments Controller.
 */

var express = require('express');
var router = express.Router();
var assignmentController = require("../controllers/assignmentController");

/** GET Requests */

// Get Assignments Page
router.get('/', assignmentController.index);

module.exports = router;