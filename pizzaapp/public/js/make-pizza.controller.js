(function() {
    'use strict';

    document.addEventListener("DOMContentLoaded", function(event) {

        function MakePizzaController() {
            var pizzaCrustsSelect = document.getElementById('pizza-crust');
            var pizzaSaucesSelect = document.getElementById('pizza-sauce');
            var pizzaCheesesSelect = document.getElementById('pizza-cheese');
            var pizzaToppingsSelect = document.getElementById('pizza-topping');
            var makePizzaForm = document.getElementById('make-pizza-form');
            // makePizzaForm.onsubmit = onsubmitOrder;

            getIngredients('crust');
            getIngredients('cheese');
            getIngredients('sauce');
            getIngredients('topping');

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
                    var ingredients = response;
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

            function onsubmitOrder(evt) {
                evt.preventDefault();
                var order = {
                  size: document.getElementById('pizza-size').value,
                  crust: document.getElementById('pizza-crust').value,
                  sauce: document.getElementById('pizza-sauce').value,
                  cheese: document.getElementById('pizza-cheese').value,
                  topping: document.getElementById('pizza-topping').value
                };

                Ajax.post('/api/orders', order, function(res) {
                  if(res.success) {
                    window.location.assign('/ordercreated');
                  } else {
                    window.location.assign('/login');
                  }
                });
            }
        }
        MakePizzaController();
    });
})();
