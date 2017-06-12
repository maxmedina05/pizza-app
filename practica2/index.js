const express = require('express');
const helpers = require(__dirname + '/lib/helpers');
const exphbs = require('express-handlebars');

const PORT = 5099;

const app = express();

app.use('/max/static', express.static(__dirname + '/public'));

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    helpers: helpers
  }
));
app.set('view engine', '.hbs');

app.use(function(req, res, next) {
    let obj = {};
    obj.path = req.path
    obj.method = req.method
    obj.headers = req.headers
    obj.body = req.body
    obj.files = req.files
    obj.text = req.text
    obj.params = req.params
    obj.query = req.query
    console.log(obj);
    next();
});

app.get('/max', function (req, res) {
    res.render('home');
});

app.get('/max/about', function (req, res) {
    res.render('about');
});

app.listen(PORT, function () {
  console.log('Example app listening on port ', PORT);
});
