const express = require('express');
const router = express.Router();

router.route('/crusts')
  .get(function(req, res) {
    res.json({"name": "Hello"});
  });

module.exports = router;
