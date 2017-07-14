# Ingredients Schema - ingredients
  * crust: [...string]  
  * topping: [...string]
  * sauce: [...string]
  * crust: [...string]

# User Schema - users
  * email: string
  * username: string
  * password: string

# Pizza Schema - pizzas
  * crust
  * topping
  * sauce
  * crust
  * price

# Order Schema - orders
  * status: Delivered | Cancelled | Active
  * pizza: pizza[]
  * totalPrice: float
