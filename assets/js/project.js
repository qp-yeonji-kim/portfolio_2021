$(document).ready(function () {
  $('#project-list').addClass('load');
  $('.tooltip, .site-pic, .site-code').attr('tabindex', 0);

  $('.tooltip').on('click', function(){
    $(this).toggleClass('tip');
  });

  $('.site-code').on('click', function () {
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
  });

  $('.site-code').on('keydown', function(e){
    if(e.keyCode === 13) $(this).trigger('click');
  });
  
  $('.site-pic').on('click', function () {
      $(this).toggleClass('view');
  })

  $('.site-pic').on('keydown', function(e){
    if(e.keyCode === 13) $(this).trigger('click');
  });
});
