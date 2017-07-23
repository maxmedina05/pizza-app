'use strict';

var app = {
  loginModule: {}
};

(function() {
    document.addEventListener("DOMContentLoaded", function(event) {

        var loginLink = document.getElementById('login-link');
        var signupLink = document.getElementById('signup-link');
        var helloMsgDropdown = document.getElementById('hello-message-dropdown');
        var helloMessage = document.getElementById('hello-message');
        var btnLogout = document.getElementById('btn-logout');
        var reOrderLink = document.getElementById('re-order-link');
        var messageContainer = document.getElementById('message-container');

        btnLogout.onclick = logout;

        app.loginModule.isUserLogged = isUserLogged;
        app.showErrorMessage = showErrorMessage;

        if (isUserLogged()) {
            loginLink.className = "hide";
            signupLink.className = "hide";
            helloMsgDropdown.classList.remove("hide");

            var name = localStorage.getItem('name').split(' ');

            helloMessage.innerHTML = (name.length > 1) ? 'Hello, ' + name[0] : 'Hello, ' + name;
            helloMessage.innerHTML += '<span class="caret"></span>';
        } else {
            loginLink.classList.remove("hide");
            signupLink.classList.remove("hide");
            helloMsgDropdown.className = "hide";
            reOrderLink.setAttribute('href', 'login');
        }

        function logout(evt) {
            evt.preventDefault();
            localStorage.removeItem('authorization');
            localStorage.removeItem('email');
            localStorage.removeItem('userId');
            localStorage.removeItem('name');

            loginLink.classList.remove("hide");
            helloMsgDropdown.className = "hide";
            location.assign('');
        }

        function isUserLogged() {
            var user = localStorage.getItem('authorization');
            return user;
        }

        function showErrorMessage(errorMessage) {
          var alertMsg = document.createElement('div');
          var btn = document.createElement('button');
          var span = document.createElement('span');

          alertMsg.className = 'alert alert-danger alert-dismissible"';
          alertMsg.setAttribute('role', 'alert');

          btn.className = 'close';
          btn.setAttribute('data-dismiss', 'alert');
          btn.setAttribute('aria-label', 'Close');
          btn.innerHTML = '<span aria-hidden="true">&times;</span>';

          span.innerHTML = '<strong>Warning!</strong> ' + errorMessage;

          alertMsg.appendChild(btn);
          alertMsg.appendChild(span);
          messageContainer.appendChild(alertMsg);
        }
    });
})();
