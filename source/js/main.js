`use strict`

const openMenu = document.querySelector(`.main-navigation__toggle`);
const closeMenu = document.querySelector(`.main-navigation__toggle--close`);
const mobileMenu = document.querySelector(`.main-navigation__list`);
const menuIcon = document.querySelector(`.page-header__logo`);

openMenu.addEventListener(`click`, function(){
  mobileMenu.classList.remove(`main-navigation__list--hidden`);
  menuIcon.style.marginTop = `222px`;
});

closeMenu.addEventListener(`click`, function(){
  mobileMenu.classList.add(`main-navigation__list--hidden`);
  menuIcon.style.marginTop = `0px`;
});
