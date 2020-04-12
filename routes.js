const express = require('express');
const routes = express.Router();

const data = require('./data');
const recipes = require('./controllers/recipes');

/**
 * Common area
 */
routes.get('/', (req, res) => {
  const recipes = [...data];
  // Limite the recipes length to six
  recipes.filter((recipe, recipeIndex) => {
    return recipeIndex < 6;
  });
  return res.render('public/index', { recipes });
});
routes.get('/about', (req, res) => {
  return res.render('public/about');
});
routes.get('/recipes', (req, res) => {
  return res.render('public/recipes', { recipes: data});
});
routes.get('/recipes/:index', (req, res) => {
  const recipes = [...data];
  const recipeIndex = req.params.index;

  // Catch the recipe with the provided index
  const recipe = recipes[recipeIndex];

  // If the recipe wasn`t found render the not-found page
  if (!recipe) {
    return res.status(404).render('not-found');
  }

  return res.render('public/recipe', { recipe });

})

/**
 * Admin area
 */
routes.get("/admin/recipes", recipes.index);
routes.get("/admin/recipes/create", recipes.create);
routes.get("/admin/recipes/:id", recipes.show);
routes.get("/admin/recipes/:id/edit", recipes.edit);

routes.post("/admin/recipes", recipes.post);
routes.put("/admin/recipes", recipes.put);
routes.delete("/admin/recipes", recipes.delete);

// Catch all 404 http status and render the not-found page
routes.use((req, res) => {
  return res.status(404).render('not-found');
});

module.exports = routes;