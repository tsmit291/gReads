
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('jointable').del(),

    // Inserts seed entries
    knex('jointable').insert({
      books_id: '1',
      author_id: '1'
    }),
    knex('jointable').insert({
      books_id: '1',
      author_id: '2'
    }),
    knex('jointable').insert({
      books_id: '1',
      author_id: '3'
    }),
    knex('jointable').insert({
      books_id: '2',
      author_id: '4'
    }),
    knex('jointable').insert({
      books_id: '3',
      author_id: '5'
    }),
    knex('jointable').insert({
      books_id: '4',
      author_id: '5'
    }),
    knex('jointable').insert({
      books_id: '5',
      author_id: '5'
    }),
    knex('jointable').insert({
      books_id: '6',
      author_id: '5'
    }),
  );
};
