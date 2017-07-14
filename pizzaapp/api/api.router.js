const express = require('express');
const router = express.Router();
const DBHelper = require('../lib/db-helper')();
const bodyParser = require('body-parser');

function handleDbHelperResponse(res, err, data) {
    if (err) {
        res.json({
            message: 'Ups, Something happened!',
            error: err
        });
    } else {
        res.json(data);
    }
}

router.route('/crusts')
    .get(function(req, res) {
        DBHelper.getCrusts(function(err, data) {
            handleDbHelperResponse(res, err, data);
        });
    });

router.route('/toppings')
    .get(function(req, res) {
        DBHelper.getToppings(function(err, data) {
            handleDbHelperResponse(res, err, data);
        });
    });

router.route('/sauces')
    .get(function(req, res) {
        DBHelper.getSauces(function(err, data) {
            handleDbHelperResponse(res, err, data);
        });
    });

router.route('/cheeses')
    .get(function(req, res) {
        DBHelper.getCheeses(function(err, data) {
            handleDbHelperResponse(res, err, data);
        });
    });

router.route('/authenticate').post(function(req, res) {
    var user = {
        username: req.body.username,
        password: req.body.password
    };
    DBHelper.getUser(user, function(err, data) {
        if (err) {
            res.json({
                message: 'Ups, Something happened!',
                error: err
            });
        } else {
            if(!data) {
              res.json({
                  success: 'failed',
                  errorMessage: 'User was not found!'
              });
            }
            else if (user.password === data.password) {
                res.json({
                    success: 'success'
                })
            } else {
                res.json({
                    success: 'failed'
                })
            }
        }
    });
});

// router.route('/makepizza').post(function (req, res) {
//
// });

module.exports = router;
