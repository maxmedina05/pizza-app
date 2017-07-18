require('dotenv').config();
const INTERVAL_DELAY = 1000;
const TIME_BEFORE_CANCEL = 2000;
var timeBeforeDelivered = 3000;

var cnt = 1;
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect(process.env.DB_CONN_STR, function(err, db) {
    // assert.equal(null, err);
    if (err) {
        console.log("Ups, Something happened!");
        callback(err, []);

    }
    // No Errors
    else {
        db.collection('orders').find({status: 'active'}).toArray(doWork);
        db.close();
    }
});

function doWork(err, orders) {
  if(err) {
    return false;
  } else {
    for(var idx in orders) {
      var order = orders[idx];
      console.log(order);
    }
  }
}
