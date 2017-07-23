const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const assert = require('assert');

const ORDER = "orders";
const USER = "users";
const OFFER = "offers";
const PIZZA = 'pizzas';
const MAX_LIMIT = 10;

function executeOld(statement, params, callback) {
    MongoClient.connect(process.env.DB_CONN_STR, function(err, db) {
        // assert.equal(null, err);
        if (err) {
            console.log("Ups, Something happened!");
            callback(err, []);
        } else {
            statement(params, db, callback);
            db.close();
            // console.log("connection closed!");
        }
    });
}

function execute(collection, statement, params, callback) {
    MongoClient.connect(process.env.DB_CONN_STR, function(err, db) {
        // assert.equal(null, err);
        if (err) {
            console.log("Ups, Something happened!");
            callback(err, []);
        } else {
            statement(collection, params, db, callback);
            db.close();
            // console.log("connection closed!");
        }
    });
}

function getIngredients(query, db, callback) {
    db.collection('ingredients').find(query).toArray(callback);
}

function getUser(user, db, callback) {
    if(user && user.hasOwnProperty('_id')) {
      user._id = ObjectId(user._id);
    }
    db.collection(USER).findOne(
        user,
        function(err, data) {
            callback(err, data);
        }
    );
}

function addUser(user, db, callback) {
    db.collection(USER).insertOne(user, callback);
}

function addPizza(pizza, db, callback) {
    db.collection(PIZZA).insertOne(pizza, callback);
}

function getUsers(query, db, callback) {
    db.collection(USER).find(query)
        .toArray(callback);
}

// TODO: convert date to localtime
function addOrder(order, db, callback) {
    db.collection(ORDER).insertOne(order, function(err, result) {
        callback(err, result);
    });
}

function cancelOrder(orderId, db, callback) {
  db.collection(ORDER).findOneAndUpdate({
          _id: ObjectId(orderId)
      },
      {
        $set: { status: 'Cancelled' }
      },
      function(err, data) {
          callback(err, data);
      }
  );
}

function updateOrder(order, db, callback) {

  var newOrder = {};

  if(order.hasOwnProperty('status')) {
    newOrder.status = order.status;
  }
  if(order.hasOwnProperty('pizza')) {
    newOrder.pizza = order.pizza;
  }
  if(order.hasOwnProperty('price')) {
    newOrder.price = order.price;
  }
  if(order.hasOwnProperty('cancelable')) {
    newOrder.cancelable = order.cancelable;
  }

  db.collection(ORDER).findOneAndUpdate({
          _id: ObjectId(order._id)
      },
      {
        $set: newOrder
      },
      function(err, data) {
          callback(err, data);
      }
  );
}

function getOrders(query, db, callback) {
    db.collection(ORDER).find(query).toArray(callback);
}

function getOffers(query, db, callback) {
    db.collection(OFFER).find(query).limit(MAX_LIMIT).toArray(function(err, data) {
        callback(err, data);
    });
}

function getCollection(collection, query, db, callback) {
  db.collection(collection).find(query).toArray(callback);
}

function addItemToCollection(collection, item, db, callback) {
  db.collection(collection).insertOne(item, callback);
}

module.exports = function DBHelper() {

    return {
        // Ingredients
        getCrusts: function(callback) {
            executeOld(getIngredients, {type:'crust'}, callback);
        },
        getToppings: function(callback) {
            executeOld(getIngredients, {type: 'topping'}, callback);
        },
        getSauces: function(callback) {
            executeOld(getIngredients, {type: 'sauce'}, callback);
        },
        getCheeses: function(callback) {
            executeOld(getIngredients, {type: 'cheese'}, callback);
        },
        getIngredients: function(callback) {
          executeOld(getIngredients, {}, callback);
        },

        // Order
        addOrder: function(order, callback) {
            executeOld(addOrder, order, callback);
        },
        getOrders: function(query, callback) {
            executeOld(getOrders, query, callback);
        },
        updateOrder: function(newOrder, callback) {
          executeOld(updateOrder, newOrder, callback);
        },
        // Offer
        getOffers: function(callback) {
            executeOld(getOffers, {}, callback);
        },
        cancelOrder: function(orderId, callback) {
          executeOld(cancelOrder, orderId, callback);
        },

        // Users
        getUser: function(user, callback) {
            executeOld(getUser, user, callback);
        },
        addUser: function(user, callback) {
            executeOld(addUser, user, callback);
        },
        getUsers: function(query, callback) {
            executeOld(getUsers, query, callback);
        },

        // Pizzas
        getPizzas: function(query, callback) {
          execute(PIZZA, getCollection, query, callback);
        },
        addPizza: function(pizza, callback) {
          execute(PIZZA, addItemToCollection, pizza, callback);
        }
    };
};
