const express = require('express');
const router = express.Router();

router.route('/')
  .get(function(req, res) {
    res.render('make-pizza');
  });

module.exports = router;
