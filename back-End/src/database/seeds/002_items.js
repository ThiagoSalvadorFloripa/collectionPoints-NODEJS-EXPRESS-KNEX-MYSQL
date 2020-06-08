

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
       {
         image: 'linkimage teste',
         title: 'Pilhas',
       }
      ]);
    });
};
