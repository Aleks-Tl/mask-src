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
        menuLink = document.querySelectorAll('.bottom-header__link'),
        btnsModal = document.querySelectorAll('[data-modal-button]'),
        modal = document.querySelector('[data-modal]'),
        btnsClose = document.querySelectorAll('[data-modal-close]'),
        body = document.querySelector('body'),
        pageUp = document.querySelector('.pageUp');



    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        overlay.classList.toggle('active');
        menu.classList.toggle('active');
    });
    overlay.addEventListener('click', () => {
        burger.classList.remove('active');
        overlay.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('lock');
    });
    menuLink.forEach((item) => {
        item.addEventListener('click', () => {
            burger.classList.remove('active');
            overlay.classList.remove('active');
            menu.classList.remove('active');
        })
    })

    btnsModal.forEach(function (btn) {
        btn.addEventListener('click', () => {
            overlay.classList.add('active');
            modal.classList.remove('hidden');
            body.classList.add('lock');
        })
    })

    btnsClose.forEach(btn => {
        btn.addEventListener('click', () => {
            overlay.classList.remove('active');
            modal.classList.add('hidden');
            body.classList.remove('lock');
        })
    });

    modal.addEventListener('click', (e) => {
        e.stopPropagation();
    })

    window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        if (scroll > 800) {
            pageUp.classList.add('active');
        } else {
            pageUp.classList.remove('active');
        }
    });

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

        },
        576: {
            slidesPerView: 2

        },
        992: {
            slidesPerView: 3

        },
    }
});

const letters = new Swiper('.letters__swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,

        },
        769: {
            slidesPerView: 2

        },
        1100: {
            slidesPerView: 3

        },
    }
});
