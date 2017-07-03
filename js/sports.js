$(function() {
	$("#sidenav").sideNav(); 
	$(document).scroll(function() { 
		var $nav = $('.navbar-fixed');
		$nav.find('nav').toggleClass('orange', $(this).scrollTop() > $('.sports-page-banner').height());
		$nav.find('nav').toggleClass('transparent', $(this).scrollTop() < $('.sports-page-banner').height());
    });
	loadSports();
})

function loadSports() {
   for (var i = 0; i < sports.length; i++) {
    if(i%2===0) {
      var row = document.createElement('div');
      row.className = "row";
      row.id = "sport-row-" + i/2;

      $('#sports').append(row);
    }
    var holder = document.createElement('div');
    holder.className = "col s12 m6";

    var card = document.createElement('div');
    card.className = "card";

    var image = document.createElement('img');
    image.src = "img/sports/" + sports[i].image;
    image.className = "card-image";
    image.style = "width: 100%; height: auto"

    card.appendChild(image);

    var contents = document.createElement('div');
    contents.className = "card-contents";
    contents.style = "padding: 20px;"

    var title = document.createElement('span');
    title.className = "card-title";
    title.innerHTML = sports[i].title + "<br>";

    contents.appendChild(title);

    var con = document.createElement('span');
    con.innerText = "Captain: ";

    contents.appendChild(con);
    con.innerHTML += "<b>" + sports[i].captainName + "</b>";

    card.appendChild(contents);
    holder.appendChild(card);

    card.id = "sport-"+i;

    card.addEventListener('click', function() {
      displaySportInfo.bind(this).call();
    });

    $('#sport-row-'+parseInt(i/2)).append(holder);
  } 	
}

var cardTop, cardLeft, imgTop,imgLeft;

function displaySportInfo() {
  var id = $(this).attr('id');
  var index = id.substr(id.lastIndexOf('-') + 1);
  
  sport = sports[index];

  var body = document.createElement('div');
  body.className = 'sport-details';
  var contents = document.createElement('div');
  contents.className = "sport-details-content";
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
  img.className = "sport-img";

  // Card
  cardw = $(this).width();
  cardh = $(this).height();
  cardt = $(this).offset().top - $(window).scrollTop();
  cardl = $(this).offset().left;
  cardTop = cardt;
  cardLeft = cardl;
  var card = document.createElement('div');
  card.className = "sport-card z-depth-3";
  var card_temp = document.createElement('div');
  card_temp.className = "sport-card-temp";
  // Card contents
  container = document.createElement('div');
  container.className = "container card-content";
  heading = document.createElement('h3');
  heading.className = "sport-card-title row";
  heading.innerHTML = sport.title;
  details = document.createElement('div');
  details.className = "sport-card-details row flow-text";

  introduction = document.createElement('div');
  introduction.innerHTML = sport.introduction;

  description = document.createElement('div');
  description.innerHTML = sport.selectionProcedure;

  events = document.createElement('div');
  events.innerHTML = sport.competitions;

  projects = document.createElement('div');
  projects.innerHTML = sport.achievements;
  
  // card_temp = card;
  $('body').append(body);
  $('.sport-details').append(contents);
  $('.sport-details').append(close_b);

  $('.sport-details-content').append(img);
  $('.sport-details-content').append(card_temp);
  
  $('.sport-img').css({
    width: imgw,
    height: imgh,
    top: imgt,
    left: imgl,
    position: 'fixed'
  });
  $('.sport-card-temp').css({
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
      $('.sport-details').css({     
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
      $('.sport-card-temp').css({
        position: 'relative',
        // minHeight: '100vh',
        height: 'auto',
        width: '80vw',
        left: '10vw',
        // top: '30vh',
        backgroundColor: '#fff'
      });
      $('.sport-img').css({
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
    $('.sport-details-content').append(card);
    $('.sport-card-temp').remove();
    $('.sport-card').append(container);
    $('.card-content').append(heading);
    $('.card-content').append(details);
    $('.sport-card-details').append(introduction);
    $('.sport-card-details').append('<h5><b>Selection Procedure:</b></h5>'); 
    $('.sport-card-details').append(description);
    $('.sport-card-details').append('<h5><b>Events:</b></h5>');
    $('.sport-card-details').append(events);
    $('.sport-card-details').append('<h5><b>Projects:</b></h5>');
    $('.sport-card-details').append(projects);

  
    
  }, 400);
  setTimeout(function(){
    $('.sport-card-details').css('display', 'inherit');
    $('.sport-card-title').css('display', 'inherit');
    $('.sport-card').css({
      position: 'relative',
      height: 'auto',
      width: '80vw',
      left: '10vw',
      backgroundColor: '#fff'
    });
    $('.close-button').on('click', closeInfo);
  }, 400);
}

function closeInfo() {
  $(function(){
    $('.sport-card-title').css('display', 'none');
    $('.sport-card-details').css('display', 'none');
    $('.sport-details').css('backgroundColor', 'rgba(0, 0, 0, 0)')
    h = $('.card').height();
    w = $('.card').width();
    ih = $('.card-image').height();
    iw = $('.card-image').width();

    $('.sport-img').css({
      position: 'absolute',
      height: ih,
      width: iw,
      top: imgTop,
      left: imgLeft
    });
    $('.sport-card').css({
      position: 'absolute',
      left: cardLeft,
      top: cardTop,
      width: w,
      height: h
    });
    setTimeout(function(){
      $('.sport-details-content').remove();
      $('.sport-details').remove();
      $('body').css('overflow','auto');
      $('nav').css('display', 'inherit');
    }, 300);
  });
}