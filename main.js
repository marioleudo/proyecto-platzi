const navEmail = document.querySelector(".navbar-email");
const menudesktop = document.querySelector(".desktop-menu");

navEmail.addEventListener("click", togglemenudesktop);

function togglemenudesktop() {
  menudesktop.classList.toggle("inactive");
}
