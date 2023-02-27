const navEmail = document.querySelector(".navbar-email");
const menudesktop = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

navEmail.addEventListener("click", togglemenudesktop);
menuHamIcon.addEventListener("click", togglemobileMenu);

function togglemenudesktop() {
  menudesktop.classList.toggle("inactive");
}

function togglemobileMenu() {
  mobileMenu.classList.toggle("inactive");
}
