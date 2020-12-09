const links = document.querySelectorAll('.menu__link');
const menuItem = document.querySelectorAll('.menu__item');
links.forEach(link => {
    link.addEventListener('click', (event) => {
        menuSub = link.parentElement.querySelector('.menu_sub');
        if (menuSub !== null) {
            event.preventDefault();
            menuSub.classList.add('menu_active');

        }
    })
});
