$(function() {
  $('#sidenav').sideNav();
  $('.slider').slider({interval: 3000, height: 450});
  $("#sidenav").sideNav();
  $(document).scroll(function() { 
    var $nav = $('.navbar-fixed');
    $nav.find('nav').toggleClass('orange', $(this).scrollTop() > $('.fests-page-banner').height());
    $nav.find('nav').toggleClass('transparent', $(this).scrollTop() < $('.fests-page-banner').height());
    });
  loadfests();
});

function loadfests() {

  for (var i = 0; i < fests.length; i++) {
    if(i%2 === 0) {
      var row = document.createElement('div');
      row.className = "row";
      row.id = "fest-row-" + i/2;

      $('#festview').append(row);
    }
    fest = fests[i];
    var holder = document.createElement('a');
    holder.className = "col s12 m6";
    holder.setAttribute('href', "/fests.html?id=" + fest.id);

    var card = document.createElement('div');
    card.className = "card center-align hoverable";
    card.style = "height: 390px;"

    var image = document.createElement('img');
    image.src = "img/fests/" + fest.image;
    image.className = "card-image";
    image.style = "height: 300px; width: auto;"

    card.appendChild(image);

    card.innerHTML += "<br>";

    var title = document.createElement('h3');
    title.className = "fest-name";
    title.innerText = fest.name;

    card.appendChild(title);
    holder.appendChild(card);

    $('#fest-row-'+ parseInt(i/2)).append(holder);
  }
}