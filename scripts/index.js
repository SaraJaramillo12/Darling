import { toggleMenu } from "../modules/menu.js";
import { setupTestimonials } from "../modules/index.js";
import { testimonials } from "../modules/testimonials.js";

async function setupPage() {
  await toggleMenu();
  setupTestimonials(testimonials);
}

setupPage();
