

$(document).ready(function () {
  $('.carousel').carousel({
    interval: 3000 // Change slide every 2 seconds
  });
});


$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,

    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 999,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});




$(document).ready(function () {
  $('.dom').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,

    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 999,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});
