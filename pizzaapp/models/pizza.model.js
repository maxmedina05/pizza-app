const util = require('util');

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

    var content = util.format('This is a %s pizza with %s crust cover with a delicious %s plus %s cheese and %s as toppings.',
     size, ingredients.crust, ingredients.sauce, ingredients.cheese, ingredients.toppings);

    return content;
  }

  // function buildDescription(size, ingredients) {
  //
  //   var content = 'This is a '+ size + ' pizza with '+ ingredients.crust +' crust cover with a delicious '+ ingredients.sauce
  //   +' plus ' + ingredients.cheese +  ' cheese and '+ ingredients.toppings +' as toppings.';
  //   return content;
  // }
}

module.exports = Pizza;
