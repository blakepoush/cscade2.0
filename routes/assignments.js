/**
 * Assignments Controller.
 */

var express = require('express');
var router = express.Router();
var assignmentController = require("../controllers/assignmentController");

/** GET Requests */

// Get Assignments Page
router.get('/', assignmentController.index);
router.get('/:assignmentId', assignmentController.index);
router.get('/getAssignmentInfo/:assignmentId', assignmentController.getAssignmentInfo);
router.post('/upload',assignmentController.uploadFile);

module.exports = router;