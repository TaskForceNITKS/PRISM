$(document).ready(function(){ 
  $("#sidenav").sideNav();
  $(document).scroll(function() { 
    var $nav = $('.navbar-fixed');
    $nav.find('nav').toggleClass('orange', $(this).scrollTop() > $nav.height());
    $nav.find('nav').toggleClass('transparent', $(this).scrollTop() < $nav.height());
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