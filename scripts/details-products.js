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
document.addEventListener("DOMContentLoaded", function () {
  const sizeOptions = document.querySelectorAll(".size-options .size");

  sizeOptions.forEach(function (sizeOption) {
    sizeOption.addEventListener("click", function () {
      sizeOptions.forEach(function (option) {
        option.classList.remove("selected");
      });

      this.classList.add("selected");
    });
  });
});

//Aumentar y disminuir la cantidad de los productos
document.addEventListener("DOMContentLoaded", function () {
  const productDetails = document.querySelectorAll(".product-detail");

  productDetails.forEach(function (productDetail) {
    const decreaseButton = productDetail.querySelector(".quantity-decrease");
    const increaseButton = productDetail.querySelector(".quantity-increase");
    const quantityInput = productDetail.querySelector('input[type="number"]');

    decreaseButton.addEventListener("click", function () {
      let currentValue = parseInt(quantityInput.value);
      if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
      }
    });

    increaseButton.addEventListener("click", function () {
      let currentValue = parseInt(quantityInput.value);
      quantityInput.value = currentValue + 1;
    });
  });
});

//Mostra el nav de migas de pan dinamicamente
document.addEventListener("DOMContentLoaded", function () {
  // Obtener el identificador del producto desde la URL
  let productId = window.location.hash;

  productId = productId.substring(1);

  let breadcrumbSpan = document.getElementById("current-product");
  breadcrumbSpan.textContent = document
    .getElementById(productId)
    .querySelector(".product-name").textContent;

  console.log("Product ID:", productId);
});
