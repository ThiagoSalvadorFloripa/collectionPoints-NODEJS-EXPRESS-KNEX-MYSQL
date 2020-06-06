
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('points').del()
    .then(function () {
      // Inserts seed entries
      return knex('points').insert([
       {
         image: 'linkimage teste',
         name: 'Thiago Salvador',
         email:'thiago.salvadorpower@gmail.com',
         whatsapp: '48 9 96378790',
         latitude: '-27.551321',
         longitude: '-48.496829',
         city: 'Florianópolis',
         uf:'SC',
       }
      ]);
    });
};
