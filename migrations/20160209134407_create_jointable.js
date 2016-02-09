exports.up = function(knex, Promise) {
  return knex.schema.createTable('jointable', function(table){
    table.increments();
    table.integer('books_id');
    table.integer('authors_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('jointable');
};
