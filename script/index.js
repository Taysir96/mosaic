// const slides = ['banner-1.jpg', 'home-2.jpg', 'home4.jpg', 'home-6.jpg', 'home-5.jpg'];
// let currentSlide = 0;
// const slideshow = document.querySelector('.banner-menu');

// function showSlide(n) {
//     currentSlide = (n + slides.length) % slides.length;
//     slideshow.style.backgroundImage = `url(./images/${slides[currentSlide]})`;
// }

// showSlide(0);

// setInterval(() => {
//     showSlide(currentSlide + 1);
// }, 3000);

var images = ["../images/menu-card.jpg", "../images/menu-card2.jpg"];
var currentIndex = 0;
var slideshow = document.querySelector('.banner-menu');

function slideImage() {
    slideshow.style.backgroundImage = 'url(' + images[currentIndex] + ')';
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
}

setInterval(slideImage, 3000);

document.body.onmousemove = function (e) {
    document.documentElement.style.setProperty(
        '--x', (
            e.clientX + window.scrollX
        )
    + 'px'
    );
    document.documentElement.style.setProperty(
        '--y', (
            e.clientY + window.scrollY
        )
    + 'px'
    );
}