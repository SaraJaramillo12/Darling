import { toggleMenu } from "../modules/menu.js";
import {
  fetchProducts,
  renderProducts,
  searchProducts,
  sortProductsByPrice,
} from "../modules/products.js";

async function setupPage() {
  await toggleMenu();
  const products = await fetchProducts();
  renderProducts(products);

  const searchInput = document.getElementById("product-search");
  searchInput.addEventListener("input", () => {
    searchProducts(searchInput.value);
  });

  const sortSelect = document.getElementById("sort-select");
  sortSelect.addEventListener("change", () => {
    const sortBy = sortSelect.value;
    let sortedProducts;

    if (sortBy === "price") {
      const sortOrder = document.getElementById("sort-order").value;
      sortedProducts = sortProductsByPrice(products, sortOrder);
    } else if (sortBy === "asc" || sortBy === "desc") {
      sortedProducts = sortProductsByPrice(products, sortBy);
    }

    renderProducts(sortedProducts);
  });
}

setupPage();
