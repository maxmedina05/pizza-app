# User Schema - users
  * name: string
  * email: string
  * password: string

# Ingredients Schema - ingredients
  * crust: string  
  * toppings: [string]
  * sauce: string
  * crust: string

# Pizza Schema - pizzas
  * title: string = Size + cheese + ' and ' + topping[0] + 'Pizza with ' crust + 'crust'
  * ingredients: Ingredients

# Order Schema - orders
  * pizza: pizza
  * email: string
  * totalPrice: float
  * cancelable: boolean
  * created: date
  * status: Delivered | Cancelled | Active

# Offer & Deals - offers
  * pizza: Pizza
  * description: string
  * price: float
  * imageUrl: String
  * discount: string - random number between 10%~25%
