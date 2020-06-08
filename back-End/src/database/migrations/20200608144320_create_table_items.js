
exports.up = knex => knex.schema.createTable('items', table =>{
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('title').notNullable();
})

exports.down = knex => knex.schema.dropTable('items')
