const fs = require('fs');
const data = require('../data.json');

exports.index = (req, res) => {
  return res.render('admin/index', { recipes: data.recipes});
}

exports.create = (req, res) => {
  return res.render('admin/create');
}

exports.show = (req, res) => {
  const { id } = req.params;
  const recipe = data.recipes.find( recipe => {
    return recipe.id == id;
  });
  
  return res.render('admin/show', { recipe });
}

exports.edit = (req, res) => {
  const { id } = req.params;
  const recipe = data.recipes.find( recipe => {
    return recipe.id == id;
  })
  
  return res.render('admin/edit', { recipe });
}

exports.post = (req, res) => {
  let id = 1
  const idLastRecipe = data.recipes[data.recipes.length -1 ].id
  if (idLastRecipe) {
    id = idLastRecipe + 1;
  }

  const recipe = {
    id,
    ...req.body,
  }

  data.recipes.push(recipe);

  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      return res.send('Write file error!');
    }
    return res.redirect('/admin/recipes/' + id);
  });
}

exports.put = (req, res) => {
  const { id } = req.body;
  let index = 0;
  
  const foundRecipe = data.recipes.find( (recipe, recipeIndex) => {
    if (recipe.id == req.body.id) {
      index = recipeIndex;
      return true;
    }
  })

  const recipe = {
    ...foundRecipe,
    ...req.body,
    id: Number(id),
  }

  data.recipes[index] = recipe;

  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      return res.send('Write file error!');
    }
    return res.redirect('/admin/recipes/' + id);
  });
}

exports.delete = (req, res) => {
  const { id } = req.body;

  const filteredRecipes = data.recipes.filter( recipe => {
    return recipe.id != id;
  });

  data.recipes = filteredRecipes;

  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      return res.send('Falha na escrita dos dados no arquivo.');
    }
    return res.redirect('/admin/recipes');
  });
}