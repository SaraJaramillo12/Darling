document.addEventListener("DOMContentLoaded", () => {
  const cartIcon = document.getElementById("cart-icon");
  const cartSidebar = document.getElementById("cart-sidebar");
  const closeCartButton = document.getElementById("close-cart-button");

  cartIcon.addEventListener("click", () => {
    cartSidebar.style.display = "flex";
  });

  closeCartButton.addEventListener("click", () => {
    cartSidebar.style.display = "none";
  });

  document.addEventListener("click", (event) => {
    if (
      !cartSidebar.contains(event.target) &&
      !cartIcon.contains(event.target)
    ) {
      cartSidebar.style.display = "none";
    }
  });
});

//Cambiar de color el heart-icon
document.addEventListener("DOMContentLoaded", function () {
  let heartIcons = document.querySelectorAll(".heart-icon");

  heartIcons.forEach(function (heartIcon) {
    heartIcon.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
});

//Activar y desactivar el menu
document.getElementById("menuButton").addEventListener("click", function () {
  var navbar = document.getElementById("navbar");
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
  } else {
    navbar.classList.add("active");
  }
});

//Seleccionar tamaño del producto
document.addEventListener('DOMContentLoaded', function () {
  const sizeOptions = document.querySelectorAll('.size-options .size');

  sizeOptions.forEach(function (sizeOption) {
      sizeOption.addEventListener('click', function () {
          // Remove the 'selected' class from all size options
          sizeOptions.forEach(function (option) {
              option.classList.remove('selected');
          });

          // Add the 'selected' class to the clicked size option
          this.classList.add('selected');
      });
  });
});
