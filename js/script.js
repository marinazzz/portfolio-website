const navBtn = document.querySelector('.nav__button');
const navList = document.querySelector('.nav__list-wrapp');
const overlay = document.querySelector('.overlay');

navBtn.addEventListener('click', function (e) {
    e.preventDefault;

    toggleClasslist(this, 'nav__button--open');
    checkClassActive(navList, 'nav__list-wrapp--open');

    setTimeout(() => {
        checkClassActive(overlay, 'overlay--active');
    }, 300);

})

let toggler = false;
function toggleClasslist(e, name) {
    if (!toggler) {
        e.classList.add(name);
        toggler = true;
    }
    else {
        e.classList.remove(name);
        toggler = false;
    }
}

function checkClassActive(e, name) {
    if (!toggler) {
        e.classList.remove(name);
    }
    else {
        e.classList.add(name);
    }
}

//removes active classes on menu list click
const menuListArr = [...document.querySelectorAll('.nav__menu-item')];

menuListArr.forEach(e => e.addEventListener('click', function () {
    if (toggler) {
        toggleClasslist(navBtn, 'nav__button--open');
        checkClassActive(overlay, 'overlay--active');
        checkClassActive(navList, 'nav__list-wrapp--open');
    }
}))


const darkModeToggler = document.querySelector('.nav__items-toggler')
const darkModeBtn = document.querySelector('.nav__items-btn')

darkModeToggler.addEventListener('click', () => {

    darkModeBtn.classList.toggle('clicked');
    darkModeToggler.classList.toggle('dark');
    document.body.classList.toggle('dark-mode');
})
