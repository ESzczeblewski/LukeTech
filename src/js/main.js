const nav = document.querySelector('.nav');
const topOfNav = nav.offsetTop;
const navOffset = nav.offsetHeight;

console.log(topOfNav);

function fixNav() {

    if (window.scrollY >= navOffset) {
        nav.classList.add('nav--sticky');
    } else {
        nav.classList.remove('nav--sticky');
    }

}

window.addEventListener('scroll', fixNav);