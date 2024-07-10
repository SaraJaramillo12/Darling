import { toggleMenu } from "../modules/menu.js";
import { proceedPayment } from "../modules/payment.js";
import {handleShoppingCart} from "../modules/details.js";

async function setupPage() {
  await toggleMenu();
  proceedPayment();
  handleShoppingCart();
  handleCart();
}

setupPage();

