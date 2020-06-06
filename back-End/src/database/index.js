const knexfile = require('../../knexfile')
const knex = require('knex')(knexfile['development']) //pegando a chave

module.exports = knex
