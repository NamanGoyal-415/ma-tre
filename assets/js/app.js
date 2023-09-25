$('.slick').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  fade: true,
  dots: false,
  Arrows: true,
  prevArrow: '.prev',
  nextArrow: '.next',
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [{
      breakpoint: 1024,
      settings: {
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 200
      }
    },

  ]
});