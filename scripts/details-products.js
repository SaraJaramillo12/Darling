import { toggleMenu } from '../modules/menu.js';
import {
  setupCart,
  toggleHeartIcons,
  selectProductSize,
  selectProductColor,
  adjustProductQuantity,
  handleBuyNowClick,
  setupBreadcrumb,
} from '../modules/details.js';
import { testimonials2 } from '../modules/testimonials.js';
import { setupTestimonials2 } from '../modules/index.js';

async function setupPage() {
  await toggleMenu();
  setupCart();
  toggleHeartIcons();
  selectProductSize();
  selectProductColor();
  adjustProductQuantity();
  handleBuyNowClick();
  // setupBreadcrumb();
  setupTestimonials2(testimonials2);
}

setupPage();

document.querySelectorAll('.add-to-bag').forEach(button => {
  button.addEventListener('click', function() {
      const productDetail = this.closest('.product-detail');
      const product = {
          name: productDetail.querySelector('.product-name').innerText,
          image: productDetail.querySelector('.main-image').src,
          code: productDetail.querySelector('.product-code').innerText,
          price: productDetail.querySelector('.price').innerText,
          quantity: productDetail.querySelector('#quantity').value
      };

      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));

      alert('Producto agregado al carrito');
  });
});

