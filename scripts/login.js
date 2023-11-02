let popover = document.querySelector('.popover');
let popoverOpen = document.querySelector('.middle-header__login-button');
let popoverClose = document.querySelector('.popover__close-button');
let cartCounter = document.querySelector('.bottom-header__menu-list');

popoverOpen.addEventListener('click', () => {
  popover.classList.toggle('popover__active');
})

popoverClose.addEventListener('click', () => {
  popover.classList.toggle('popover__active');
   if (popover.classList.contains('popover-logout')) {
    headerCabinet.classList.remove('unauthorized-user');
    headerCabinet.classList.add('authorized-user');
    cartCounter.classList.add('menu__authorized-user');
  }
})

let loginInput = document.querySelector('.popover__input-login');
let passwordInput = document.querySelector('.popover__input-password');
let popoverForm = document.querySelector('.popover__form');
let headerCabinet = document.querySelector('.middle-header-container');

popoverForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (loginInput.value === 'user' && passwordInput.value === '123') {
    popover.classList.remove('popover-login');
    popover.classList.add('popover-logout');
  }
})

let logoutButtonPopover = document.querySelector('.popover__logout-button');

logoutButtonPopover.addEventListener('click', (evt) => {
  evt.preventDefault();
  popover.classList.add('popover-login');
  popover.classList.remove('popover-logout');
})

let logoutButton = document.querySelector('.middle-header__logout-button');

logoutButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  headerCabinet.classList.remove('authorized-user');
  cartCounter.classList.remove('menu__authorized-user');
  headerCabinet.classList.add('unauthorized-user');
  popover.classList.remove('popover-logout');
  popover.classList.add('popover-login');
  popover.classList.remove('popover__active');
})

