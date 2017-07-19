require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const INTERVAL_DELAY = 1000;
const TIME_BEFORE_CANCEL = 120;
var timeBeforeDelivered = 0;

function doWork(err, orders) {
  if(err) {
    return false;
  } else {
    for(var idx in orders) {
      var order = orders[idx];
      var deltaTime = getCurrentTimeSeconds() -  toSeconds(new Date(order.created));
      console.log(deltaTime);
      if(deltaTime > TIME_BEFORE_CANCEL) {

        console.log("can't cancel anymore");
      }
    }
  }
}

function getCurrentTimeSeconds() {
  var time = new Date().getTime() / 1000;
  return time;
}

function toSeconds(date) {
  return date.getTime() / 1000;
}

function PizzaService(){
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
}

setInterval(PizzaService, INTERVAL_DELAY);
