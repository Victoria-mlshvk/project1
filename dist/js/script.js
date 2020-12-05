$(document).ready(function(){
    $('.slider').slick({
        centerMode: true,
        centerPadding: '44px',
        slidesToShow: 3,
        variableWidth: true,
        adaptiveHeight: true,
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_prev.png" alt="previous"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_next.png" alt="next"></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false
                }
            }
        ]
    });
  });
  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.promo__nav'),
    menuItem = document.querySelectorAll('.promo__nav__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('promo__nav_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('promo__nav_active');
        })
    })
})