$(document).ready(function () {
  var projectSlide = new Swiper('#project-project .project-slide', {
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

  var waving = anime({
    targets: '.wave',
    d: [{
        value: 'M0,192L60,186.7C120,181,240,171,360,181.3C480,192,600,224,720,234.7C840,245,960,235,1080,224C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
      },
      {
        value: 'M0,64L60,74.7C120,85,240,107,360,133.3C480,160,600,192,720,181.3C840,171,960,117,1080,96C1200,75,1320,85,1380,90.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
      },
      {
        value: 'M0,64L60,90.7C120,117,240,171,360,170.7C480,171,600,117,720,101.3C840,85,960,107,1080,117.3C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
      },
      {
        value: 'M0,96L60,112C120,128,240,160,360,149.3C480,139,600,85,720,85.3C840,85,960,139,1080,165.3C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
      },
    ],
    duration: 2000,
    easing: 'linear',
    loop: true,
    autoplay: true
  });

  $('#project-list').addClass('load');
  $('.tooltip, .site-pic, .site-code').attr('tabindex', 0);

  $('.tooltip').on('click', function () {
    $(this).toggleClass('tip');
  });

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

  $('.site-pic').on('click', function () {
    $(this).toggleClass('view');
  })

  $('.site-pic').on('keydown', function (e) {
    if (e.keyCode === 13) $(this).trigger('click');
  });
});