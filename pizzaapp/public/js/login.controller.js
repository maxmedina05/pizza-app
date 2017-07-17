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
        }

        Ajax.post('/api/authenticate', user, function(response){
          if(response.success == "success") {
            Ajax.setAuthorization(response.authorization);
            localStorage.setItem('email', user.email);
            window.location.assign('/');
          }

        });
      }
    }
    LoginController();
  });
})();
