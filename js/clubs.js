 $(document).ready(function(){
  $('.slider').slider({interval: 3000, height: 450});
  $("#sidenav").sideNav(); 
  // load();
});

function get_model(clubs){
  var model=" ";
  model+='<div class="container container-main">';
  model+='<div class="clubinfo"><div class="card center-align ">';
  model+='<div class="card-image waves-effect waves-block waves-light">';
  model+='<img src="img/tech_clubs/'+clubs.image+'"class="responsive-img activator" style="height:400px;">';
  model+='</div>';
  model+='<div class="card-content orange">'

  model+='<span class="card-title activator"><h4><b><i>'+clubs.name+' </h3></b></i><i class="medium material-icons right">info_outline</i></span>';
  model+='<p><b>Convenor :</b><span class="con" >'+clubs.convenor+'</span></p><br/>';
  model+='</div>';
  model+='<div class="card-reveal det clubinfo-bg orange ">';

  model+='<span class="card-title grey-text text-darken-4">More about us<i class="material-icons right">close</i></span>';
  model+='<div class="row">';
  model+='<div class="container white-text left-align">'+clubs.description+'</div><br/>';
  model+='<div class="container white-text left-align"><span class="majevents">Major events :</span>'+clubs.events+'</div><br/>';
  model+='<div class="container white-text left-align"><span class="clubproj">Major Projects:</span>'+clubs.projects+'</div>';
  model+='</div></div></div></div></div></div>';
  return model;

}

function get_modelc(clubs){
  var model=" ";
  model+='<div class="container container-main">';
  model+='<div class="clubinfo"><div class="card center-align ">';
  model+='<div class="card-image waves-effect waves-block waves-light">';
  model+='<img src="'+clubs.image+'"class="responsive-img activator" style="height:400px;">';
  model+='</div>';
  model+='<div class="card-content orange">'

  model+='<span class="card-title activator"><h4><b><i>'+clubs.name+' </h3></b></i><i class="medium material-icons right">info_outline</i></span>';
  model+='<p><b>Convenor :</b><span class="con" >'+clubs.convenor+'</span></p><br/>';
  model+='</div>';
  model+='<div class="card-reveal det clubinfo-bg orange ">';

  model+='<span class="card-title grey-text text-darken-4">More about us<i class="material-icons right">close</i></span>';
  model+='<div class="row">';
  model+='<div class="container white-text left-align">'+clubs.description+'</div><br/>';
  model+='<div class="container white-text left-align"><span class="majevents">Major events :</span>'+clubs.events+'</div><br/>';

  model+='</div></div></div></div></div></div>';
  return model;

}

function init(){
  var club_container=document.getElementById("techClubs");
  var techClubRow;
  club_container.innerHTML="<center><h2>Technical Clubs</center></h2>";

  club_container.innerHTML += '<div id="tclub-row"></div>';
  techClubRow = document.getElementById('tclub-row');
  for(var i=0;i<techClubs.length;i++){
    var perclub = techClubs[i];
    techClubRow.innerHTML += get_model(perclub);
  }

  var club_container=document.getElementById("culturalClubs");
  var culturalClubRow;

  club_container.innerHTML="<center><h2>Cultural Clubs</center></h2>";

  club_container.innerHTML += '<div id="cclub-row"></div>';
  culturalClubRow = document.getElementById('cclub-row');
  for(var i=0;i<culturalClubs.length;i++){
    var perclubc = culturalClubs[i];
    culturalClubRow.innerHTML += get_modelc(perclubc);

  }

}
