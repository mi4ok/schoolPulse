$(document).ready(function(){
    $('.carousel__inner').slick({
        adaptiveHeight: true,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button class="slick-prev"><img src="images/icons/chevron-left-solid.png"></button>',
        nextArrow: '<button class="slick-next"><img src="images/icons/chevron-right-solid.png"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: false,
                arrows: false
              }
            }
        ]
    });
});