const HIGHEST_DISCOUNT = 25;
const LOWEST_DISCOUNT = 10;
const BASE_PRICE = 10;
const TOPPING_PRICE = 2;
const BASE_TOPPINGS_QUANTITY = 2;

function _generateRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

module.exports.computePrice = function (pizza) {
  var price = BASE_PRICE;
  if(pizza.ingredients.toppings.length > 2) {
    price += (pizza.ingredients.toppings.length - BASE_TOPPINGS_QUANTITY) * TOPPING_PRICE;
  }
  return price;
};

module.exports.computeDiscount = function () {
  let discount = _generateRandomNumber(LOWEST_DISCOUNT, HIGHEST_DISCOUNT);
  return discount / 100;
};
