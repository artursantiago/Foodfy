const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const data = require('./data');

const server = express();


// Define the static files page
server.use(express.static('public'));
// tem que permitir usar o body da request --------------------
// Define the template engine
server.set('view engine', 'njk');
server.use(routes);

// Nunjuncks settings
nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true,
});

// Server will start in port 5000
server.listen(5000);