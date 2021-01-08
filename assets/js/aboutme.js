$(document).ready(function () {
  var timer = 0;
  var scrollY;

  $(window).on('scroll', function () {
    clearTimeout(timer);

    timer = setTimeout(function () {
      scrollY = $(this).scrollTop();
      $('#aboutme .my_feature').each(function () {
        var cntY = $(this).offset().top;
        if (scrollY < cntY) $(this).stop().animate({
          'opacity': 0,
          'top': 40
        });
        else $(this).stop().animate({
          'opacity': 1,
          'top': 0
        });
      });
    }, 200);
  });

});