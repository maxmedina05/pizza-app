db.ingredients.insert([
  {
      "name": "Thin",
      "type": "crust"
  },
  {
      "name": "Flatbread",
      "type": "crust"
  },
  {
      "name": "Thick",
      "type": "crust"
  },
  {
      "name": "Focaccia",
      "type": "crust"
  },
  {
      "name": "Pesto",
      "type": "sauce"
  },
  {
      "name": "Bechamel",
      "type": "sauce"
  },
  {
      "name": "Salsa",
      "type": "sauce"
  },
  {
      "name": "BBQ Sauce",
      "type": "sauce"
  },
  {
      "name": "Hummus",
      "type": "sauce"
  },
  {
      "name": "Pumpking Pizza Sauce",
      "type": "sauce"
  },
  {
      "name": "Pumpkin and Beet \"Mariana\"",
      "type": "sauce"
  },
  {
      "name": "Tapenade",
      "type": "sauce"
  },
  {
      "name": "Carrot-Harissa Sauce",
      "type": "sauce"
  },
  {
      "name": "Ranch sauce",
      "type": "sauce"
  },
  {
      "name": "Garlic and Oil",
      "type": "sauce"
  },
  {
      "name": "Ricotta Cheese",
      "type": "sauce"
  },
  {
      "name": "Mozzarella",
      "type": "cheese"
  },
  {
      "name": "Pizza cheese",
      "type": "cheese"
  },
  {
      "name": "Provolone",
      "type": "cheese"
  },
  {
      "name": "Ricotta",
      "type": "cheese"
  },
  {
      "name": "Fontina",
      "type": "cheese"
  },
  {
      "name": "Buffalo mozzarella",
      "type": "cheese"
  },
  {
      "name": "Pepperoni",
      "type": "topping"
  },
  {
      "name": "Mushrooms",
      "type": "topping"
  },
  {
      "name": "Onions",
      "type": "topping"
  },
  {
      "name": "Sausage",
      "type": "topping"
  },
  {
      "name": "Bacon",
      "type": "topping"
  },
  {
      "name": "Extra cheese",
      "type": "topping"
  },
  {
      "name": "Black Olives",
      "type": "topping"
  },
  {
      "name": "Green peppers",
      "type": "topping"
  },
  {
      "name": "Pineapple",
      "type": "topping"
  },
  {
      "name": "Spinach",
      "type": "topping"
  }
])

db.users.insert({
  email: "admin@example.com",
  name: 'Admin',
  password: 'admin',
  });

  db.users.insert({
    email: "test@example.com",
    name: 'Test',
    password: 'test',
    });

db.pizzas.insert([
  {title: 'Large mozzarella, pepperoni and pineapple pizza with thin crust', size: 'Large', ingredients: {crust: 'Thin', sauce:'Bechamel', cheese: 'Mozzarella', toppings: ['Pepperoni', 'Pineapple']}},
  {title: 'Large ricotta, pepperoni and mushrooms pizza with flatbread crust', size: 'Large', ingredients: {crust: 'Flatbread', sauce:'Pesto', cheese: 'Ricotta', toppings: ['Pepperoni', 'Mushrooms']}},
  {title: 'Large buffao mozzarella, pepperoni and bacon pizza with thin crust', size: 'Large', ingredients: {crust: 'Thin', sauce:'Bechamel', cheese: 'Buffalo mozzarella', toppings: ['Pepperoni', 'Bacon']}}
])

db.offers.insert([
  {
        pizza: {
            title: "Large Mozzarella, Pepperoni,Pineapple pizza with Flatbread crust",
            description: "This is a Large pizza with Thin crust cover with a delicious Bechamel plus Mozzarella cheese and Pepperoni,Pineapple as toppings.",
            size: 'Large',
            ingredients: {
                crust: 'Flatbread',
                sauce: 'Bechamel',
                cheese: 'Mozzarella',
                toppings: ['Pepperoni', 'Pineapple']
            }
        },
        price: 10,
        imageUrl: 'http://lorempizza.com/242/200'
    },
    {
        pizza: {
            title: "Large Mozzarella, Pepperoni,Banco pizza with Thin crust",
            description: "This is a Large pizza with Thin crust cover with a delicious Bechamel plus Mozzarella cheese and Pepperoni,Bacon as toppings.",
            size: 'Large',
            ingredients: {
                crust: 'Thin',
                sauce: 'Bechamel',
                cheese: 'Mozzarella',
                toppings: ['Pepperoni', 'Bacon']
            }
        },
        price: 10,
        imageUrl: 'http://lorempizza.com/242/200'
    },
    {
        pizza: {
            title: "Large Queso, Pepperoni, pizza with Thin crust",
            description: "This is a Large pizza with Thin crust cover with a delicious Bechamel plus Queso cheese and Pepperoni as toppings.",
            size: 'Large',
            ingredients: {
                crust: 'Thin',
                sauce: 'Bechamel',
                cheese: 'Queso',
                toppings: ['Pepperoni']
            }
        },
        price: 10,
        imageUrl: 'http://lorempizza.com/242/200'
    }
])
