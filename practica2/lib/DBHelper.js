const mongoose = require('mongoose');
const Ingredient = require('../models/ingredient.model');

module.exports = function DBHelper(conn_str) {
  mongoose.connect(conn_str);

  return {
    getIngredients: function(callback) {
      Ingredient.find({}, callback);
    }
  };
};
