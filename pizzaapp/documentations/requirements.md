# Web Programming
07/10/2017

## The site-map
Update your site's sitemap to include the following sections:
* Pizza: Should contain pre-selected pizza combinations, users should be able to select one and continue to checkout. Pizzas should be displayed in a grid, with a title, a description, an image and the ornder now button.
* Deals: Should contain auto-generated deals from user pre-made combinations. Deals should be displayed in a grid, prices should be part of the title. Prices should reflect a discount ranging from 10-25%. Deals should display a description and an order now button.
* Re-order: Re-order should ask users for their login. Once an user is logged in it should display previous orders and allow them to make the order again.
* Start a new order: Starting a new order should guide the user through a guide of creating their own pizza. Basically the user should be able to select the pizza crust, size and toppings. It should allow the user to add as many toppings as they like, but allow for the first two to be free (included in the base pizza price).

## Control
* Implement user control, by creating a collection to handle user access. You should use the desired one-way encryption hash to secure user passwords.

## Ingredients
* Do some research and populate your database with:
  * Pizza crusts
  * Pizza toppings
  * Pizza sauce
  * Pizza cheese

* Pizzas should always have a combination of crust + 2 toppings + sauce + cheese for the base price of $10. You should charge extra $2 per topping.

## Orders
* Users should be able to log-in and see their previous orders.
* Orders should have three status:
  * Delivered
  * Cancelled
  * Active
* Users should be able to receive an e-mail notifying a pizza is about to be delivered. The time frame for these notifications should be between ~3-5 minutes after an order is placed.
* Users should be allowed to cancel an order within 2 minutes of being placed.

## The looks
Feel free to use bootstrap and all of the components included to make your site look fly.

## The notifications
* E-mails should be HTML formatted and should have the same look & feel as your site.
* A micro-service should send notifications for active orders placed between the past 3 and 5 minutes. (This rule should randomize the criteria)
* Once an e-mail is sent, the order should be marked as Delivered.

## Persistence
* You should use mongodb as your data storage.

## Design rules
* You are free to take into account all of the design considerations you see fit.
* Your app should have a combination of AJAX requests and API end-points to fulfill each of the requirements stated above.

## The deployment
* Your app should be deployed on our web server.
* Microservices should be run with PM2, similar as the Web application.
