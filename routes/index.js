var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
     title: 'cscade++',
     user: {
       name: 'sam',
       type: 'student'
     } 
    });
});

module.exports = router;
