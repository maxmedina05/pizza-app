const express = require('express')
const helpers = require('./lib/helpers');
const exphbs = require('express-handlebars');

const app = express()

app.use('/static', express.static('public'));

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: 'views/layouts/',
    partialsDir: 'views/partials/',
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


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
