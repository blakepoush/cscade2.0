/**
 * Router to handle request involving user operations
 * like logging in and logging out.
 */

var express = require('express');
var router  = express.Router();
var userController = require("../controllers/userController");

/** GET Requests **/
router.get('/', userController.index);                  // Get Login Page
router.get('/usefulLinks', userController.usefulLinks); // Useful Links
router.get('/dashboard', userController.getDashboard);  // Get Dashboard
router.get('/logout', userController.logout);
 
/** POST Requests */
router.post('/dashboard', userController.login);        // Log In
router.post('/', userController.logout);                // Log Out

module.exports = router;