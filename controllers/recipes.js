const fs = require('fs');
const data = require('../data.json');

exports.index = (req, res) => {
  console.log('aqui tbm');
  
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
  return res.send('post');
}

exports.put = (req, res) => {
  return res.send('put');
}

exports.delete = (req, res) => {
  const { id } = req.body;
  console.log(id);
  const filteredRecipes = data.recipes.filter( recipe => {
    return recipe.id != id;
  });

  data.recipes = filteredRecipes;
  console.log('ate aqui');
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      return res.send('Falha na escrita dos dados no arquivo.');
    }
    return res.redirect('admin/recipes');
  });
}