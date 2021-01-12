$(document).ready(function () {
  $('#project-list').addClass('load');
  $('.site-pic, .site-code').attr('tabindex', 0);
  $('.site-code').on({
    click: function () {
      if ($(this).not('.view')) {
        var $clickDiv = $(this);
        $(this).addClass('view').siblings('.site-code, .site-pic').removeClass('view').stop().animate({width: 0}, 500, function(){
          $(this).hide();
        });
      } else {
        $(this).removeClass('view').siblings('.site-code, .site-pic').stop().animate({opacity: 1}, 1000, function(){
          $(this).show();
          $clickDiv.removeClass('view');
        });
      }
    },
    hover: function () {

    }
  });
  $('.site-pic').on({
    click: function () {
      alert();
    }
  })
  /* 
  -tab-index만 주면 바로 focus동작할 수 있을까?
  -함수 바깥쪽에 만들고
  안쪽에서 함수 소환하는데
  함수에 지역변수를 미리 써도 동작하는지?   
  */
});
