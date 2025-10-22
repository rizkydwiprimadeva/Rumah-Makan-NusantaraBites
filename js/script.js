// Tombol garis 3 untuk tablet/mobile
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#makanan-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Tombol class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// Tombol class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

// Klik dibagian luar sidebar untuk menghilangkan element
const mn = document.querySelector('#makanan-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');



document.addEventListener('click', function (e) {
  if (!mn.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});