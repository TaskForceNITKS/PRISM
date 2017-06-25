 $(document).ready(function(){
  $("#sidenav").sideNav(); 
  // load();
    $(document).scroll(function() { 
    var $nav = $('.navbar-fixed');
        $nav.find('nav').toggleClass('orange', $(this).scrollTop() > $nav.height());
      $nav.find('nav').toggleClass('transparent', $(this).scrollTop() < $nav.height());
    });
});

// function get_model(clubs){
//   var model=" ";
//   model+='<div class="container container-main">';
//   model+='<div class="clubinfo"><div class="card center-align ">';
//   model+='<div class="card-image waves-effect waves-block waves-light">';
//   model+='<img src="img/tech_clubs/'+clubs.image+'"class="responsive-img activator" style="height:400px;">';
//   model+='</div>';
//   model+='<div class="card-content orange">'

//   model+='<span class="card-title activator"><h4><b><i>'+clubs.name+' </h3></b></i><i class="medium material-icons right">info_outline</i></span>';
//   model+='<p><b>Convenor :</b><span class="con" >'+clubs.convenor+'</span></p><br/>';
//   model+='</div>';
//   model+='<div class="card-reveal det clubinfo-bg orange ">';

//   model+='<span class="card-title grey-text text-darken-4">More about us<i class="material-icons right">close</i></span>';
//   model+='<div class="row">';
//   model+='<div class="container white-text left-align">'+clubs.description+'</div><br/>';
//   model+='<div class="container white-text left-align"><span class="majevents">Major events :</span>'+clubs.events+'</div><br/>';
//   model+='<div class="container white-text left-align"><span class="clubproj">Major clubs:</span>'+clubs.projects+'</div>';
//   model+='</div></div></div></div></div></div>';
//   return model;

// }

// function get_modelc(clubs){
//   var model=" ";
//   model+='<div class="container container-main">';
//   model+='<div class="clubinfo"><div class="card center-align ">';
//   model+='<div class="card-image waves-effect waves-block waves-light">';
//   model+='<img src="'+clubs.image+'"class="responsive-img activator" style="height:400px;">';
//   model+='</div>';
//   model+='<div class="card-content orange">'

//   model+='<span class="card-title activator"><h4><b><i>'+clubs.name+' </h3></b></i><i class="medium material-icons right">info_outline</i></span>';
//   model+='<p><b>Convenor :</b><span class="con" >'+clubs.convenor+'</span></p><br/>';
//   model+='</div>';
//   model+='<div class="card-reveal det clubinfo-bg orange ">';

//   model+='<span class="card-title grey-text text-darken-4">More about us<i class="material-icons right">close</i></span>';
//   model+='<div class="row">';
//   model+='<div class="container white-text left-align">'+clubs.description+'</div><br/>';
//   model+='<div class="container white-text left-align"><span class="majevents">Major events :</span>'+clubs.events+'</div><br/>';

//   model+='</div></div></div></div></div></div>';
//   return model;

// }

function init(){
  // var club_container=document.getElementById("techClubs");
  // var techClubRow;
  // club_container.innerHTML="<center><h2>Technical Clubs</center></h2>";

  // club_container.innerHTML += '<div id="tclub-row"></div>';
  // techClubRow = document.getElementById('tclub-row');
  // for(var i=0;i<techClubs.length;i++){
  //   var perclub = techClubs[i];
  //   techClubRow.innerHTML += get_model(perclub);
  // }

  // var club_container=document.getElementById("culturalClubs");
  // var culturalClubRow;

  // club_container.innerHTML="<center><h2>Cultural Clubs</center></h2>";

  // club_container.innerHTML += '<div id="cclub-row"></div>';
  // culturalClubRow = document.getElementById('cclub-row');
  // for(var i=0;i<culturalClubs.length;i++){
  //   var perclubc = culturalClubs[i];
  //   culturalClubRow.innerHTML += get_modelc(perclubc);

  // }
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
    image.src = "img/tech_clubs/" + culturalClubs[i].image;
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

    $('#cultural-row-'+parseInt(i/2)).append(holder);
  }
}

function loadTechClubs() {
   for (var i = 0; i < culturalClubs.length; i++) {
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

function displayClubInfo() {
  var id = $(this).attr('id');
  var type = id.substr(0, id.lastIndexOf('-'));
  var index = id.substr(id.lastIndexOf('-') + 1);
  console.log(type+index);
  switch(type){
    case "tech":
      club = techClubs[index];
    case "cultural":
      club = culturalClubs[index];
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
  img.addEventListener('load', function(){
    var vibrant = new Vibrant(img);
    var swatches = vibrant.swatches();
    bg_color = swatches['Vibrant'].getHex();
  });
  // Card
  cardw = $(this).width();
  cardh = $(this).height();
  cardt = $(this).offset().top - $(window).scrollTop();
  cardl = $(this).offset().left;
  cardTop = cardt;
  cardLeft = cardl;
  var card = document.createElement('div');
  card.className = "club-card";
  var card_temp = document.createElement('div');
  card_temp.className = "club-card-temp";
  // Card contents
  container = document.createElement('div');
  container.className = "container card-content";
  heading = document.createElement('h3');
  heading.className = "project-card-title";
  heading.innerHTML = club.name;
  details = document.createElement('div');
  details.className = "club-card-details container";
  
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
        backgroundColor: bg_color,
        zIndex: 120,
        overflowX: 'auto',
        overflowY: 'scroll'
      });
      $('.club-card-temp').css({
        position: 'absolute',
        minHeight: '100vh',
        height: 'auto',
        width: '90vw',
        left: '5vw',
        top: '30vh',
        backgroundColor: '#fff'
      });
      $('.club-img').css({
        position: 'absolute',
        height: imgh,
        width: imgw,
        left: '10vw',
        top: '10vh',
        zIndex: 3
      });
      
    });
  }, 10);

  setTimeout(function() {
    $('.club-details-content').append(card);
    $('.club-card-temp').remove();
    $('.club-card').append(container);
    $('.card-content').append(heading);
    $('.card-content').append(details); 
    $('.club-card-details').html(detail_cont);
  
    
  }, 300);  
  setTimeout(function(){
    h = $('.club-card-details').height() + $('.club-card-title').height() + 220 + 'px';
    $('.club-card-details').css('display', 'inherit');
    $('.club-card-title').css('display', 'inherit');
    $('.club-card').css({
      position: 'absolute',
      height: h,
      width: '90vw',
      left: '5vw',
      top: '30vh',
      backgroundColor: '#fff'
    });
    $('.close-button').on('click', closeInfo);
  }, 300);
}

function closeInfo() {
  $(function(){
    $('.club-card-title').css('display', 'none');
    $('.club-card-details').css('display', 'none');
    $('.club-details').css('backgroundColor', 'rgba(0, 0, 0, 0)')
    h = $('.hoverable').height();
    w = $('.hoverable').width();

    $('.club-img').css({
      position: 'absolute',
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
      $('.header-fixed').css('opacity', '1');
    }, 300);
  });
}