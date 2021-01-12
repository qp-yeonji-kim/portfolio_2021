$(document).ready(function () {
  $('#project-list').addClass('load');
  $('.site-pic, .site-code').attr('tabindex', 0);
  $('.site-code').on({
    click: function () {
      var $viewDiv = $(this);
      var $siblingDiv = $(this).siblings('.site-code, .site-pic');
      if (!$(this).is('.view')) {
        
        $siblingDiv.removeClass('view').stop().animate({width: 0}, 500, function(){
          $(this).hide();
        });
        setTimeout(function(){
          $viewDiv.addClass('view');
        }, 90);

      } else {
        $(this).removeClass('view');
        setTimeout(function(){
          $siblingDiv.show().animate({width: 448}, 700);
        }, 90);
      }
    },
    hover: function () {

    }
  });
  $('.site-pic').on({
    click: function () {
      $(this).toggleClass('view');
    }
  })
  /* 
  -함수 바깥쪽에 만들고
  안쪽에서 함수 소환하는데
  함수에 지역변수를 미리 써도 동작하는지?   
  */
});
