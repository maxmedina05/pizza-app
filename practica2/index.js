const express = require('express');
const helpers = require(__dirname + '/lib/helpers');
const exphbs = require('express-handlebars');

const PORT = 5099;

const app = express();

app.use('/static', express.static('public'));

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


app.listen(PORT, function () {
  console.log('Example app listening on port ', PORT);
});
