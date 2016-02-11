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
    authors().select().then(function(rows){
      res.render('index', {obj: results, authorobj: rows});
    });
  });
});

/*Get authors underneath books on book show page*/
router.get('/books', function(req, res, next){
  books().select().then(function(results){
    knex.from('authors').innerJoin('jointable', 'authors.id', 'jointable.authors_id').then(function(join){
      res.render('show', {books: results, joinTable: join});
    })
  });
});

/*Add a new book */
router.get('/books/new', function(req, res, next){
  res.render('books/bnew');
});

/* New Book Post- redirecting back to books page*/
router.post('/books/', function(req, res, next){
  var bookNew = {
    title: req.body.title,
    genre: req.body.genre,
    cover_url: req.body.cover_url,
    description: req.body.description
  };
  books().insert(bookNew).then(function(result){
    res.redirect('/books');
  });
});

/*Edit a specific book's page*/
router.get('/books/:id/edit', function(req, res, next){
  books().where('id', req.params.id).first()
  .then(function(result){
    res.render('books/bedit', {bookNew: result});
  });
});

/*Post the edits of a specific book's page*/
router.post('/books/:id', function(req, res, next){
  books().where('id', req.params.id).update(req.body)
  .then(function(result){
    res.redirect('/books')
  })
})

/*GET a specific book and its author(s) to appear on the books show page*/
router.get('/books/:id', function(req, res, next){
  books().where('id', req.params.id).then(function(result){
    knex.from('authors').innerJoin('jointable', 'authors.id', 'jointable.authors_id').then(function(join){
      res.render('books/bshow', {obj: result, joinTable: join})
    });
  });
});

/*Delete a specific book */
router.get('/books/:id/delete', function(req, res, next){
  books().where('books.id', req.params.id).then(function(result){
    knex.from('authors').innerJoin('jointable', 'authors.id', 'jointable.authors_id').then(function(join){
      res.render('books/bdelete', {obj: result, joinTable: join})
    });
  });
});

router.post('/books/:id/delete', function (req, res, next){
  books().where('id', req.params.id).del()
  .then(function (result){
    res.redirect('/books');
  });
});

/*GET all authors and their books to appear on the author show page*/
router.get('/authors', function(req, res, next){
  authors().select().then(function(results){
    knex.from('books').innerJoin('jointable', 'books.id', 'jointable.books_id').then(function(join){
      res.render('authors/show', {books: results, joinTable: join});
    });
  });
});


/*New Author Post- redirecting back to authors page*/
// router.post('/authors/', function(req, res, next){
//   var authorNew = {
//     f_name: req.body.FName,
//     l_name: req.body.LName,
//     bio: req.body.Bio,
//     portrait: req.body.Portrait
//   };
//   authors().insert(authorNew).then(function(result){
//     res.redirect('/authors');
//   });
// });





module.exports = router;
