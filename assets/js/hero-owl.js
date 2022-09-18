let hero = $(".hero-carousel");

hero.owlCarousel({
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

// hero.owlCarousel();
// Go to the next item
$("#prev-hero-carousel").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  hero.trigger("prev.owl.carousel", [1000]);
});
// Go to the previous item
$("#next-hero-carousel").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  hero.trigger("next.owl.carousel", [1000]);
});
