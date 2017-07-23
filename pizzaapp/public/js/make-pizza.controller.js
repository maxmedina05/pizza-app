(function() {
    'use strict';

    document.addEventListener("DOMContentLoaded", function(event) {
        function MakePizzaController() {
            var self = this;
            var finalPrice = 10.00;
            var TOPPING_PRICE = 2;
            var MAX_FREE_TOPPINGS = 2;

            var toppings = [];
            var pizzaCrustsSelect = document.getElementById('pizza-crust');
            var pizzaSaucesSelect = document.getElementById('pizza-sauce');
            var pizzaCheesesSelect = document.getElementById('pizza-cheese');
            var pizzaToppingsSelect = document.getElementById('pizza-topping');
            var makePizzaForm = document.getElementById('make-pizza-form');
            var toppingContainer = document.getElementById('topping-container');
            var finalPriceSpan = document.getElementById('final-price');

            makePizzaForm.onsubmit = onsubmitOrder;
            pizzaToppingsSelect.onchange = onToppingSelect;

            getIngredients();

            function getIngredients(type) {
                var url = "api/ingredients";

                Ajax.get(url, '', function(response) {
                    var ingredients = response;

                    fillIngredients(pizzaCrustsSelect, ingredients.crusts);
                    fillIngredients(pizzaToppingsSelect, ingredients.toppings);
                    addToppingTag(toppingContainer, ingredients.toppings[0]["name"]);
                    addToppingTag(toppingContainer, ingredients.toppings[1]["name"]);
                    fillIngredients(pizzaSaucesSelect, ingredients.sauces);
                    fillIngredients(pizzaCheesesSelect, ingredients.cheeses);
                });
            }

            function fillIngredients(container, ingredients) {
                for (var i = 0; i < ingredients.length; i++) {
                    addNewOption(container, ingredients[i]["name"]);
                }
            }

            function addNewOption(container, value) {
                var option = document.createElement('option');
                option.innerHTML = value;
                option.setAttribute('value', value);
                option.setAttribute('id', value);
                container.appendChild(option);

            }

            function addToppingTag(container, value) {
                document.getElementById(value).remove();
                var span = document.createElement('span');
                span.className = 'label label-info topping';
                span.innerHTML = '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span> ' + value;
                container.appendChild(span);
                toppings.push(value);

                if (toppings.length > MAX_FREE_TOPPINGS) {
                    finalPrice += TOPPING_PRICE;
                    finalPriceSpan.innerHTML = finalPrice.toFixed(2);
                }

                //on x click
                span.onclick = function() {
                    addNewOption(pizzaToppingsSelect, value);
                    toppings.splice(toppings.indexOf(value), 1);

                    if (toppings.length >= MAX_FREE_TOPPINGS) {
                        finalPrice -= TOPPING_PRICE;
                        finalPriceSpan.innerHTML = finalPrice.toFixed(2);
                    }

                    span.remove();
                };
            }

            function onsubmitOrder(evt) {
                var toppingField = document.getElementById('toppings');
                toppingField.setAttribute('value', toppings.join());

                if(!app.loginModule.isUserLogged()) {
                  evt.preventDefault();
                  location.assign('login');
                  return false;
                }

                return true;
            }

            function onToppingSelect(evt) {
                var topping = evt.target.value;
                addToppingTag(toppingContainer, topping);
                pizzaToppingsSelect.selectedIndex = 0;
            }
        }
        MakePizzaController();
    });
})();
