
const DBHelper = require('../lib/db-helper')();

module.exports = function LoginController() {

    function login(req, res) {
        res.render('login');
    }

<<<<<<< HEAD
=======
    function signup(req, res) {
      res.render('signup');
    }

>>>>>>> dev
    function authenticate(req, res) {
        var user = {
            email: req.body.email,
            password: req.body.password
        };

        DBHelper.getUser(user, function(err, data) {
            if (err) {
                res.json({
                    message: 'Ups, Something happened!',
                    error: err
                });
            } else {
                if (!data) {
                    res.json({
                        success: 'failed',
                        errorMessage: 'User was not found!'
                    });
                } else if (user.password == data.password) {

                } else {
                    res.json({
                        success: 'failed'
                    })
                }
            }
        });
        // res.redirect('/');
    }

    return {
        login: login,
<<<<<<< HEAD
        authenticate: authenticate
=======
        authenticate: authenticate,
        signup: signup
>>>>>>> dev
    }
};
