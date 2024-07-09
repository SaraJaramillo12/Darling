//Activar y desactivar el menu
document.getElementById("menuButton").addEventListener("click", function () {
  let navbar = document.getElementById("navbar");
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
  } else {
    navbar.classList.add("active");
  }
});

document
  .getElementById("proceed-payment")
  .addEventListener("click", function () {
    document.querySelector(".form-section").style.display = "block";
  });

document.addEventListener("DOMContentLoaded", function () {
  let paymentButton = document.getElementById("paymentButton");

  paymentButton.addEventListener("click", function () {
    window.location.href = "../pages/payment-success.html";
  });
});
