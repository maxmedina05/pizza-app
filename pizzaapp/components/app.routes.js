const express = require('express');
const router = express.Router();

router.route('/makepizza').get(function(req, res) {
  res.render('make-pizza');
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
  res.render('order-created');
});

module.exports = router;
