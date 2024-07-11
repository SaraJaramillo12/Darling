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

export async function handleBuyNowClick() {
  document.addEventListener("DOMContentLoaded", function () {
    const buyNowButtons = document.querySelectorAll(".buy-now");

    buyNowButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const url = "../pages/add-payment.html";
        window.location.href = url;
      });
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

export async function handleShoppingCart() {
  const orderSummary = document.querySelector(".order-summary");
  let cart = await loadCartFromLocalStorage();
  let totalPrice = calculateTotalPrice(cart);

  // Función para calcular el precio total de un producto
  function calculateProductTotal(price, quantity) {
    return parseFloat(price.replace("$", "")) * quantity;
  }

  // Función para calcular el precio total del carrito
  function calculateTotalPrice(cart) {
    return cart.reduce((total, product) => {
      return total + calculateProductTotal(product.price, product.quantity);
    }, 0);
  }

  // Función para cargar el carrito desde el almacenamiento local
  async function loadCartFromLocalStorage() {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }

  // Función para actualizar el subtotal, descuento y total
  function updateSummary() {
    let subtotal = totalPrice.toFixed(2);
    let discount = 0;
    let voucherValue = parseFloat(document.getElementById("voucher").value);

    if (!isNaN(voucherValue) && voucherValue === 15) {
      discount = totalPrice * 0.15;
    }

    let total = totalPrice - discount;

    document.querySelector(".subtotal").innerText = `$ ${subtotal}`;
    document.querySelector(".discount").innerText = `$ ${discount.toFixed(2)}`;
    document.getElementById("total-price").innerText = `$ ${total.toFixed(2)}`;
  }

  // Función para manejar el evento de eliminar un producto del carrito
  function handleDeleteProduct(product) {
    const confirmDelete = confirm(
      `¿Estás seguro de que deseas eliminar "${product.name}" del carrito?`
    );

    if (confirmDelete) {
      cart = cart.filter((p) => p.code !== product.code);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartUI();
    }
  }

  // Función para actualizar la interfaz gráfica del carrito
  function updateCartUI() {
    orderSummary.innerHTML = ""; // Limpiar el contenido actual del resumen del pedido

    cart.forEach((product) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("item");

      const figure = document.createElement("figure");
      const img = document.createElement("img");
      img.src = product.image;
      img.alt = product.name;
      figure.appendChild(img);

      const detailsDiv = document.createElement("div");
      detailsDiv.classList.add("details");

      const nameP = document.createElement("p");
      nameP.innerText = product.name;

      const codeP = document.createElement("p");
      codeP.classList.add("code");
      codeP.innerText = product.code;

      const quantityP = document.createElement("p");
      quantityP.classList.add("quantity");
      quantityP.innerText = `x ${product.quantity}`;

      detailsDiv.appendChild(nameP);
      detailsDiv.appendChild(codeP);
      detailsDiv.appendChild(quantityP);

      const priceP = document.createElement("p");
      priceP.classList.add("price");
      priceP.innerText = product.price;

      const trashIcon = document.createElement("i");
      trashIcon.classList.add("bx", "bx-trash");
      trashIcon.addEventListener("click", function () {
        handleDeleteProduct(product);
      });

      itemDiv.appendChild(figure);
      itemDiv.appendChild(detailsDiv);
      itemDiv.appendChild(priceP);
      itemDiv.appendChild(trashIcon);

      orderSummary.appendChild(itemDiv);
    });

    // Actualizar el resumen después de actualizar la interfaz gráfica
    totalPrice = calculateTotalPrice(cart);
    updateSummary();
  }

  // Manejar el evento de aplicar el descuento cuando se hace click en el botón Apply
  document
    .getElementById("applyDiscount")
    .addEventListener("click", function () {
      updateSummary();
    });

  // Mostrar el resumen inicial al cargar la página
  updateCartUI();
}
