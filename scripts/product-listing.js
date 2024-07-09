// //Activar y desactivar el menu
document.getElementById("menuButton").addEventListener("click", function () {
  let navbar = document.getElementById("navbar");
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
  } else {
    navbar.classList.add("active");
  }
});


const API_URL = "http://localhost:3000/productos"; // URL del servidor JSON

async function fetchProducts() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    let data = await response.json();

    // Ordenar los productos por id
    data.sort((a, b) => a.id - b.id);

    return data;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

// Función para ordenar productos por precio
function sortProductsByPrice(products, order = "asc") {
  return products.sort((a, b) => {
    if (order === "asc") {
      return a.precioUnitario - b.precioUnitario;
    } else if (order === "desc") {
      return b.precioUnitario - a.precioUnitario;
    }
  });
}

// Función para calcular el total a pagar de una compra
function calculateTotal(products) {
  return products
    .reduce((total, product) => {
      return total + product.precioUnitario * product.cantidadEnStock;
    }, 0)
    .toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
}

// Renderizar los productos en el DOM
function renderProducts(products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  if (products.length === 0) {
    const noProductsMessage = document.createElement("p");
    noProductsMessage.innerText = "No products found for this category.";
    productList.appendChild(noProductsMessage);
    return;
  }

  products.forEach((product) => {
    const productCard = document.createElement("article");
    productCard.className = "card";

    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const link = document.createElement("a");
    link.href = `details-products.html#product${product.id}`; // Enlace a la página de detalles del producto
    link.append(img);
    img.src = product.imagenes[0];
    img.alt = product.nombre;
    figure.appendChild(link);

    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.innerText = product.nombre;
    const p = document.createElement("p");
    p.innerText = `${product.precioUnitario.toFixed(2)}`;

    div.appendChild(h2);
    div.appendChild(p);

    productCard.appendChild(figure);
    productCard.appendChild(div);

    productList.appendChild(productCard);
  });

  // Agregar el event listener para la barra de búsqueda
  const searchInput = document.getElementById("product-search");
  searchInput.addEventListener("input", () => {
    searchProducts(searchInput.value);
  });
}

// Función para filtrar en el search bar
function searchProducts(query) {
  const productCards = document.querySelectorAll(".card");
  productCards.forEach((product) => {
    const name = product.querySelector("h2").textContent.toLowerCase();
    if (name.includes(query.toLowerCase())) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

// Escuchar eventos de clic en los botones de filtro
document.addEventListener("DOMContentLoaded", async () => {
  const products = await fetchProducts();

  if (!products) {
    console.error("Failed to fetch products");
    return;
  }

  const filterButtons = document.querySelectorAll(".filter");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filterType = button.dataset.type; // Obtener el tipo de filtro

      // Filtrar productos por tipo
      let filteredProducts;
      if (filterType === "all") {
        filteredProducts = products; // Mostrar todos los productos ordenados por id
      } else {
        filteredProducts = products.filter(
          (product) => product.type === filterType
        );
      }

      // Ordenar productos filtrados por precio (ascendente por defecto) solo si no es "all"
      const sortedProducts =
        filterType === "all"
          ? filteredProducts
          : sortProductsByPrice(filteredProducts);

      // Renderizar los productos ordenados en el DOM
      renderProducts(sortedProducts);
    });
  });

  // Manejar el evento de cambio en el select
  document
    .getElementById("sort-select")
    .addEventListener("change", function () {
      const order = this.value;
      const sortedProducts = sortProductsByPrice(products, order);
      renderProducts(sortedProducts);
    });

  // Inicializar con todos los productos ordenados ascendentemente por id
  renderProducts(products);
});
