const data = require('../data.json');

exports.index = (req, res) => {
  return res.render('admin/index', { recipes: data.recipes});
}

exports.create = (req, res) => {
  return res.send('create');
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
  return res.send('delete');
}