jQuery(function () {
 jQuery(window).scroll(function () {
  if (jQuery(this).scrollTop() > 400) {
   $("#menu").css('background-color', '#1a1a1a');
  } else {
   $("#menu").css('background-color', '#1a1a1a00');
  }
 });
});