(function() {
    'use strict';

    document.addEventListener("DOMContentLoaded", function(event) {
        // TODO: Remove this
        console.log("PizzaController Ready!");

        var pizzaGrid = document.getElementById('pizza-grid');
        Ajax.get('/api/offers', {}, function(offers) {
            if (!offers.error) {
                for (var idx in offers) {
                    buildOffer(pizzaGrid, offers[idx]);
                }
            }
        });

        function buildOffer(container, offer) {
            var card = document.createElement('div');
            card.className = "col-sm-6 col-md-4";
            var thumbnail = document.createElement('div');
            thumbnail.className = 'thumbnail';
            thumbnail.innerHTML = '<img src="' + offer.imageUrl + '">'
            thumbnail.innerHTML += '<div class="caption">'
            thumbnail.innerHTML +=  '<h3>'+ offer.pizza.title +'</h3>'
            thumbnail.innerHTML +=  '<p>'+ offer.description +'</p>'
            thumbnail.innerHTML +=  '<p><a href="#" class="btn btn-primary" role="button">Order Now</a></p>'
            thumbnail.innerHTML += '</div>'

            card.appendChild(thumbnail);
            container.appendChild(card);
        }

    });
})();
