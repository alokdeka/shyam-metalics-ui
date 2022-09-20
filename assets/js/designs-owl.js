let design = $(".designs-carousel");

design.owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  center: true,
  transitionStyle: "fade",
  smartSpeed: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      center: false,
    },
    600: {
      items: 2,
      center: false,
    },
    1000: {
      items: 3,
    },
  },
});

// Go to the next item
$("#prev-about-carousel").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  design.trigger("prev.owl.carousel", [1000]);
});
// Go to the previous item
$("#next-about-carousel").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  design.trigger("next.owl.carousel", [1000]);
});
