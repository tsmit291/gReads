var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function books(){
  return knex('books');
};

function authors(){
  return knex('authors');
};

function jointable(){
  return knex('jointable');
};

/*GET all authors and books to appear on the index page*/
router.get('/', function(req, res, next){
  books().select().then(function(results){
    res.render('index', {obj: results});
  });
});
/* GET all books to appear on books page*/
router.get('/books', function(req, res, next){
  books().select().then(function(results){
    res.render('show', {obj: results});
  });
});

/*GET all authors to appear on authors page*/
router.get('/authors', function(req, res, next){
  var allRows;
  var tabley = knex.select().table('authors').then(function(rows){
    allRows = rows;
    res.render('/show', {obj: allRows});
  });
});

/*Add a new book */
router.get('/books/new', function(req, res, next){
  var allRows;
  var tabley = knex.select().table('books').then(function(rows){
    allRows = rows;
    res.render('/new', {obj: allRows});
  });
});

/*New Book Post- redirecting back to books page*/
router.post('/books/', function(req, res, next){
  var bookNew = {
    title: req.body.title,
    genre: req.body.genre,
    description: req.body.description,
    cover_url: req.body.Cover_URL
  };
  books().insert(bookNew).then(function(result){
    res.redirect('/books');
  });
});

/*New Author Post- redirecting back to authors page*/
router.post('/authors/', function(req, res, next){
  var authorNew = {
    f_name: req.body.FName,
    l_name: req.body.LName,
    bio: req.body.Bio,
    portrait: req.body.Portrait
  };
  authors().insert(authorNew).then(function(result){
    res.redirect('/authors');
  });
});

/*View a specific book with authors*/
router.get('/books/:id', function(req, res, next){
  knex.from('jointable').join('authors', 'jointable.authors_id', 'authors.id')
  .join('books', 'jointable.books_id', 'books.id');
})



module.exports = router;
