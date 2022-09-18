let about = $(".about-carousel");

about.owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  singleItem: true,
  transitionStyle: "fade",
  smartSpeed: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// about.owlCarousel();
// Go to the next item
$("#prev-about-carousel").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  about.trigger("prev.owl.carousel", [1000]);
});
// Go to the previous item
$("#next-about-carousel").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  about.trigger("next.owl.carousel", [1000]);
});
