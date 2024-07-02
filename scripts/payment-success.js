//Activar y desactivar el menu
document.getElementById("menuButton").addEventListener("click", function () {
    var navbar = document.getElementById("navbar");
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
    } else {
      navbar.classList.add("active");
    }
  });