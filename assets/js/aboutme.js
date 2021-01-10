$(document).ready(function () {
  var timer = 0;
  var scrollY;

  $('#aboutme').removeClass('load');

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

  $('#main-project').on('mousemove', function (e) {
    if (e.pageX < $(window).width() / 2) {
      $('#main-project').addClass('left');
    } else {
      $('#main-project').removeClass('left');
    }
  });

  $('#main-project .link a').on('click', function (e) {
    e.preventDefault();
    var $clickedA = $(this);
    $(this).parent().addClass('click');
    setTimeout(function () {
      if ($clickedA.parent().hasClass('link-main'))
        location.href = '../index.html';
      else if ($clickedA.parent().hasClass('link-project'))
        location.href = '../project/project.html';
    }, 1000);
  });


});