import express from 'express';
const knex = require('./database')

const routes = express.Router();

routes.get('/points', async (request, response)=> {
    const points = await knex('points').select('*');
    return response.json(points);
});

export default routes;