const toggleMenu = document.querySelector('.toggleMenu')
const header = document.querySelector('header');

toggleMenu.addEventListener('click', () => {
    document.querySelector('.mobileNavMenu').classList.toggle('active');
    if (document.querySelector('.mobileNavMenu.active')) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
    toggleMenu.classList.toggle('active');
})


window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});