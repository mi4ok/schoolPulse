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

    //ТАБЫ

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(itemClass) {
      $(itemClass).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__lists').eq(i).toggleClass('catalog-item__lists_active')
        })
      });
    }

    toggleSlide('.catalog-item__link_list');
    toggleSlide('.catalog-item__link');
});