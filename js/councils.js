  $(document).ready(function(){
     
      $("#sidenav").sideNav(); 
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
          model+='<p><span class="pres white-text" style="font-size:23px;"><b>President:</b></span><span class="con" >'+councils.president+'</span></p><br/>';
         
         model+='<div class="card det councilinfo-bg grey lighten-3 ">';
         
        
           model+='<div class="row">';
          model+='<div class="container black-text left-align"><span class="maj orange-text" style="font-size:23px;""><b>About Us :</b></span><p class="flow-text" style="font-size:23px;">'+councils.description+'</p></div><br/>';
          model+='<div class="container black-text left-align"><span class="majevents orange-text" style="font-size:23px;""><b>Major events :</b></span><p class="flow-text" style="font-size:23px;">'+councils.events+'</p></div><br/>';
         
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
        