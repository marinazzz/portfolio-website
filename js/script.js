const darkModeToggler = document.querySelector('.nav__items-toggler')
const darkModeBtn = document.querySelector('.nav__items-btn')

darkModeToggler.addEventListener('click', () => {

    darkModeBtn.classList.toggle('clicked');
    darkModeToggler.classList.toggle('dark');
    // document.body.classList.toggle('dark-mode');

    // document.body.classList.contains('dark-mode') ?
    //     darkModeBtn.classList.toggle('clicked') :
    //     darkModeToggler.classList.toggle('dark');
})
