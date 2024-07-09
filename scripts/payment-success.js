import { toggleMenu } from "../modules/menu.js";

async function setupPage() {
  await toggleMenu();
}

setupPage();
