const DBHelper = require('../lib/db-helper')();
const Pizza = require('../models/pizza.model');
const Calc = require('./price-calculator');

module.exports = function DealsController() {

    function getDeals(req, res) {
      var discount = Calc.computeDiscount();
      var deals = [];

      DBHelper.getPizzas({}, function(err, data) {

        if(err) {
          res.json({
              message: 'Ups, Something happened!',
              error: err
          });
        }
        else {
          for(var idx in data) {
            var pizza = data[idx];

            var deal = {};

            deal.pizza = pizza;
            deal.discount = Calc.computeDiscount();
            deal.price = Calc.computePrice(pizza) * (1 - Calc.computeDiscount());

            deal.imageUrl = "http://lorempizza.com/242/200";
            deals.push(deal);
          }

          res.json(deals);
        }
      });
    }

    return {
      getDeals: getDeals
    };
};
