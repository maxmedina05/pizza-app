(function() {
    'use strict';

    document.addEventListener("DOMContentLoaded", function(event) {
        function MakePizzaController() {
            var crusts = [];
            var sauces = [];
            var toppings = [];
            var cheeses = [];

            var pizzaCrustsSelect = document.getElementById('pizza-crust');
            var pizzaSaucesSelect = document.getElementById('pizza-sauce');
            var pizzaCheesesSelect = document.getElementById('pizza-cheese');
            var pizzaToppingsSelect = document.getElementById('pizza-topping');

            function getIngredients(type) {
                var httpRequest = new XMLHttpRequest();
                if (!httpRequest) {
                    alert('Giving up :( Cannot create an XMLHTTP instance');
                    return false;
                }
                httpRequest.onreadystatechange = function() {
                    loadIngredients(httpRequest, type);
                };

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

                httpRequest.open('GET', url);
                httpRequest.send();
            }

            function loadIngredients(request, type) {
                if (request.readyState === XMLHttpRequest.DONE) {
                    if (request.status === 200) {
                        var ingredients = JSON.parse(request.responseText);
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
                    } else {
                        console.log('There was a problem with the request.');
                    }
                }
            }

            function fillIngredients(container, ingredients) {
                for (var i = 0; i < ingredients.length; i++) {
                    var item = document.createElement('option');
                    item.innerHTML = ingredients[i]["name"];
                    container.appendChild(item);
                }
            }

            getIngredients('crust');
            getIngredients('cheese');
            getIngredients('sauce');
            getIngredients('topping');
        }
        MakePizzaController();
    });
})();
