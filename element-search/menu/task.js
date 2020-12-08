  const links = document.querySelectorAll('.menu__link');
  const menuItem = document.querySelectorAll('.menu__item');
links.forEach(link => {
link.addEventListener('click', () => {
  menuSub = link.parentElement.querySelector('.menu_sub');
  if(menuSub !== null) {
  menuSub.classList.add('menu_active');
  link.preventDefault();
  }
})
});
