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
  const recipes = [...data];
  // Limite the recipes length to six
  recipes.filter((recipe, recipeIndex) => {
    return recipeIndex < 6;
  });

  return res.render('index', { recipes });
});

server.get('/about', (req, res) => {
  return res.render('about');
});

server.get('/recipes', (req, res) => {
  console.log(data.length);
  return res.render('recipes', { recipes: data});
});

server.get('/recipes/:index', (req, res) => {
  const recipes = [...data];
  const recipeIndex = req.params.index;

  const recipe = recipes[recipeIndex];

  if (!recipe) {
    return res.status(404).render('not-found');
  }

  return res.render('recipe', { recipe });

})

// Catch all 404 http status and render the not-found page
server.use((req, res) => {
  return res.status(404).render('not-found');
});

// Server will start in port 5000
server.listen(5000);