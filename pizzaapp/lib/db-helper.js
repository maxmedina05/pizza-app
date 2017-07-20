const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const assert = require('assert');

const ORDER = "orders";
const USER = "users";
const OFFER = "offers";

function execute(statement, params, callback) {
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

function getIngredients(type, db, callback) {
    db.collection('ingredients').find({
        type: type
    }).toArray(function(err, data) {
        callback(err, data);
    });
}

function getUser(user, db, callback) {
    db.collection(USER).findOne({
            email: user.email
        },
        function(err, data) {
            callback(err, data);
        }
    );
}

function addUser(user, db, callback) {
    db.collection(USER).insertOne(user, function(err, result) {
        callback(err, result);
    });
}

function getUsers(query, db, callback) {
    db.collection(USER).find(query)
<<<<<<< HEAD
        .toArray(function(err, data) {
            callback(err, data);
        });
=======
        .toArray(callback);
>>>>>>> dev
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
    db.collection(ORDER).find(query).toArray(function(err, data) {
        callback(err, data);
    });
}

function getOffers(query, db, callback) {
    db.collection(OFFER).find(query).toArray(function(err, data) {
        callback(err, data);
    });
}

module.exports = function DBHelper() {

    return {
        // Ingredients
        getCrusts: function(callback) {
            execute(getIngredients, 'crust', callback);
        },
        getToppings: function(callback) {
            execute(getIngredients, 'topping', callback);
        },
        getSauces: function(callback) {
            execute(getIngredients, 'sauce', callback);
        },
        getCheeses: function(callback) {
            execute(getIngredients, 'cheese', callback);
        },

        // Order
        addOrder: function(order, callback) {
            execute(addOrder, order, callback);
        },
        getOrders: function(query, callback) {
            execute(getOrders, query, callback);
        },
        updateOrder: function(newOrder, callback) {
          execute(updateOrder, newOrder, callback);
        },
        // Offer
        getOffers: function(callback) {
            execute(getOffers, {}, callback);
        },
        cancelOrder: function(orderId, callback) {
          execute(cancelOrder, orderId, callback);
        },

        // Users
        getUser: function(user, callback) {
            execute(getUser, user, callback);
        },
        addUser: function(user, callback) {
            execute(addUser, user, callback);
        },
        getUsers: function(query, callback) {
            execute(getUsers, query, callback);
        }
    };
};
