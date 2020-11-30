
$(document).ready(function(){
    $('.slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        variableWidth: true,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_prev.png" alt="previous"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_next.png" alt="next"></button>'
    });
  });