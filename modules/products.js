import getData from '../helpers/getData.js';

const API_URL = 'http://localhost:3001/';

const endpoints = {
  productos: `${API_URL}productos`,
};

export async function fetchProducts() {
  try {
    const data = await getData(endpoints.productos);
    data.sort((a, b) => a.id - b.id);
    return data;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

export function sortProductsByPrice(products, order = 'asc') {
  return products.sort((a, b) => {
    if (order === 'asc') {
      return a.precioUnitario - b.precioUnitario;
    } else if (order === 'desc') {
      return b.precioUnitario - a.precioUnitario;
    }
  });
}

export function calculateTotal(products) {
  return products
    .reduce(
      (total, product) =>
        total + product.precioUnitario * product.cantidadEnStock,
      0
    )
    .toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
}

export async function renderProducts(products) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  if (products.length === 0) {
    const noProductsMessage = document.createElement('p');
    noProductsMessage.innerText = 'No products found for this category.';
    productList.appendChild(noProductsMessage);
    return;
  }

  products.forEach((product) => {
    const productCard = document.createElement('article');
    productCard.className = 'card';

    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const link = document.createElement('a');
    link.href = `product-page.html?id=${product.id}`;
    link.append(img);
    img.src = product.imagenes[0];
    img.alt = product.nombre;
    figure.appendChild(link);

    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.innerText = product.nombre;
    const p = document.createElement('p');
    p.innerText = `${product.precioUnitario.toFixed(2)}`;

    div.appendChild(h2);
    div.appendChild(p);

    productCard.appendChild(figure);
    productCard.appendChild(div);

    productList.appendChild(productCard);
  });

  const searchInput = document.getElementById('product-search');
  searchInput.addEventListener('input', () => {
    searchProducts(searchInput.value);
  });

  // Event listener for filter buttons
  const filterButtons = document.querySelectorAll('.filter');
  filterButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      const filterType = button.dataset.type; // Obtener el tipo de filtro

      // Fetch products
      const products = await fetchProducts();

      // Filtrar productos por tipo
      let filteredProducts;
      if (filterType === 'all') {
        filteredProducts = products; // Mostrar todos los productos ordenados por id
      } else {
        filteredProducts = products.filter(
          (product) => product.type === filterType
        );
      }

      // Ordenar productos filtrados por precio (ascendente por defecto)
      const sortedProducts =
        filterType === 'all'
          ? filteredProducts
          : sortProductsByPrice(filteredProducts);

      // Renderizar los productos ordenados en el DOM
      renderProducts(sortedProducts);
    });
  });
}

export async function searchProducts(query) {
  const productCards = document.querySelectorAll('.card');
  productCards.forEach((product) => {
    const name = product.querySelector('h2').textContent.toLowerCase();
    product.style.display = name.includes(query.toLowerCase())
      ? 'block'
      : 'none';
  });
}

//Nuevo codigo

export const getProductById = (id) => {
  return fetch(`${API_URL}productos?id=${id}`).then((res) => res.json());
};
 
