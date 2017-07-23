(function() {
  'use strict';

  document.addEventListener("DOMContentLoaded", function(event) {

    var loginForm = document.getElementById('login-form');
    var errorMessageContainer = document.getElementById('error-message-container');
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    loginForm.onsubmit = onLogin;

    function onLogin(evt) {
      evt.preventDefault();
      var user = {
        email: email.value,
        password: password.value
      };

      Ajax.postOld('api/authenticate', user, function(response) {
        if (response.success == "success") {
          var user = response.user;

          localStorage.setItem('userId', user._id);
          localStorage.setItem('name', user.name);
          localStorage.setItem('email', user.email);
          localStorage.setItem('authorization', user.authorization);

          window.location.assign('');
        } else {
          app.showErrorMessage(response.errorMessage);
          return false;
        }
      });
    }
  });
})();
