const slides = ['banner-1.jpg', 'home-2.jpg', 'home-4.jpg', 'home-6.jpg', 'home-5.jpg'];
let currentSlide = 0;
const slideshow = document.querySelector('.banner-menu');

function showSlide(n) {
    currentSlide = (n + slides.length) % slides.length;
    slideshow.style.backgroundImage = `url(./images/${slides[currentSlide]})`;
}

showSlide(0);

setInterval(() => {
    showSlide(currentSlide + 1);
}, 3000);