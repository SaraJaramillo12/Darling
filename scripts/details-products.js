import { toggleMenu } from "../modules/menu.js";
import {
  setupCart,
  toggleHeartIcons,
  selectProductSize,
  selectProductColor,
  adjustProductQuantity,
  setupBreadcrumb,
} from "../modules/details.js";
import { testimonials2 } from "../modules/testimonials.js";
import { setupTestimonials2 } from "../modules/index.js";

async function setupPage() {
  await toggleMenu();
  setupCart();
  toggleHeartIcons();
  selectProductSize();
  selectProductColor();
  adjustProductQuantity();
  setupBreadcrumb();
  setupTestimonials2(testimonials2);
}

setupPage();
