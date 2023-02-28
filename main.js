const navEmail = document.querySelector(".navbar-email");
const menudesktop = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.getElementById("shoppingCartContainer");
const productDetailCloseIcon = document.querySelector("#productDetail");
const productDetailContainer = document.getElementById("productDetail");
const carritoAside = document.querySelector(".navbar-shopping-cart");
const cartContainer = document.querySelector(".cards-container");

navEmail.addEventListener("click", togglemenudesktop);
menuHamIcon.addEventListener("click", togglemobileMenu);
carritoAside.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function togglemenudesktop() {
  menudesktop.classList.toggle("inactive");
}

function togglemobileMenu() {
  const asideClose = shoppingCartContainer.classList.contains("inactive");

  if (!asideClose) {
    shoppingCartContainer.classList.add("inactive");
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const mobileMenuClose = mobileMenu.classList.contains("inactive");
  if (!mobileMenuClose) {
    mobileMenu.classList.add("inactive");
  }

  const producDetailClosed =
    productDetailContainer.classList.contains("inactive");

  if (!producDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }

  shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
  name: "bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function vewProducts(arr) {
  for (product of arr) {
    const productcard = document.createElement("div");
    productcard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productFigure = document.createElement("figure");
    const productImageCart = document.createElement("img");
    productImageCart.setAttribute(
      "src",
      "./contenedor-curso/icons/bt_add_to_cart.svg"
    );

    productFigure.appendChild(productImageCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productFigure);

    productcard.appendChild(productImg);
    productcard.appendChild(productInfo);

    cartContainer.appendChild(productcard);
  }
}
vewProducts(productList);
