/**
 * Router to handle request involving user operations
 * like logging in and logging out.
 */

var express = require('express');
var router  = express.Router();
var userController = require("../controllers/userController");

/** GET Requests **/

// Login Page
router.get('/', userController.index);

/** POST Requests */
router.post('/login', userController.login);
router.post('/logout', userController.logout);

module.exports = router;