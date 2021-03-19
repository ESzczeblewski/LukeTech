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

// Small NAVIGATION

const slidesArr = Array.from(document.querySelectorAll(".slides__slide"));

const slidesButtons = Array.from(document.querySelectorAll('.slides-nav__btn'));

const slidesDesc = Array.from(document.querySelectorAll('.slides__slide__desc'));

slidesButtons.forEach((btn, index) => btn.addEventListener('click', () => {

    slidesButtons.forEach(btn => btn.classList.remove('slides-nav__btn--active'));

    btn.classList.add('slides-nav__btn--active')

    slidesArr.forEach((slide, slideIndex) => {
        slide.classList.remove('slides__slide--active');

        if (slideIndex === index) {
            slide.classList.add('slides__slide--active');
        }
    })

    slidesDesc.forEach((desc, descIndex) => {
        desc.classList.remove('slides__slide__desc--active');

        if (descIndex === index) {
            desc.classList.add('slides__slide__desc--active');
        }
    })
}))

// DODAĆ STYLE DO PRZYCISKÓW