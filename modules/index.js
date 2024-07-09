export async function setupTestimonials(testimonials) {
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

  document
    .querySelector(".testimonial-nav .nav-button:nth-child(1)")
    .addEventListener("click", prevTestimonial);
  document
    .querySelector(".testimonial-nav .nav-button:nth-child(2)")
    .addEventListener("click", nextTestimonial);

  updateTestimonial(currentIndex);
}

export async function setupTestimonials2(testimonials2) {
  let currentIndex = 0;

  function updateTestimonial(index) {
    const testimonialImage = document.getElementById("testimonial-image");
    const testimonialText = document.getElementById("testimonial-text");
    const testimonialFooter = document.getElementById("testimonial-footer");

    testimonialImage.src = testimonials2[index].image;
    testimonialText.textContent = testimonials2[index].text;
    testimonialFooter.innerHTML = `<strong>${testimonials2[index].name}</strong><br>${testimonials2[index].location}`;
  }

  function prevTestimonial() {
    currentIndex =
      currentIndex === 0 ? testimonials2.length - 1 : currentIndex - 1;
    updateTestimonial(currentIndex);
  }

  function nextTestimonial() {
    currentIndex =
      currentIndex === testimonials2.length - 1 ? 0 : currentIndex + 1;
    updateTestimonial(currentIndex);
  }

  document
    .querySelector(".testimonial-nav .nav-button:nth-child(1)")
    .addEventListener("click", prevTestimonial);
  document
    .querySelector(".testimonial-nav .nav-button:nth-child(2)")
    .addEventListener("click", nextTestimonial);

  updateTestimonial(currentIndex);
}
