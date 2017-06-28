 $(document).ready(function(){
  $("#sidenav").sideNav(); 
  // load();
    $(document).scroll(function() { 
    var $nav = $('.navbar-fixed');
    $nav.find('nav').toggleClass('orange', $(this).scrollTop() > $('.club-page-banner').height());
    $nav.find('nav').toggleClass('transparent', $(this).scrollTop() < $('.club-page-banner').height());
    });
});

function init(){
  loadCulturalClubs();
  loadTechClubs();
}

function loadCulturalClubs() {
  for (var i = 0; i < culturalClubs.length; i++) {
    if(i%2===0) {
      var row = document.createElement('div');
      row.className = "row";
      row.id = "cultural-row-" + i/2;

      $('#culturalClubs').append(row);
    }
    var holder = document.createElement('div');
    holder.className = "col s12 m6";

    var card = document.createElement('div');
    card.className = "card";

    var image = document.createElement('img');
    image.src = "img/cult_clubs/" + culturalClubs[i].image;
    image.className = "card-image";
    image.style = "width: 100%; height: auto"

    card.appendChild(image);

    var contents = document.createElement('div');
    contents.className = "card-contents";
    contents.style = "padding: 20px;"

    var title = document.createElement('span');
    title.className = "card-title";
    title.innerHTML = culturalClubs[i].name + "<br>";

    contents.appendChild(title);

    var con = document.createElement('span');
    con.innerText = "Convener: ";

    contents.appendChild(con);
    con.innerHTML += "<b>" + culturalClubs[i].convenor + "</b>";

    card.appendChild(contents);
    holder.appendChild(card);

    card.id = "cultural-"+i;


    card.addEventListener('click', function() {
      displayClubInfo.bind(this).call();
    });

    $('#cultural-row-'+parseInt(i/2)).append(holder);
  }
}

function loadTechClubs() {
   for (var i = 0; i < techClubs.length; i++) {
    if(i%2===0) {
      var row = document.createElement('div');
      row.className = "row";
      row.id = "tech-row-" + i/2;

      $('#techClubs').append(row);
    }
    var holder = document.createElement('div');
    holder.className = "col s12 m6";

    var card = document.createElement('div');
    card.className = "card";

    var image = document.createElement('img');
    image.src = "img/tech_clubs/" + techClubs[i].image;
    image.className = "card-image";
    image.style = "width: 100%; height: auto"

    card.appendChild(image);

    var contents = document.createElement('div');
    contents.className = "card-contents";
    contents.style = "padding: 20px;"

    var title = document.createElement('span');
    title.className = "card-title";
    title.innerHTML = techClubs[i].name + "<br>";

    contents.appendChild(title);

    var con = document.createElement('span');
    con.innerText = "Convener: ";

    contents.appendChild(con);
    con.innerHTML += "<b>" + techClubs[i].convenor + "</b>";

    card.appendChild(contents);
    holder.appendChild(card);

    card.id = "tech-"+i;

    card.addEventListener('click', function() {
      displayClubInfo.bind(this).call();
    });

    $('#tech-row-'+parseInt(i/2)).append(holder);
  } 
}

var cardTop, cardLeft, imgTop,imgLeft;

function displayClubInfo() {
  var id = $(this).attr('id');
  var type = id.substr(0, id.lastIndexOf('-'));
  var index = id.substr(id.lastIndexOf('-') + 1);
  switch(type){
    case "tech":
      club = techClubs[index];
      break;
    case "cultural":
      club = culturalClubs[index];
      break;
  }
  
  var body = document.createElement('div');
  body.className = 'club-details';
  var contents = document.createElement('div');
  contents.className = "club-details-content";
  var close_b = document.createElement('i');
  close_b.className = "material-icons close-button";
  close_b.innerHTML = "arrow_back";
  // Image
  imgw = $(this).find('img').width();
  imgh = $(this).find('img').height();
  imgt = $(this).find('img').offset().top - $(window).scrollTop();
  imgl = $(this).find('img').offset().left;
  imgLeft = imgl;
  imgTop = imgt;
  var bg_color;
  var img = document.createElement('img');
  img.src = $(this).find('img').attr('src');
  img.className = "club-img";

  // Card
  cardw = $(this).width();
  cardh = $(this).height();
  cardt = $(this).offset().top - $(window).scrollTop();
  cardl = $(this).offset().left;
  cardTop = cardt;
  cardLeft = cardl;
  var card = document.createElement('div');
  card.className = "club-card z-depth-3";
  var card_temp = document.createElement('div');
  card_temp.className = "club-card-temp";
  // Card contents
  container = document.createElement('div');
  container.className = "container card-content";
  heading = document.createElement('h3');
  heading.className = "club-card-title row";
  heading.innerHTML = club.name;
  details = document.createElement('div');
  details.className = "club-card-details row flow-text";

  description = document.createElement('div');
  description.innerHTML = club.description;

  events = document.createElement('div');
  events.innerHTML = club.events;

  projects = document.createElement('div');
  projects.innerHTML = club.projects;
  
  // card_temp = card;
  $('body').append(body);
  $('.club-details').append(contents);
  $('.club-details').append(close_b);

  $('.club-details-content').append(img);
  $('.club-details-content').append(card_temp);
  
  $('.club-img').css({
    width: imgw,
    height: imgh,
    top: imgt,
    left: imgl,
    position: 'fixed'
  });
  $('.club-card-temp').css({
    width: cardw,
    minHeight: cardh,
    top: cardt,
    left: cardl,
    position: 'fixed',
    backgroundColor: '#fff'
  });
  $('body').css({
    overflow: 'hidden'
  });
  $('.header-fixed').css('opacity', '0');
  setTimeout(function() {
    $(function() {
      $('.club-details').css({     
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(0deg, #ef6c00, #ff9800) fixed',
        zIndex: 120,
        overflowX: 'auto',
        overflowY: 'scroll'
      });
      $('.club-card-temp').css({
        position: 'relative',
        // minHeight: '100vh',
        height: 'auto',
        width: '80vw',
        left: '10vw',
        // top: '30vh',
        backgroundColor: '#fff'
      });
      $('.club-img').css({
        position: 'relative',
        height: 'auto',
        width: '70vw',
        left: '15vw',
        top: '10vh',
        marginBottom: '20px',
        zIndex: 3
      });
      
    });
    $('nav').css('display', 'none');
  }, 10);

  setTimeout(function() {
    $('.club-details-content').append(card);
    $('.club-card-temp').remove();
    $('.club-card').append(container);
    $('.card-content').append(heading);
    $('.card-content').append(details); 
    $('.club-card-details').append(description);
    $('.club-card-details').append('<h5><b>Events:</b></h5>');
    $('.club-card-details').append(events);
    $('.club-card-details').append('<h5><b>Projects:</b></h5>');
    $('.club-card-details').append(projects);

  
    
  }, 400);
  setTimeout(function(){
    h = $('.club-card-details').height() + $('.club-card-title').height() + 220 + 'px';
    $('.club-card-details').css('display', 'inherit');
    $('.club-card-title').css('display', 'inherit');
    $('.club-card').css({
      position: 'relative',
      height: h,
      width: '80vw',
      left: '10vw',
      backgroundColor: '#fff'
    });
    $('.close-button').on('click', closeInfo);
  }, 400);
}

function closeInfo() {
  $(function(){
    $('.club-card-title').css('display', 'none');
    $('.club-card-details').css('display', 'none');
    $('.club-details').css('backgroundColor', 'rgba(0, 0, 0, 0)')
    h = $('.card').height();
    w = $('.card').width();
    ih = $('.card-image').height();
    iw = $('.card-image').width();

    $('.club-img').css({
      position: 'absolute',
      height: ih,
      width: iw,
      top: imgTop,
      left: imgLeft
    });
    $('.club-card').css({
      position: 'absolute',
      left: cardLeft,
      top: cardTop,
      width: w,
      height: h
    });
    setTimeout(function(){
      $('.club-details-content').remove();
      $('.club-details').remove();
      $('body').css('overflow','auto');
      $('nav').css('display', 'inherit');
    }, 300);
  });
}