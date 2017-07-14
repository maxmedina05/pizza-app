require('dotenv').config();
const express = require('express');
const path = require("path");
const helpers = require(__dirname + '/lib/helpers');
const exphbs = require('express-handlebars');
const PORT = process.env.PORT;

// Custom Components
const APIModule = require(__dirname + '/api/api.module');
const makePizza = require(__dirname + '/components/make-pizza/make-pizza.router.js');
const orderConfirmation = require(__dirname + '/components/order-confirmation/order-confirmation.component');

const app = express();

app.use('/static', express.static(__dirname + '/public'));
app.use('/vendors', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    helpers: helpers
  }
));
app.set('view engine', '.hbs');

APIModule(app);

app.get('/', function (req, res) {
    res.render('home');
});
app.use('/makepizza', makePizza);

app.use('/orderconfirmation', orderConfirmation);

app.listen(PORT, function () {
  console.log('Example app listening on port ', PORT);
});
