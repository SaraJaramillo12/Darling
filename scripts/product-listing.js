// Función para filtrar en el search bar
const searchInput = document.getElementById("product-search");
const productCards = document.querySelectorAll(".card");

searchInput.addEventListener("input", () => {
    searchProducts(searchInput.value);
});

function searchProducts(query) {
    productCards.forEach((product) => {
        const name = product.querySelector("h2").textContent.toLowerCase();
        if (name.includes(query.toLowerCase())) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

// Punto 1

function punto1 () {
  const products = [
      { id: "001", nombre: "Luxury Gems Necklace", codigo: "12502", type: 'necklaces' },
      { id: "002", nombre: "Aurora Ring", codigo: "78205", type: 'rings' },
      { id: "003", nombre: "Reflection Necklace", codigo: "", type: 'necklaces' },
      { id: "004", nombre: "Dreamy infinity Ring", codigo: "", type: 'rings' },
      { id: "005", nombre: "Opulent Jewels Ring", codigo: "", type: 'rings' },
      { id: "006", nombre: "Serene solitaire Earrings", codigo: "", type: 'earrings' },
      { id: "007", nombre: "Timeless Halo Earrings", codigo: "", type: 'earrings' },
      { id: "008", nombre: "Exquisite Earrings", codigo: "", type: 'earrings' },

  ]
  
  return products;
}


function punto2 (arr, type) {
  const result = arr.filter((item) => {
      return item.type === type
  });

  console.log(result)
}

punto2(punto1(), "aseo");



// Función para ordenar productos por precio
function sortProductsByPrice(products, order = "asc") {
  return products.sort((a, b) => {
    if (order === "asc") {
      return a.price - b.price;
    } else if (order === "desc") {
      return b.price - a.price;
    }
  });
}

// Función para calcular el total a pagar de una compra
function calculateTotal(products) {
  return products
    .reduce((total, product) => {
      return total + product.price * product.quantity;
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

  products.forEach((product) => {
    const productCard = document.createElement("article");
    productCard.className = "card";

    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = product.imageUrl;
    img.alt = product.name;
    figure.appendChild(img);

    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.innerText = product.name;
    const p = document.createElement("p");
    p.innerText = `$${product.price.toFixed(2)}`;

    div.appendChild(h2);
    div.appendChild(p);

    productCard.appendChild(figure);
    productCard.appendChild(div);

    productList.appendChild(productCard);
  });
}

// Manejar el evento de cambio en el select
document.getElementById("sort-select").addEventListener("change", function () {
  const order = this.value;
  const products = getProductsFromDOM();
  const sortedProducts = sortProductsByPrice(products, order);
  renderProducts(sortedProducts);
});

// Productos para prueba
const products = [
  { name: "Luxury Gems Necklace", price: 168.76, quantity: 1 },
  { name: "Aurora Ring", price: 125.28, quantity: 2 },
  { name: "Reflection Necklace", price: 620.73, quantity: 1 },
  { name: "Dreamy infinity Ring", price: 327.71, quantity: 3 },
];

// Probar la función de ordenar
console.log("Productos ordenados por precio ascendente:");
console.log(sortProductsByPrice(products, "asc"));

console.log("Productos ordenados por precio descendente:");
console.log(sortProductsByPrice(products, "desc"));

// Probar la función de cálculo de total
console.log("Total a pagar:");
console.log(calculateTotal(products));
