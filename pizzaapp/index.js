require('dotenv').config();
const express = require('express');
const path = require("path");
const helpers = require(__dirname + '/lib/helpers');
const exphbs = require('express-handlebars');
const DBHelper = require(__dirname + '/lib/db-helper');
const makePizza = require(__dirname + '/components/make-pizza/make-pizza.router.js');

const APIModule = require(__dirname + '/api/api.module');

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

new APIModule(app);

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/api/ingredients', function(req, res) {
  dbHelper.getIngredients(function(err, items){
    if(err) throw err;
    res.json(items)
  });
});

app.use('/makepizza', makePizza);

app.listen(PORT, function () {
  console.log('Example app listening on port ', PORT);
});
