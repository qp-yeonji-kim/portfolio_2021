$(document).ready(function () {
  var timer = 0;
  var scrollY;

  $('#aboutme').addClass('load');

  $(window).on('scroll', function () {
    clearTimeout(timer);

    timer = setTimeout(function () {
      scrollY = $(this).scrollTop();
      $('#aboutme .hide').each(function () {
        var cntY = $(this).offset().top - $(window).height() * 0.8;
        if (scrollY > cntY) {
          $(this).addClass('fadein');
        }
      });
    }, 50);
  });

});