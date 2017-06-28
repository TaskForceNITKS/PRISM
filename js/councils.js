$(document).ready(function(){ 
  $("#sidenav").sideNav();
  $(document).scroll(function() { 
    var $nav = $('.navbar-fixed');
      $nav.find('nav').toggleClass('orange', $(this).scrollTop() > $('.dept-page-banner').height());
      $nav.find('nav').toggleClass('transparent', $(this).scrollTop() < $('.dept-page-banner').height());
  });
  loadCouncils();         
});

function loadCouncils() {
  var content = sc.content;
  for (var i = 0; i < content.length; i++) {
    var p = document.createElement('p');
    p.innerText = content[i];

    $('#sc-content').append(p);
  }

  content = hc.content;
  for (var i = 0; i < content.length; i++) {
    var p = document.createElement('p');
    p.innerText = content[i];

    $('#hc-content').append(p);
  }
}