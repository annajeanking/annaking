jQuery(document).ready(function() {
  "use strict";

  /* Responsive Menu */
  $(".menu-button").on("click", function() {
    $(this).toggleClass("active");
    $(".responsive-menu").toggleClass("slidein");
    $(".theme-layout").toggleClass("stop");
    return false;
  });

  /* Home Page Slider */
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    autoHeight: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: true
  });

  /* Responsive Menu Dropdown */
  $(".mobile-menu ul").parent().addClass("menu-item-has-children");
  $(".mobile-menu li.menu-item-has-children > a").on("click", function() {
    $(this).parent().toggleClass("active").siblings().removeClass("active");
    $(this).next("ul").slideToggle();
    $(this).parent().siblings().find("ul").slideUp();
    return false;
  });

  /* Search Icon */
  $(".search-icon i").on("click", function() {
    $(this).toggleClass("active");
    $(".search-box").toggleClass("searchon");
    return false;
  });

}); /*=== Document.Ready Ends Here ===*/