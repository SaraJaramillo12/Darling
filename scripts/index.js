//Activar y desactivar el menu
document.getElementById("menuButton").addEventListener("click", function () {
  var navbar = document.getElementById("navbar");
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
  } else {
    navbar.classList.add("active");
  }
});

//Cambiar las imagenes y los testimonios del footer
const testimonials = [
  {
    image: "assets/footer-opinion.webp",
    text: "The ring itself is stunning, with a beautiful design that catches the light and sparkles from every angle. The quality of the material used is evident, as the ring feels substantial and durable. The gemstone is exquisite, with a vibrant color and exceptional clarity.",
    name: "Anna Fernandez",
    location: "USA",
  },
  {
    image: "assets/product-4.webp",
    text: "I absolutely love this ring! It's elegant, well-made, and has become one of my favorite pieces of jewelry. The attention to detail is remarkable.",
    name: "Maria Garcia",
    location: "Spain",
  },
  {
    image: "assets/colletion-4.webp",
    text: "This ring is perfect! The craftsmanship is excellent, and it looks even better in person. I've received so many compliments on it.",
    name: "John Doe",
    location: "Canada",
  },
];

let currentIndex = 0;

function updateTestimonial(index) {
  const testimonialImage = document.getElementById("testimonial-image");
  const testimonialText = document.getElementById("testimonial-text");
  const testimonialFooter = document.getElementById("testimonial-footer");

  testimonialImage.src = testimonials[index].image;
  testimonialText.textContent = testimonials[index].text;
  testimonialFooter.innerHTML = `<strong>${testimonials[index].name}</strong><br>${testimonials[index].location}`;
}

function prevTestimonial() {
  currentIndex =
    currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
  updateTestimonial(currentIndex);
}

function nextTestimonial() {
  currentIndex =
    currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
  updateTestimonial(currentIndex);
}

// Initialize with the first testimonial
updateTestimonial(currentIndex);

// Add event listeners for navigation buttons
document
  .querySelector(".testimonial-nav .nav-button:nth-child(1)")
  .addEventListener("click", prevTestimonial);
document
  .querySelector(".testimonial-nav .nav-button:nth-child(2)")
  .addEventListener("click", nextTestimonial);
