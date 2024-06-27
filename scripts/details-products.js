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
