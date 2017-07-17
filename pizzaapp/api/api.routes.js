const express = require('express');
const router = express.Router();
const APIController = require('./api.controller')();

router.route('/crusts').get(APIController.getCrusts);
router.route('/toppings').get(APIController.getToppings);
router.route('/sauces').get(APIController.getSauces);
router.route('/cheeses').get(APIController.getCheeses);

router.route('/authenticate').post(APIController.authenticate);
router.route('/orders')
    .get(APIController.getOrders)
    .post(APIController.addOrder);

router.route('/offers').get(APIController.getOffers);
module.exports = router;
