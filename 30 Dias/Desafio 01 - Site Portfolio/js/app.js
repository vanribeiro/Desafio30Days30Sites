'use strict';

jQuery(function () {
 jQuery(window).scroll(function () {
  if (jQuery(this).scrollTop() > 300) {
    $("#menu").css({
        "background-color": "#252525",
    });
    $("#menu a").css({
        "color" : "#f5f5f5"
    });
  } else {
    $(".menu-top").css({
        "background-color" : "#1a1a1a00"
    });

    $("#menu a").css({
        "color" : "#1a1a1a"
    });
  }
 });
});