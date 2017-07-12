var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mySchema = new Schema({
  name: String,
  type: String
});

var model = mongoose.model('ingredient', mySchema);

const crusts = [
  { name: 'Thin', type:'crust'},
  { name: 'Flatbread', type:'crust' },
  { name: 'Thick', type:'crust'},
  { name: 'Focaccia', type:'crust' }
];

const cheeses = [
  { name: 'Mozzarella' },
  { name: 'Pizza cheese' },
  { name: 'Provolone' },
  { name: 'Ricotta' },
  { name: 'Fontina' },
  { name: 'Buffalo mozzarella' }
];

const sauces = [
  { name: 'Pesto' },
  { name: 'Bechamel' },
  { name: 'Salsa' },
  { name: 'BBQ Sauce' },
  { name: 'Hummus' },
  { name: 'Pumpking Pizza Sauce' },
  { name: 'Pumpkin and Beet "Mariana"' },
  { name: 'Tapenade' },
  { name: 'Carrot-Harissa Sauce' },
  { name: 'Ranch sauce' },
  { name: 'Garlic and Oil' },
  { name: 'Ricotta Cheese' }
];

const toppings = [
  { name: 'Pepperoni' },
  { name: 'Mushrooms' },
  { name: 'Onions' },
  { name: 'Sausage' },
  { name: 'Bacon' },
  { name: 'Extra cheese' },
  { name: 'Black Olives' },
  { name: 'Green peppers' },
  { name: 'Pineapple' },
  { name: 'Spinach' }
];

module.exports = model;
