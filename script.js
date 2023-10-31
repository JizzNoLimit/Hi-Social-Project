const MENU_BTN = document.querySelector('.menu-btn')
const NAV_MENU = document.querySelector('.nav-menu')

MENU_BTN.addEventListener('click', () => {
    NAV_MENU.classList.toggle('top-[74px]')
    NAV_MENU.classList.toggle('-top-[100vh]')
    NAV_MENU.classList.toggle('opacity-100')
    NAV_MENU.classList.toggle('opacity-40')
})


let swiper = new Swiper('.swiper', {
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    spaceBetween: 24,
    breakpoints: {
        1024: {
            slidesPerView: 3
        }
    },
})