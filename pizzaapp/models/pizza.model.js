function Pizza(size, ingredients) {
  this.size = size;
  this.ingredients = ingredients;

  this.title = buildTitle(size, ingredients);
  this.description = buildDescription(size, ingredients);

  // this.buildTitle = buildTitle;
  // this.buildDescription = buildDescription;
  return this;

  function buildTitle(size, ingredients) {
    return  size + ' ' + ingredients.cheese + ', ' + ingredients.toppings + ' pizza with ' + ingredients.crust + ' crust';
  }

  function buildDescription(size, ingredients) {
    var content = 'This pizza has: \n\n';
    content += 'Size: ' +  size + '\n';
    content += 'Crust: ' +  ingredients.crust + '\n';
    content += 'Sauce: ' +  ingredients.sauce + '\n';
    content += 'Cheese: ' +  ingredients.cheese + '\n';
    content += 'Toppings: ' +  ingredients.toppings + '\n';
    return content;
  }
}

module.exports = Pizza;
