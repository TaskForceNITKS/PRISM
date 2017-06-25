 $(document).ready(function(){
    $('.slider').slider({interval: 3000, height: 450});
    $("#sidenav").sideNav(); 
    load();
    load1();
       
  });
 function get_model(clubs){
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
      function load(){
        var club_container=document.getElementById("clubview");
        var club_row;
        club_container.innerHTML="<center><h2>Technical Clubs</center></h2>";
        
        club_container.innerHTML += '<div id="club-row"></div>';
        club_row = document.getElementById('club-row');
        for(var i=0;i<techclubs.length;i++){
     
     
        var perclub = techclubs[i];
        club_row.innerHTML += get_model(perclub);

        }

    
      }
      function load1(){
        var club_container=document.getElementById("cclubview");
        var cclub_row;

        club_container.innerHTML="<center><h2>Cultural Clubs</center></h2>";
        
        club_container.innerHTML += '<div id="cclub-row"></div>';
        cclub_row = document.getElementById('cclub-row');
        for(var i=0;i<cultclubs.length;i++){
     
     
        var perclubc = cultclubs[i];
        cclub_row.innerHTML += get_modelc(perclubc);

        }
    
      }