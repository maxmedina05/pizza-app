(function() {
  'use strict';

  document.addEventListener("DOMContentLoaded", function(event) {

    var loginLink           = document.getElementById('login-link');
    var signupLink           = document.getElementById('signup-link');
    var helloMsgDropdown    = document.getElementById('hello-message-dropdown');
    var helloMessage        = document.getElementById('hello-message');
    var btnLogout           = document.getElementById('btn-logout');
    var reOrderLink         = document.getElementById('re-order-link');

    btnLogout.onclick = logout;

    if(isUserLogged()) {
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
      reOrderLink.setAttribute('href', '/login');
    }

    function logout(evt){
      evt.preventDefault();
      localStorage.removeItem('authorization');
      localStorage.removeItem('email');
      localStorage.removeItem('userId');
      localStorage.removeItem('name');

      loginLink.classList.remove("hide");
      helloMsgDropdown.className = "hide";
      location.assign('/');
    }

    function isUserLogged(){
      var user = localStorage.getItem('authorization');
      return user;
    }
  });
})();
