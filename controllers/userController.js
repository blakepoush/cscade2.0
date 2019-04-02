/**
 * Controller to handle user operations.
 */

var userModel = require('../models/userModel.js');

/**
 * Retrieve Login Page. (GET)
 */
module.exports.index = function(req, res, next) {
  res.render('login', {
    page: 'Student Login'
   });
};

/**
 * Get Useful Links Page. (Get)
 */
module.exports.usefulLinks = function(req, res, next) {
  //Check if user is logged in
  res.render('usefulLinks', {
    page: 'Useful Links'
   });
}

/**
 * Login a User. (POST)
 */
module.exports.login = function(req, res, next) {
  var testData = [
    {
        title: 'Singly Linked List',
        due: '1/30/2019, 2:00pm',
        submitted: true,
        assignmentid: 'ssll'
    },
    {
        title: 'Priority Queue',
        due: '2/15/2019, 11:59pm',
        submitted: false,
        assignmentid: 'pqueue'
    },
    {
        title: 'Huffman\'s Algorithm',
        due: '03/01/2019, 2:00pm',
        submitted: false,
        assignmentid: 'huff'
    }
  ];
 
    userModel.retrieveUser(req.body.username,req.body.password)
            .then(user => {
                if(user.name === req.body.username){
                    res.render('dashboard', {
                      page: 'Dashboard',
                      assignments: testData
		    });
                }
                else{
                    res.render('usefulLinks', {
                      page: user + req.body.username + req.body.username
                     });
                }
            })
            .catch(error =>{
                console.log("error");
            });
}

/**
 * Logout a User. (POST)
 */
module.exports.logout = function(req, rex, next) {
  //Implement
}
