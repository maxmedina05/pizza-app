(function() {
  'use strict';

  document.addEventListener("DOMContentLoaded", function(event) {

    function OrderConfirmationController() {
      var btnConfirm = document.getElementById('btn-confirm');
      var btnCancel = document.getElementById('btn-cancel');

      btnConfirm.onclick = confirmOrder;
      btnCancel.onclick = cancelOrder;

      function confirmOrder() {
        console.log('submit order');
        location.assign('/ordercreated');
      }

      function cancelOrder() {
        console.log('cancel order');
        location.assign('/');
      }
    }

    OrderConfirmationController();
  });
})();
