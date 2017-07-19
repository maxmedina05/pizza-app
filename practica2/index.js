require('dotenv').config();
const express = require('express');
const path = require("path");
const helpers = require(__dirname + '/lib/helpers');
const exphbs = require('express-handlebars');
const DBHelper = require(__dirname + '/lib/DBHelper');

const PORT = process.env.PORT;
const app = express();
const dbHelper = new DBHelper(process.env.DB_CONN_STR);

app.use('/static', express.static(__dirname + '/public'));

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    helpers: helpers
  }
));

app.set('view engine', '.hbs');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/api/ingredients', function(req, res) {
  dbHelper.getIngredients(function(err, items){
    if(err) throw err;
    res.json(items)
  });
});

app.listen(PORT, function () {
  console.log('Example app listening on port ', PORT);
});
