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
<<<<<<< HEAD
  * cancellable: boolean
  * created: date
  * status: Delivered | Cancelled | Active

# Offer - offers
=======
  * cancelable: boolean
  * created: date
  * status: Delivered | Cancelled | Active

# Offer & Deals - offers
>>>>>>> dev
  * pizza: Pizza
  * description: string
  * price: float
  * imageUrl: String
<<<<<<< HEAD

# Deal - deals
  * offer: offer
  * discount: random number between 10%~25%
=======
  * discount: string - random number between 10%~25%
>>>>>>> dev
