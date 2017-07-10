require('dotenv').config();
const express = require('express');
const path = require("path");
const helpers = require(__dirname + '/lib/helpers');
const exphbs = require('express-handlebars');
const DBHelper = require(__dirname + '/lib/db-helper');

const PORT = process.env.PORT;
const app = express();
const dbHelper = new DBHelper(process.env.DB_CONN_STR);

app.use('/static', express.static(__dirname + '/public'));
app.use('/scripts', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    helpers: helpers
  }
));

app.set('view engine', '.hbs');

// app.use(function(req, res, next) {
//     let obj = {};
//     obj.path = req.path
//     obj.method = req.method
//     obj.headers = req.headers
//     obj.body = req.body
//     obj.files = req.files
//     obj.text = req.text
//     obj.params = req.params
//     obj.query = req.query
//     // console.log(obj);
//     next();
// });

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/jsplay', function (req, res) {
    res.render('jsplay');
});

app.get('/ingredients', function(req, res) {
  const ingredients = [
    {name: 'Sugar'},
    {name: 'Soybean'},
    {name: 'Egg'},
    {name: 'Wheat'},
    {name: 'Butter'},
    {name: 'Rice'},
    {name: 'Honey'},
    {name: 'Flour'},
  ];

  res.json(ingredients);
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
