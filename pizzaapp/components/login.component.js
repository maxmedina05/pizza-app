
const DBHelper = require('../lib/db-helper')();

module.exports = function LoginController() {

    function login(req, res) {
        res.render('login');
    }

    function signup(req, res) {
      res.render('signup');
    }

    return {
        login: login,
        signup: signup
    }
};
