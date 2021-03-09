$(document).ready(function () {
  var projectSlide = new Swiper('#project-project .project-slide', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // 파도 움직임
  var waving = anime({
    targets: '.wave',
    d: [{
        value: 'M0,160L48,160C96,160,192,160,288,144C384,128,480,96,576,101.3C672,107,768,149,864,144C960,139,1056,85,1152,69.3C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
      },
      {
        value: 'M0,160L48,170.7C96,181,192,203,288,176C384,149,480,75,576,53.3C672,32,768,64,864,101.3C960,139,1056,181,1152,208C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
      },
      {
        value: 'M0,192L48,160C96,128,192,64,288,69.3C384,75,480,149,576,181.3C672,213,768,203,864,186.7C960,171,1056,149,1152,144C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
      },
      {
        value: 'M0,160L48,181.3C96,203,192,245,288,229.3C384,213,480,139,576,106.7C672,75,768,85,864,106.7C960,128,1056,160,1152,192C1248,224,1344,256,1392,272L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
      },
    ],
    duration: 4000,
    easing: 'linear',
    loop: true,
    autoplay: true
  });

  $('#project-list').addClass('load');
  $('.tooltip, .site-pic, .site-code').attr('tabindex', 0);

  $('.tooltip').on('click', function () {
    $(this).toggleClass('tip');
  });

  // 이미지 clip도형 나타내기
  $('.site-pic').on('click', function () {
    $(this).toggleClass('view');
  })

  $('.site-pic').on('keydown', function (e) {
    if (e.keyCode === 13) $(this).trigger('click');
  });

  // 코드 부가 설명
  if ($(window).width() > 600) {
    $('.site-code').on('click', function () {
      var $viewDiv = $(this);
      var $siblingDiv = $(this).siblings('.site-code, .site-pic');
      if (!$(this).is('.view')) {
        $siblingDiv.removeClass('view').stop().animate({
          width: 0
        }, 500, function () {
          $(this).hide();
        });
        setTimeout(function () {
          $viewDiv.addClass('view');
        }, 90);

      } else {
        $(this).removeClass('view');
        setTimeout(function () {
          $siblingDiv.show().animate({
            width: 448
          }, 700);
        }, 90);
      }
    });

    $('.site-code').on('keydown', function (e) {
      if (e.keyCode === 13) $(this).trigger('click');
    });
  }
});