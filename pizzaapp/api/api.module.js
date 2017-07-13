var bodyParser = require('body-parser');
const router = require(__dirname + '/api.router');

module.exports = function APIModule(app) {
  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({
      extended: true
  })); // for parsing application/x-www-form-urlencoded
  app.use('/api', router);
};
