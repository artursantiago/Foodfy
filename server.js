const express = require('express');
const nunjucks = require('nunjucks');
const methodOverride = require('method-override');
const routes = require('./routes');

const server = express();


// Define the static files page
server.use(express.static('public'));
// Allows to use req.body
server.use(express.urlencoded({ extended: true }));
server.use(methodOverride('_method'));
server.use(routes);

// Define the template engine
server.set('view engine', 'njk');

// Nunjuncks settings
nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true,
});

// Server will start in port 5000
server.listen(5000);