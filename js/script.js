$(document).ready(function() {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
  });

  $('.testimonials-slide').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    dots: false,
    loop: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 1
        }
      }
    ]
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      $(".fertolio-footer-btt").fadeIn();
    } else {
      $(".fertolio-footer-btt").fadeOut();
    }
  });
  $(".fertolio-footer-btt").click(function (event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 600);
  });
});