'use strict'


const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileFilter = document.querySelector('.menu-overlay');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('open-menu');
    mobileFilter.classList.add('active-overlay');
});
mobileFilter.addEventListener('click', () => {
    mobileMenu.classList.remove('open-menu');
    mobileFilter.classList.remove('active-overlay');
})

