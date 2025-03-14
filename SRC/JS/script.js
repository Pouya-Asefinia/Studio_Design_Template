'use strict'

// mobile navbar
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

// Video in Introdus part 
const videoPart = document.querySelector('.video-bg');
const video = document.querySelector('.video');
const palyVideo = document.querySelector('.video-play-btn');
const pauseVideo = document.querySelector('.video-pause-btn');

palyVideo.addEventListener('click', () => {
    palyVideo.classList.add('deactive-btn');
    videoPart.classList.add('active-btn');
    video.play();
})
pauseVideo.addEventListener('click', () => {
    palyVideo.classList.remove('deactive-btn');
    videoPart.classList.remove('active-btn');
    video.pause();
})