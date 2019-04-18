/**
 * Routes to course page.
 */

var express = require('express');
var router = express.Router();
var courseController = require("../controllers/courseController");

/** GET Requests */

// Get Courses Page
router.get('/', courseController.index);
router.get('/getAssignments/:courseId', courseController.getAssignments);
router.get('/getNotes/:courseId', courseController.getNotes);

module.exports = router;