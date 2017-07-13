const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

function execute(statement, params, callback) {
    MongoClient.connect(process.env.DB_CONN_STR, function(err, db) {
        // assert.equal(null, err);
        if (err) {
            console.log("Ups, Something happened!");
            callback(err, []);
        } else {
            statement(params, db, callback);
            db.close();
            console.log("connection closed!");
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
    db.collection('users').findOne({
            username: user.username
        },
        function(err, data) {
            callback(err, data);
        }
    );
}

module.exports = function DBHelper() {

    return {
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
        getUser: function(user, callback) {
            execute(getUser, user, callback);
        }
    };
};
