import { toggleMenu } from "../modules/menu.js";
import {
  setupCart,
  toggleHeartIcons,
  selectProductSize,
  selectProductColor,
  adjustProductQuantity,
  handleBuyNowClick,
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
  handleBuyNowClick();
  setupBreadcrumb();
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



//Nuevo codigo
// const thumbnailImageElement = (src, alt) => `<img src="${src}" alt="${alt}">`;

// const getProductId = () => {
//   const queryString = window.location.search;
//   const urlParams = new URLSearchParams(queryString);
//   return urlParams.get('id');
// };

// const mapProduct = async () => {
//   const productId = getProductId();
//   const [product] = await getProductById(productId);

//   document.getElementById('product-name').innerText = product.nombre;
//   document.getElementById('product-main-image').src = product.imagenes[0];
//   document.getElementById('breadcrumb-name').innerText = product.nombre;
//   document.getElementById('product-price').innerText = '$' + product.precioUnitario.toFixed(2);
//   document.getElementById('product-code').innerText = 'Código: ' + (product.id || 'xxxx');
//   document.getElementById('product-description').innerText = product.descripcion;

//   const imagesContainer = document.getElementById('product-images');
//   imagesContainer.innerHTML = ''; // Clear previous images

//   const thumbnailImages = product.imagenes || [product.imagenes[0]];

//   thumbnailImages.forEach((image) => {
//     imagesContainer.innerHTML += thumbnailImageElement(image, product.nombre);
//   });
// };

// mapProduct();

// // Función para obtener el producto por ID desde el servidor
// export const getProductById = async (id) => {
//   const response = await fetch(`${API_URL}/productos?id=${id}`);
//   const data = await response.json();
//   return data.productos.filter(product => product.id == id);
// };
