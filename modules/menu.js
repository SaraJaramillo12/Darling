export async function toggleMenu() {
  const menuButton = document.getElementById("menuButton");
  if (menuButton) {
    menuButton.addEventListener("click", function () {
      let navbar = document.getElementById("navbar");
      navbar.classList.toggle("active");
    });
  }
}
