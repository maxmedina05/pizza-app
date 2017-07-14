(function() {
  'use strict';

  document.addEventListener("DOMContentLoaded", function(event) {
    function MakePizzaController() {
      var pizzaCrustsSelect = document.getElementById('pizza-crust');
      var pizzaSaucesSelect = document.getElementById('pizza-sauce');
      var pizzaCheesesSelect = document.getElementById('pizza-cheese');
      var pizzaToppingsSelect = document.getElementById('pizza-topping');

      function getIngredients(type) {
        var url = "/api";
        switch (type) {
          case 'crust':
            url += "/crusts";
            break;
          case 'topping':
            url += "/toppings";
            break;
          case 'sauce':
            url += "/sauces";
            break;
          case 'cheese':
            url += "/cheeses";
            break;
        }

        Ajax.get(url, '', function(response) {
          var ingredients = JSON.parse(response);
          switch (type) {
            case 'crust':
              fillIngredients(pizzaCrustsSelect, ingredients);
              break;
            case 'topping':
              fillIngredients(pizzaToppingsSelect, ingredients);
              break;
            case 'sauce':
              fillIngredients(pizzaSaucesSelect, ingredients);
              break;
            case 'cheese':
              fillIngredients(pizzaCheesesSelect, ingredients);
              break;
          }
        });
      }

      function fillIngredients(container, ingredients) {
        for (var i = 0; i < ingredients.length; i++) {
          var item = document.createElement('option');
          item.innerHTML = ingredients[i]["name"];
          container.appendChild(item);
        }
      }

      function submitOrder(order) {
        
      }

      getIngredients('crust');
      getIngredients('cheese');
      getIngredients('sauce');
      getIngredients('topping');
    }
    MakePizzaController();
  });
})();
