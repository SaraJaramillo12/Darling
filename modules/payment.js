export async function proceedPayment() {
  document
    .getElementById("proceed-payment")
    .addEventListener("click", function () {
      document.querySelector(".form-section").style.display = "block";
    });

    document.addEventListener("DOMContentLoaded", function () {
      let paymentButton = document.getElementById("paymentButton");
    
      paymentButton.addEventListener("click", function (event) {
        event.preventDefault();
    
        if (isValidForm()) {
          window.location.href = "../pages/payment-success.html";
        } else {
          alert("Por favor completa todos los campos antes de proceder.");
        }
      });
    
      function isValidForm() {
        return window.validatePaymentForm();
      }
    });
}
