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

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn();
    });
    $('.modal__close, .overlay').on('click', function() {
      if (!$(event.target).closest('.modal').length) {
        $('.overlay, #consultation, #order, #thanks').fadeOut();
      }
    })

    $('.button_catalog').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__desc').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn();
      })
    });

    function validateForm(form) {
      $(form).validate({
        rules: {
          name: 'required',
          phone: 'required',
          email: {
            required: true,
            email: true
          }
        }
      });
    };

  validateForm('#consultation form');
  validateForm('#order form');
  validateForm('#consultation-form');

  
  $("input[name=phone]").mask("+7 (999) 999-99-99");

  $('form').submit(function(e) {
    e.preventDefault();
  // if(!e(this).valid()) {
  //   return;
  // }
    $.ajax({
      type: "POST",
      url: "smart.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn();
      $('form').trigger('reset');
    });
    return false;
  });

  $(window).scroll(function() {
    if($(this).scrollTop() > 600) {
      $('.up-arrow').fadeIn();
    } else {
      $('.up-arrow').fadeOut();
    }
  });

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } // End if
  });

  new WOW().init();
});