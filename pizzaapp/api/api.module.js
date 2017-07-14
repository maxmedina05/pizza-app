const router = require(__dirname + '/api.router');

module.exports = function APIModule(app) {

  app.use('/api', router);
};
