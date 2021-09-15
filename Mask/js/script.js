// JS-функция определения поддержки WebP
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger'),
        overlay = document.querySelector('.overlay'),
        menu = document.querySelector('.bottom-header__list'),
        menuLink = document.querySelectorAll('.bottom-header__link');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        overlay.classList.toggle('active');
        menu.classList.toggle('active');
    });
    overlay.addEventListener('click', () => {
        burger.classList.remove('active');
        overlay.classList.remove('active');
        menu.classList.remove('active');
    });
    menuLink.forEach((item) => {
        item.addEventListener('click', () => {
            burger.classList.remove('active');
            overlay.classList.remove('active');
            menu.classList.remove('active');
        })
    })
});

var swiper = new Swiper(".blog__swiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1800: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
});
