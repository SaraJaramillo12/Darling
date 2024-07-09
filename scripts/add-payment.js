import { toggleMenu } from "../modules/menu.js";
import { proceedPayment } from "../modules/payment.js";

async function setupPage() {
  await toggleMenu();
  proceedPayment();
}

setupPage();
