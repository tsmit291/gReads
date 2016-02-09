
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('table_name').del(),

    // Inserts seed entries
    knex('Books').insert({
      Book_ID: '1',
      Title: 'Python In A Nutshell',
      Genre: 'Python',
      Description: 'This book offers Python programmers one place to look when they need help remembering or deciphering the syntax of this open source language and its many powerful but scantily documented modules. This comprehensive reference guide makes it easy to look up the most frequently needed information--not just about the Python language itself, but also the most frequently used parts of the standard library and the most important third-party extensions.',
      Cover_URL: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/python_in_a_nutshell.jpg'
    }),
    knex('Books').insert({
      Book_ID: '1',
      Author_ID: '1'
      Author1_FName: 'Name',
      Author1_LName: 'Name',
      Author1_Biography: 'Bio',
      Author1_Portrait: 'Portrait',
    }),
    knex('Books').insert({
      Author2_FName: 'Name',
      Author2_LName: 'Name',
      Author2_Biography: 'Bio',
      Author2_Portrait: 'Portrait',
    }),

    knex('table_name').insert({id: 3, colName: 'rowVa lue3'}),
  );
};
