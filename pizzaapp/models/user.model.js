var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mySchema = new Schema({
  username: String,
  password: String
});

var user = mongoose.model('user', mySchema);

module.exports = user;
