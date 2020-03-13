$(document).ready(function() {
  // scroll fixa topo
  jQuery(window).scroll(function() {
    var $header = $("#header");
    var fixClass = "top-fixed";
    var breakpoint = 80;

    if (jQuery(window).scrollTop() > breakpoint) {
      if (!$header.hasClass(fixClass)) $header.addClass(fixClass);
    } else if ($header.hasClass(fixClass)) $header.removeClass(fixClass);
  });

  // menu toggle
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#header").toggleClass("open");
    $(".sub-menu").toggleClass("open");
    if (!$("#header").hasClass("open"))
      $("#header nav.sub-menu").removeClass("open");
  });

  // ajusta imagens as figures
  $("figure.fit").each(function() {
    var $img = $(this).children("img");

    if ($img) {
      $(this).css("background-image", "url('" + $img.attr("src") + "')");
      $img.hide();
    }
  });

  // carousels
  // $("#home-banner-carousel").owlCarousel({
  //   items: 1,

  //   margin: 0,

  //   dots: true,
  //   nav: false,
  //   // navText: ['‹','›'],

  //   // dotsContainer: '#home-banner-carousel-dots',

  //   loop: true
  // });

  $(".jarallax").jarallax({
    speed: 0.2
  });
});
