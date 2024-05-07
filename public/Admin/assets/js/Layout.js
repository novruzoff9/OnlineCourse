$('#menubtn').click(function () {
    $('aside').toggleClass('mini-show');
    $('header').toggleClass('show-more');
    $('#content').toggleClass('show-more');
  });
  $('#notficiationsbtn').click(function () {
    $('#notficiations-menu').toggle();
  });
  $('#user-data').click(function () {
    $('#profile-menu').toggle();
  });