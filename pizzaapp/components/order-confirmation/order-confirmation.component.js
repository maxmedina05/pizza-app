const express = require('express');
const router = express.Router();

router.route('/')
  .post(function(req, res) {
    var order = {};
    order.size = req.body.size;
    order.crust = req.body.crust;
    order.topping = req.body.topping;
    order.sauce = req.body.sauce;
    order.cheese = req.body.cheese;
    console.log(order);
    res.render('order-confirmation');
  });

module.exports = router;
