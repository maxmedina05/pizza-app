var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mySchema = new Schema({
  name: String,
});

var Ingredient = mongoose.model('ingredient', mySchema);

module.exports = Ingredient;
