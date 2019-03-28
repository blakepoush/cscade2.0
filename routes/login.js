var express = require('express');
var router  = express.Router();
var loginController = require("../controllers/loginController");

/* GET Login Page */
router.get('/', loginController.index);

module.exports = router;