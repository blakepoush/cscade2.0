var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
     title: 'cscade 2.0',
     page: 'Home'
  });
});

module.exports = router;
