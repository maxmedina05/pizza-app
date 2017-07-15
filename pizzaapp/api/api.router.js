const express = require('express');
const router = express.Router();
const APIController = require('./api.controller')();

router.route('/crusts').get(APIController.getCrusts);
router.route('/toppings').get(APIController.getToppings);
router.route('/sauces').get(APIController.getSauces);
router.route('/cheeses').get(APIController.getCheeses);
router.route('/authenticate').post(APIController.authenticate);

module.exports = router;
