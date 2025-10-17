let menu = document.querySelector('#menu')
var menuLinks = document.querySelector('.nav_menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})