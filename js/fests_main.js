$(function() {
  $('#sidenav').sideNav();
  $('.slider').slider({interval: 3000, height: 450});
  $("#sidenav").sideNav();
  $(document).scroll(function() { 
    var $nav = $('.navbar-fixed');
        $nav.find('nav').toggleClass('orange', $(this).scrollTop() > $nav.height());
      $nav.find('nav').toggleClass('transparent', $(this).scrollTop() < $nav.height());
    });
  loadfests();
});

function loadfests() {

  for (var i = 0; i < fests.length; i++) {
    if(i%2 === 0) {
      var row = document.createElement('div');
      row.className = "row";
      row.id = "fest-row-" + i/2;
      row.setAttribute("style","padding-top:30px;");
      $('#festview').append(row);
    }
    fest = fests[i];
    var holder = document.createElement('div');
    holder.className = "col s12 m4 offset-m2";
    holder.setAttribute("style","padding-top:45px;");

    var linkWrapper = document.createElement('a');
    linkWrapper.setAttribute('href', 'fests.html?id=' + fest.id);

    var container = document.createElement('div');
    container.className = "fest-card z-depth-3";
    container.setAttribute("style","width:280px; height:280px;");

    var image = document.createElement('img');
    image.className = "fest-image";
    image.src = "img/fests/"+fest.image;
    image.setAttribute("style","width:280px; height:280px;");
    image.setAttribute("media","only screen and (max-width : 1024px){.image{height:200px;}}")
    
    var title = document.createElement('div');
    title.className = "fest-title";
    title.innerText = fest.name;
    title.setAttribute("style","color:orange; font-size:30px; background: black;")

    container.appendChild(image);
    container.appendChild(title);
    linkWrapper.appendChild(container);
    holder.appendChild(linkWrapper);

    $('#fest-row-'+ parseInt(i/2)).append(holder);
  }
}