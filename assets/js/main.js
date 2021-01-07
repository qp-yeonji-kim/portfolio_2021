$(document).ready(function () {
  $('#main-cnt .link a').on('click', function (e) {
    var $onA = $(this);
    e.preventDefault();
    $onA.parent().addClass('bigger');
    setTimeout(function () {
      if ($onA.parent().is('#intro')) {
        location.href = 'introduce/me.html';
      } else {
        location.href = 'project/project.html';
      }
    }, 1000);
  });
});