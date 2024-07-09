const API_URL = "http://localhost:3000/productos";

export async function setupCart() {
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
}

export async function toggleHeartIcons() {
  let heartIcons = document.querySelectorAll(".heart-icon");
  heartIcons.forEach(function (heartIcon) {
    heartIcon.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
}

export async function selectProductSize() {
  const sizeOptions = document.querySelectorAll(".size-options .size");
  sizeOptions.forEach(function (sizeOption) {
    sizeOption.addEventListener("click", function () {
      sizeOptions.forEach(function (option) {
        option.classList.remove("selected");
      });
      this.classList.add("selected");
    });
  });
}

export async function selectProductColor() {
  document.addEventListener("DOMContentLoaded", function () {
    const colorOptions = document.querySelectorAll(".color-options > div");

    colorOptions.forEach(function (colorOption) {
      colorOption.addEventListener("click", function () {
        colorOptions.forEach(function (option) {
          option.classList.remove("selected");
        });

        this.classList.add("selected");
      });
    });
  });
}

export async function adjustProductQuantity() {
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
}


export async function setupBreadcrumb() {
  let productId = window.location.hash.substring(1);
  let breadcrumbSpan = document.getElementById("current-product");
  breadcrumbSpan.textContent = document
    .getElementById(productId)
    .querySelector(".product-name").textContent;
}
