// menu

const menu = document.querySelector('.navbar__links');
const menuButton = document.querySelector('.navbar__icons');
const overlay = document.querySelector('#overlay');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('navbar__open');
    menuButton.classList.toggle('open');
    overlay.classList.toggle('show');
})

overlay.addEventListener('click', () => {
    menu.classList.toggle('navbar__open');
    menuButton.classList.toggle('open');
    overlay.classList.toggle('show');
});


//  scroll reveal 

const sr = ScrollReveal({
    distance: '60px',
    duration: 2000,
    reset: true,
});

sr.reveal(`.banner__social`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.banner__img, .scroll2, .crollright`,{
    origin: 'right',
})

sr.reveal(`.banner__heading, .scroll1, .scroll3, .crollleft, .footer__heading`,{
    origin: 'left',
})