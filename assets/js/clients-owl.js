let clients = $(".customer-and-clients-slider");

clients.owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  autoplay: false,
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
      items: 2,
    },
  },
});

// Go to the next item
$("#prev-review-carousel").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  clients.trigger("prev.owl.carousel", [1000]);
});
// Go to the previous item
$("#next-review-carousel").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  clients.trigger("next.owl.carousel", [1000]);
});
