var express = require('express');
var router = express.Router();

function Books(){
  return knex('Books');
};

function Authors(){
  return knex('Authors');
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET all books to appear on books page*/
router.get('/books', function(req, res, next){
  var allRows;
  var tabley = knex.select().table('Books').then(function(rows){
    allRows = rows;
    res.render('/show', {obj: allRows});
  });
});

/*GET all authors to appear on authors page*/
router.get('/authors', function(req, res, next){
  var allRows;
  var tabley = knex.select().table('Authors').then(function(rows){
    allRows = rows;
    res.render('/show', {obj: allRows});
  });
});

/*Add a new book */
router.get('/books/new', function(req, res, next){
  var allRows;
  var tabley = knex.select().table('Books').then(function(rows){
    allRows = rows;
    res.render('/new', {obj: allRows});
  });
});

/*New Book Post- redirecting back to books page*/
router.post('/books/', function(req, res, next){
  var bookNew = {
    Title: req.body.title,
    Genre: req.body.genre,
    Description: req.body.description,
    Cover_URL: req.body.Cover_URL
  };
  Books().insert(bookNew).then(function(result){
    res.redirect('/books');
  });
});

/*New Author Post- redirecting back to authors page*/
router.post('/authors/', function(req, res, next){
  var authorNew = {
    FName: req.body.FName,
    LName: req.body.LName,
    Bio: req.body.Bio,
    Portrait: req.body.Portrait
  };
  Authors().insert(authorNew).then(function(result){
    res.redirect('/authors');
  });
});




module.exports = router;
