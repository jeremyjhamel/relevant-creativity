$(document).ready(function() {
  var menu = $('header[role=banner] nav ul');
  var menuToggle = $('header[role=banner] a.mobile-nav');

  $(menuToggle).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle(function(){
      if(menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  });
});
