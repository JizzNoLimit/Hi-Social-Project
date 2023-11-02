const MENU_BTN = document.querySelector('.menu-btn')
const NAV_MENU = document.querySelector('.nav-menu')

MENU_BTN.addEventListener('click', () => {
    NAV_MENU.classList.toggle('top-[74px]')
    NAV_MENU.classList.toggle('-top-[100vh]')
    NAV_MENU.classList.toggle('opacity-100')
    NAV_MENU.classList.toggle('opacity-40')
})


// let swiper = new Swiper('.swiper', {
//     grabCursor: true,
//     centeredSlides: true,
//     loop: true,
//     spaceBetween: 24,
//     breakpoints: {
//         1024: {
//             slidesPerView: 3
//         }
//     },
// })

const MENU_PORTOFOLIO = document.querySelectorAll('#menu-portofolio')
const TOOLBAR = document.querySelector('.toolbar')

const MENU_TOOLBAR = [
    {
        name: "social media management",
        content: "Pastikan elemen visual merek Anda dapat digunakan secara efektif di berbagai media, mulai dari situs web hingga media sosial, kemasan produk, dan materi pemasaran lainnya."
    },
    {
        name: "branding identity visual",
        content: "Pastikan elemen visual merek Anda dapat digunakan secara efektif di berbagai media, mulai dari situs web hingga media sosial, kemasan produk, dan materi pemasaran lainnya."
    },
    {
        name: "logo branding identity",
        content: "konsep desain yang menciptakan identitas khas merek atau perusahaan dalam pikiran konsumen dengan elemen visualnya."
    },
    {
        name: "website and system",
        content: "konsep desain yang menciptakan identitas khas merek atau perusahaan dalam pikiran konsumen dengan elemen visualnya."
    },
    {
        name: "digital marketing startegy",
        content: "konsep desain yang menciptakan identitas khas merek atau perusahaan dalam pikiran konsumen dengan elemen visualnya."
    },
]

MENU_PORTOFOLIO.forEach( function(menu) {
    menu.addEventListener('mouseenter', () => {
        TOOLBAR.style = "opacity: 1"

        MENU_TOOLBAR.forEach( toolbar => {
            if (menu?.dataset.menu === toolbar.name) {
                TOOLBAR.children[0].textContent = toolbar.content
            }
        })
    })

    menu.addEventListener('mouseleave', () => {
        TOOLBAR.style = "opacity: 0"
    })
});


