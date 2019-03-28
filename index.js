const express = require('express');
const server = express();
const helmet= require('helmet');

server.use(express.json());
server.use(helmet());
const receipes = require('./router/receipes.js')
const ingredients = require('./router/ingredients.js')
const dishes = require('./router/dishes.js')



server.use('/api/receipes', receipes)
server.use('/api/ingredients', ingredients)
server.use('/api/dishes', dishes)

const port = 3000;
server.listen(port, ()=>  {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});