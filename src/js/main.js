const nav = document.querySelector('.nav');
const topOfNav = nav.offsetTop;
const navOffset = nav.offsetHeight;

function fixNav() {

    if (window.scrollY >= navOffset) {
        nav.classList.add('nav--sticky');
    } else {
        nav.classList.remove('nav--sticky');
    }

}

window.addEventListener('scroll', fixNav);

const hamburger = document.querySelector('.nav__checkbox');
const darkDiv = document.querySelector('.dark');

hamburger.addEventListener('click', () => {
    setTimeout(() => {
        darkDiv.classList.toggle('dark--active')
    }, 300);
});

if (hamburger.checked == 1) {
    darkDiv.classList.add('dark--active');
}

// Close nav list after click

const navLinks = Array.from(document.querySelectorAll('.nav__list li a'));

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.checked = 0;
        setTimeout(() => {
            if (window.screen.width < 800) {
                darkDiv.classList.toggle('dark--active')
            }
        }, 300);
    })
})



// Small NAVIGATION
import Splide from '@splidejs/splide';

const slidesDesc = Array.from(document.querySelectorAll('.splide__slide__desc'));


const heroSlides = new Splide( '.splide', {
    cover: true,
    fixedHeight: '90vh',
    type: 'loop',
    autoplay: true,
    interval: 5000,
});

heroSlides.on('mounted', function() {
    slidesDesc[0].classList.add('splide__slide__desc--active');
});

heroSlides.on('moved', function(newIndex) {

    slidesDesc.forEach((desc, descIndex) => {
        desc.classList.remove('splide__slide__desc--active');

        if (descIndex == newIndex) {
            desc.classList.add('splide__slide__desc--active')
        }
    })
})

heroSlides.mount();