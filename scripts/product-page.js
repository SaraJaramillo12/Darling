import { getProductById } from '../modules/product-service.js';

const thumbnailImageElement = (src, alt) => `<img src="${src}" alt="${alt}">`;

const getProductId = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  return urlParams.get('id');
};

const mapProduct = async () => {
  const productId = getProductId();
  const [product] = await getProductById(productId);

  document.getElementById('product-name').innerText = product.nombre;
  document.getElementById('product-main-image').src = product.imagenes[0];
  document.getElementById('breadcrumb-name').innerText = product.nombre;
  document.getElementById('product-price').innerText = '$' + product.precioUnitario;
  document.getElementById('product-code').innerText =
    'Código: ' + (product.code || 'xxxx');

  const thumbnailImages = product.imagenes 
  thumbnailImages.forEach((image) => {
    const imagesContainer = document.getElementById('product-images');
    imagesContainer.innerHTML =
      imagesContainer.innerHTML +
      thumbnailImageElement(image);
  });
};

mapProduct();
