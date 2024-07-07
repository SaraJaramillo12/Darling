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
  let navbar = document.getElementById("navbar");
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

//------------------
const testimonials = [
  {
      image: "../assets/footer-opinion.webp",
      text: "The ring itself is stunning, with a beautiful design that catches the light and sparkles from every angle. The quality of the material used is evident, as the ring feels substantial and durable. The gemstone is exquisite, with a vibrant color and exceptional clarity.",
      name: "Anna Fernandez",
      location: "USA"
  },
  {
      image: "../assets/footer-opinion-2.webp",
      text: "I absolutely love this ring! It's elegant, well-made, and has become one of my favorite pieces of jewelry. The attention to detail is remarkable.",
      name: "Maria Garcia",
      location: "Spain"
  },
  {
      image: "../assets/footer-opinion-3.webp",
      text: "This ring is perfect! The craftsmanship is excellent, and it looks even better in person. I've received so many compliments on it.",
      name: "John Doe",
      location: "Canada"
  }
];

let currentIndex = 0;

function updateTestimonial(index) {
  const testimonialImage = document.getElementById('testimonial-image');
  const testimonialText = document.getElementById('testimonial-text');
  const testimonialFooter = document.getElementById('testimonial-footer');

  testimonialImage.src = testimonials[index].image;
  testimonialText.textContent = testimonials[index].text;
  testimonialFooter.innerHTML = `<strong>${testimonials[index].name}</strong><br>${testimonials[index].location}`;
}

function prevTestimonial() {
  currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
  updateTestimonial(currentIndex);
}

function nextTestimonial() {
  currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
  updateTestimonial(currentIndex);
}

// Initialize with the first testimonial
updateTestimonial(currentIndex);

// Add event listeners for navigation buttons
document.querySelector('.testimonial-nav .nav-button:nth-child(1)').addEventListener('click', prevTestimonial);
document.querySelector('.testimonial-nav .nav-button:nth-child(2)').addEventListener('click', nextTestimonial);
