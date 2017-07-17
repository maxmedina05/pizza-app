
const DBHelper = require('../lib/db-helper')();

module.exports = function LoginController() {

    function login(req, res) {
        // res.append('WWW-Authenticate', 'Basic realm="User Visible Realm"');
        res.render('login');
    }

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
        authenticate: authenticate
    }
};
