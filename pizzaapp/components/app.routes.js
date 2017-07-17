const express = require('express');
const router = express.Router();
const DBHelper = require('../lib/db-helper')();
const LoginComponent = require('./login.component')();

router.route('/pizza').get(function(req, res) {
  res.render('pizza');
});

router.route('/makepizza').get(function(req, res) {
  res.render('make-pizza');
});

router.route('/deals').get(function(req, res) {
  res.render('deals');
});

router.route('/reorder').get(function(req, res) {
  res.render('reorder');
});

router.route('/orderconfirmation').post(function(req, res) {
  var order = {};
  order.size = req.body.size;
  order.crust = req.body.crust;
  order.topping = req.body.topping;
  order.sauce = req.body.sauce;
  order.cheese = req.body.cheese;

  res.render('order-confirmation', {
    order: order
  });
})

router.route('/ordercreated').get(function(req, res) {

  res.render('order-created', [
    'order was created successfully'
  ]);
});

router.route('/login').get(LoginComponent.login);
router.route('/authenticate').post(LoginComponent.authenticate);

module.exports = router;
