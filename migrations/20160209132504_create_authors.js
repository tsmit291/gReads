exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', function(table){
    table.increments();
    table.string('f_name');
    table.string('l_name');
    table.text('bio');
    table.string('portrait');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors');
};
