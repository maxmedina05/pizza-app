const DBHelper = require('../lib/db-helper')();
const Pizza = require('../models/pizza.model');
const bcrypt = require('bcrypt');
const UserController = require('./user.api.controller')();
const Calc = require('./price-calculator');

module.exports = function APIController() {

    function _handleDbHelperResponse(res, err, data) {
        if (err) {
            res.json({
                message: 'Ups, Something happened!',
                error: err
            });
        } else {
            res.json(data);
        }
    }

    function getIngredients(req, res) {
        var ingredients = {
            crusts: [],
            sauces: [],
            cheeses: [],
            toppings: []
        };

        DBHelper.getIngredients(function(err, data) {
            for (var idx in data) {
                var item = data[idx];
                switch (item.type) {
                    case 'crust':
                        ingredients.crusts.push(item);
                        break;
                    case 'sauce':
                        ingredients.sauces.push(item);
                        break;
                    case 'cheese':
                        ingredients.cheeses.push(item);
                        break;
                    case 'topping':
                        ingredients.toppings.push(item);
                        break;
                }
            }

            _handleDbHelperResponse(res, err, ingredients);
        });
    }

    function getCrusts(req, res) {
        DBHelper.getCrusts(function(err, data) {
            _handleDbHelperResponse(res, err, data);
        });
    }

    function getToppings(req, res) {
        DBHelper.getToppings(function(err, data) {
            _handleDbHelperResponse(res, err, data);
        });
    }

    function getSauces(req, res) {
        DBHelper.getSauces(function(err, data) {
            _handleDbHelperResponse(res, err, data);
        });
    }

    function getCheeses(req, res) {
        DBHelper.getCheeses(function(err, data) {
            _handleDbHelperResponse(res, err, data);
        });
    }

    function addOrder(req, res, next) {
        var auth = req.get('Authorization');
        if (UserController.isUserAuthenticated(auth)) {
            var order = {};
            var ingredients = {
                crust: req.body.crust,
                toppings: req.body.toppings.split(','),
                sauce: req.body.sauce,
                cheese: req.body.cheese
            };
            order.pizza = new Pizza(req.body.size, ingredients);
            DBHelper.addPizza(order.pizza, function(err, result) {
                if (err) {
                    res.json({
                        message: 'Ups, Something happened!',
                        error: err
                    });
                    next();
                }

                if(req.body.hasDiscount) {
                  order.price = parseFloat(req.body.price);
                } else {

                  order.price = Calc.computePrice(order.pizza);
                }

                order.userId = req.body.userId;
                order.status = 'active';
                order.cancelable = true;
                order.created = new Date();

                DBHelper.addOrder(order, function(err, result) {
                    if (result.insertedCount === 1) {
                        var data = {
                            success: 'success',
                            message: 'order was successfully added!'
                        };
                        _handleDbHelperResponse(res, err, data);
                    }
                });
            });
        } else {
            res.json({
                failed: 'failed',
                errorMessage: 'User was not authenticated'
            });
        }
    }

    //TODO: Prevent users from deleting orders from orders
    function cancelOrder(req, res) {
        var orderId = req.params.id;
        DBHelper.cancelOrder(orderId, function(err, data) {
            _handleDbHelperResponse(res, err, data);
        });
    }

    function getOrders(req, res) {
        // var auth = req.get('Authorization');
        DBHelper.getOrders({}, function(err, data) {
            _handleDbHelperResponse(res, err, data);
        });
    }

    function getOffers(req, res) {
        DBHelper.getOffers(function(err, data) {
            _handleDbHelperResponse(res, err, data);
        });
    }

    function getPizzas(req, res) {
        DBHelper.getPizzas({}, function(err, data) {
            _handleDbHelperResponse(res, err, data);
        });
    }

    function getOrdersByUser(req, res) {
        var query = {
            userId: req.params.userId
        }

        DBHelper.getOrders(query, function(err, data) {
            _handleDbHelperResponse(res, err, data);
        });
    }

    return {
        getCrusts: getCrusts,
        getToppings: getToppings,
        getSauces: getSauces,
        getCheeses: getCheeses,
        getIngredients: getIngredients,

        getPizzas: getPizzas,

        addOrder: addOrder,
        getOrders: getOrders,
        getOffers: getOffers,
        cancelOrder: cancelOrder,
        getOrdersByUser: getOrdersByUser
    };
};
