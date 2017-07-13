db.ingredients.insert([
  { name: 'Thin', type:'crust'},
  { name: 'Flatbread', type:'crust' },
  { name: 'Thick', type:'crust'},
  { name: 'Focaccia', type:'crust' }
]);

db.ingredients.insert([
  { name: 'Mozzarella', type:'cheese' },
  { name: 'Pizza cheese', type:'cheese' },
  { name: 'Provolone', type:'cheese' },
  { name: 'Ricotta', type:'cheese' },
  { name: 'Fontina', type:'cheese' },
  { name: 'Buffalo mozzarella', type:'cheese' }
]);

db.ingredients.insert([
  { name: 'Pesto', type: 'sauce' },
  { name: 'Bechamel', type: 'sauce' },
  { name: 'Salsa', type: 'sauce' },
  { name: 'BBQ Sauce', type: 'sauce' },
  { name: 'Hummus', type: 'sauce' },
  { name: 'Pumpking Pizza Sauce', type: 'sauce' },
  { name: 'Pumpkin and Beet "Mariana"', type: 'sauce' },
  { name: 'Tapenade', type: 'sauce' },
  { name: 'Carrot-Harissa Sauce', type: 'sauce' },
  { name: 'Ranch sauce', type: 'sauce' },
  { name: 'Garlic and Oil', type: 'sauce' },
  { name: 'Ricotta Cheese', type: 'sauce' }
]);

db.ingredients.insert([
  { name: 'Pepperoni', type:'topping' },
  { name: 'Mushrooms', type:'topping' },
  { name: 'Onions', type:'topping' },
  { name: 'Sausage', type:'topping' },
  { name: 'Bacon', type:'topping' },
  { name: 'Extra cheese', type:'topping' },
  { name: 'Black Olives', type:'topping' },
  { name: 'Green peppers', type:'topping' },
  { name: 'Pineapple', type:'topping' },
  { name: 'Spinach', type:'topping' }
]);

db.users.insert({
  email: "admin@example.com",
  username: 'admin',
  password: 'admin',
  role: 'admin'
  });

  db.users.insert({
    email: "test@example.com",
    username: 'test',
    password: 'test',
    role: 'guest'
    });
