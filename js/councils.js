  $(document).ready(function(){
     
      $("#sidenav").sideNav();
      $(document).scroll(function() { 
        var $nav = $('.navbar-fixed');
        $nav.find('nav').toggleClass('orange', $(this).scrollTop() > $nav.height());
        $nav.find('nav').toggleClass('transparent', $(this).scrollTop() < $nav.height());
      });
      load();
      load1();
         
    });
   function get_model(councils){
          var model=" ";
          model+='<div class="container container-main">';
          model+='<div class="councilinfo"><div class="card center-align ">';
          
           
           
           model+='<div class="card-content orange">'
          
          model+='<span class="card-title "><h4><b><i>'+councils.name+' </h3></b></i></span>';
          model+='<img src="'+councils.image+'"class="responsive-img " style="height:400px;">';
          model+='<p><b>President :</b><span class="con" >'+councils.president+'</span></p><br/>';
         
         model+='<div class="card det councilinfo-bg grey ">';
         
        
           model+='<div class="row">';
          model+='<div class="container black-text left-align"><p class="flow-text" style="font-size:23px;">'+councils.description+'</p></div><br/>';
          model+='<div class="container black-text left-align"><span class="majevents"><p class="flow-text" style="font-size:23px;">Major events :</span>'+councils.events+'</p></div><br/>';
         
          model+='</div></div></div></div></div>';
          return model;

        }

        
        function load(){
          var council_container=document.getElementById("studentview");
          var council_row;
          council_container.innerHTML += '<div id="council-row"></div>';
          council_row = document.getElementById('council-row');
          for(var i=0;i<studcouncil.length;i++){
          var perclub = studcouncil[i];
         council_row.innerHTML += get_model(perclub);

          }
        }
        function load1(){
          var council_container=document.getElementById("hostelview");
          var council_row;
          
          council_container.innerHTML += '<div id="council-row1"></div>';
          council_row = document.getElementById('council-row1');
          for(var i=0;i<hostelcouncil.length;i++){
       
       
          var perclub = hostelcouncil[i];
         council_row.innerHTML += get_model(perclub);

          }

      
      }
        