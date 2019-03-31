/**
 * Temporary router to serve the dashboard
 * until login functionality is complete.
 */

var express = require('express');
var router = express.Router();

// Get Dashboard
router.get('/', function(req, res, next) {
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
  res.render('dashboard', {
     page: 'Dashboard',
     assignments: testData
  });
});

module.exports = router;
