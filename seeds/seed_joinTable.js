exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('jointable').del(),

    // Inserts seed entries
    knex('jointable').insert({
      books_id: '1',
      authors_id: '1'
    }),
    knex('jointable').insert({
      books_id: '1',
      authors_id: '2'
    }),
    knex('jointable').insert({
      books_id: '1',
      authors_id: '3'
    }),
    knex('jointable').insert({
      books_id: '2',
      authors_id: '4'
    }),
    knex('jointable').insert({
      books_id: '3',
      authors_id: '5'
    }),
    knex('jointable').insert({
      books_id: '4',
      authors_id: '5'
    }),
    knex('jointable').insert({
      books_id: '5',
      authors_id: '5'
    }),
    knex('jointable').insert({
      books_id: '6',
      authors_id: '5'
    })
  )
};
