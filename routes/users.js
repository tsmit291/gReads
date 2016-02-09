var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET all books to appear on books page*/
router.get('/books', function(req, res, next){
  res.render('show');
});


module.exports = router;
