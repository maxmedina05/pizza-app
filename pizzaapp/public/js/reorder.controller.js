(function() {
    'use strict';
    var email = localStorage.getItem('email');
    if (!email) {
        window.location.assign('/login');
    }

    document.addEventListener("DOMContentLoaded", function(event) {
        // TODO: Remove this
        var self = this;
        console.log("Re-Order Controller loaded!");
        var table = document.getElementById('reorder-table');
        var orders = [];

        Ajax.get('/api/orders', {
            email: email
        }, function(orders) {
            if (!orders.error) {
                self.orders = orders;
                for (var idx in orders) {
                    addOrderToTable(table, orders[idx]);
                }
            }
        });

        function addOrderToTable(container, order) {
            var row = document.createElement('tr');
            var title = '<td>' + order.pizza.title + '</td>';
            var price = '<td>' + order.price + '</td>';
            var status = '<td>' + order.status + '</td>';
            var btnOrder = document.createElement('button');
            var btnCancel = document.createElement('button');
            var td = document.createElement('td');

            btnOrder.innerHTML = 'Order again';
            btnCancel.innerHTML = 'Cancel';
            btnOrder.className = 'btn btn-warning';
            btnCancel.className = 'btn btn-danger';
            btnCancel.onclick = onOrderNowClick;
            td.appendChild(btnOrder);
            td.appendChild(btnCancel);

            row.innerHTML += title + price + status;
            row.appendChild(td);
            container.appendChild(row);

            function onOrderNowClick() {
                var postOrder = {
                    size: order.pizza.size,
                    crust: order.pizza.ingredients.crust,
                    sauce: order.pizza.ingredients.sauce,
                    cheese: order.pizza.ingredients.cheese,
                    toppings: order.pizza.ingredients.toppings,
                    price: order.price,
                };

                // console.log(postOrder);
                Ajax.post('/api/orders', postOrder, function(res) {
                    if (res.success) {
                        window.location.assign('/ordercreated');
                    } else {
                        window.location.assign('/login');
                    }
                });
            }
        }
    });
})();
