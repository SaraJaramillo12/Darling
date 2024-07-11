import { toggleMenu } from "../modules/menu.js";
import { proceedPayment } from "../modules/payment.js";
import {handleShoppingCart} from "../modules/details.js";
import {setupCart} from "../modules/details.js";

async function setupPage() {
  await toggleMenu();
  proceedPayment();
  handleShoppingCart();
  handleCart();
  setupCart();
}

setupPage();

// handleFormData = e => {
//   console.log(e.data);
//  }

//  const form = document.getElementById("payment-form");

// form.addEventListener("submit", handleSubmit);