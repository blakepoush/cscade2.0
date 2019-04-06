/**
 * Routes to course page.
 */

var express = require('express');
var router = express.Router();
var courseController = require("../controllers/courseController");

/** GET Requests */

// Get Courses Page
router.get('/', courseController.index);

module.exports = router;