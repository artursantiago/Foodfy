const express = require('express');
const nunjucks = require('nunjucks');
const data = require('./data');

const server = express();


// Define the static files page
server.use(express.static('public'));

// Define the template engine
server.set('view engine', 'njk');

// Nunjuncks settings
nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true,
});

server.get('/', (req, res) => {
  return res.render('index');
});

server.get('/about', (req, res) => {
  return res.render('about');
});

server.get('/recipes', (req, res) => {
  return res.render('recipes');
});

server.use((req, res) => {
  return res.status(404).render('not-found');
});

// Server will start in port 5000
server.listen(5000);