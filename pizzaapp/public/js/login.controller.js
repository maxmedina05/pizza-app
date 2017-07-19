(function() {
    'use strict';

    document.addEventListener("DOMContentLoaded", function(event) {

        function LoginController() {
            var loginForm = document.getElementById('login-form');
            var email = document.getElementById('email');
            var password = document.getElementById('password');

            loginForm.onsubmit = onLogin;

            function onLogin(evt) {
                evt.preventDefault();
                var user = {
                    email: email.value,
                    password: password.value
                };

                var token = user.email + ':' + user.password;
                var hash = window.btoa(token);
                // var auth = 'Basic ' + hash;
                // console.log(hash);
                Ajax.setAuthorization(hash);

                Ajax.post('/api/authenticate', {}, function(response) {
                    if (response.success == "success") {
                        localStorage.setItem('email', user.email);
                        window.location.assign('/');
                    } else {
                        Ajax.removeAuthrization();
                        return false;
                    }
                });
            }
        }
        LoginController();
    });
})();
