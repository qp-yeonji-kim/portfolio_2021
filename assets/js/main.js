$(document).ready(function () {
  $('#main-cnt .link a').on('click', function (e) {
    e.preventDefault();
    $(this).parent().addClass('bigger').siblings('.mysite').fadeOut();
    setTimeout(function () {
      if ($(this).parent().is('#intro')) {
        location.href = 'introduce/me.html';
      } else {
        location.href = 'project/project.html';
      }
    }, 1000);
  });
  
});