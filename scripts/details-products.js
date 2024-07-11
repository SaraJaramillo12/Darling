import { toggleMenu } from '../modules/menu.js';
import {
    adjustProductQuantity,
    handleBuyNowClick,
    setupCart,
    selectProductSize,
    selectProductColor,
    setupBreadcrumb,
    toggleHeartIcons,
} from '../modules/details.js';
import { testimonials2 } from '../modules/testimonials.js';
import { setupTestimonials2 } from '../modules/index.js';
import { getProductById } from '../modules/product-service.js';

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

// Finds id of the selected product..
const getProductId = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    
    return urlParams.get('id');
  };

// Outputs a single product in the cart
const outputCartProductRow = product => {
    return (
        `<div class="product-item-like">
            <figure>
                <a href="productDetail.html">
                <img src="${product.image}" />
                </a>
            </figure>
    
            <div class="product-details">
                <p>${product.name}</p>
                <p>${product.price}</p>
            </div>
        </div>`
    );
}
  
// This will fire on initial page load
const importProductsFromLocalStorage = () => {
    const cartProducts = JSON.parse(localStorage.getItem('cart')) || [];

    cartProducts.forEach(product => {
        let newProductRow = outputCartProductRow(product);

        document.getElementById("cart-product-list-container").innerHTML += newProductRow;
    });
};
  
window.addEventListener('DOMContentLoaded', importProductsFromLocalStorage);
    

  
  // FIX THIS - clean this up, messy
  const addProductToLocalStorage = target => {
    // Adding to local storage
    const productDetail = target.closest('.product-detail');
    const product = {
        id: getProductId(),
        name: productDetail.querySelector('.product-name').innerText,
        image: productDetail.querySelector('.main-image').src,
        code: productDetail.querySelector('.product-code').innerText,
        price: productDetail.querySelector('.price').innerText,
        quantity: productDetail.querySelector('#quantity').value
    };
  
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Add the product to the cart innerHTML
    let newProductRow = outputCartProductRow(product);
  
    document.getElementById('cart-product-list-container').innerHTML += newProductRow;
  
    alert('Producto agregado al carrito');
  };
  
  const handleAddToBagClick = el => {
    let target = el.target
  
    addProductToLocalStorage(target);
  
    // importProductsFromLocalStorage();
  };
  
  document.querySelectorAll('.add-to-bag').forEach(button => {
    button.addEventListener('click', handleAddToBagClick);
  });