'use strict';

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

// Comments & Images slider
const sliders = document.querySelectorAll('.comment-slider, .image-slider');
const btn = document.querySelectorAll('.btn');
const slides = document.querySelectorAll('.text-slide, .pic-slide');

let currentIndex = 0;

function updateSlider(index) {
    const slideWidth = slides[0].clientWidth;
    sliders.forEach(slider => {
        slider.style.transform = `translateX(${index * slideWidth}px)`;
    });

    // Update button active state
    btn.forEach((button, i) => {
        if (i === index) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Initialize the first slide
updateSlider(currentIndex);

// Button click event
btn.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentIndex = index;
        updateSlider(currentIndex);
    });
});

let startX = 0;
let endX = 0; 

// Add touch event listeners to the slider container
sliders.forEach(slider => {
    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
    });

    slider.addEventListener('touchend', () => {
        const deltaX = endX - startX;

        if (deltaX > 50 && currentIndex < 4) {
            currentIndex++;
            updateSlider(currentIndex);
        } else if (deltaX < -50 && currentIndex > 0) {
            currentIndex--;
            updateSlider(currentIndex);
        }
    });
});
// Update slider on window resize to ensure responsiveness
window.addEventListener('resize', () => {
    updateSlider(currentIndex); 
});


