$(document).ready(function(){ 
  $("#sidenav").sideNav();
  $(document).scroll(function() { 
    var $nav = $('.navbar-fixed');
      $nav.find('nav').toggleClass('orange', $(this).scrollTop() > $('.council-page-banner').height());
      $nav.find('nav').toggleClass('transparent', $(this).scrollTop() < $('.council-page-banner').height());
  });
  $(".dropdown-button").dropdown();
  $('.dropdown-button').dropdown({
      hover: true, // Activate on hover
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
    }
  );
  loadMembers();
  loadCouncils();         
});

function loadMembers(){
  for (var i = 0; i < sc_team.length; i++) {
    member = sc_team[i];
    var container = document.createElement('div');
    container.className = "member-container col s12 m6";

    var image = document.createElement('img');
    image.src = "img/sc/" + member.image;
    image.className = "circle responsive-img member-image";

    container.appendChild(image);

    var name = document.createElement('div');
    name.className = "member-name";
    name.innerText = member.name;

    container.appendChild(name);

    var description = document.createElement('div');
    description.className = "member-description";
    description.innerText = member.description;
    description.setAttribute('style', 'text-align:center');

    container.appendChild(description);

    var link = document.createElement('a');
    link.className = 'member-link';
    link.setAttribute('href', member.email);
    link.append(member.email)
     
    container.appendChild(link);

    $('#sc-team-container').append(container);
  }

}

function loadCouncils() {

  // Student Council begins here!
  var content = sc.content;
  for (var i = 0; i < content.length; i++) {
    var p = document.createElement('p');
    p.innerText = content[i];

    $('#sc-content').append(p);
  }

  var link = document.createElement('a');
  link.className = 'member-link';
  link.setAttribute('href', sc.fb);

  var icon = document.createElement('img');
  icon.src = "img/bg-fb.png";
  icon.className = "circle img-responsive";

  link.appendChild(icon);
  $('#sc-links').append(link);

  var link = document.createElement('a');
  link.className = 'member-link';
  link.setAttribute('href', sc.mail);

  var icon = document.createElement('img');
  icon.src = "img/bg-mail.png";
  icon.className = "circle img-responsive";

  link.appendChild(icon);
  $('#sc-links').append(link);


  // Hostel Council begins here!
  content = hc.content;
  for (var i = 0; i < content.length; i++) {
    var p = document.createElement('p');
    p.innerText = content[i];

    $('#hc-content').append(p);
  }

  var link = document.createElement('a');
  link.className = 'member-link';
  link.setAttribute('href', hc.fb);

  var icon = document.createElement('img');
  icon.src = "img/bg-fb.png";
  icon.className = "circle img-responsive";

  link.appendChild(icon);
  $('#hc-links').append(link);

  var link = document.createElement('a');
  link.className = 'member-link';
  link.setAttribute('href', hc.mail);

  var icon = document.createElement('img');
  icon.src = "img/bg-mail.png";
  icon.className = "circle img-responsive";

  link.appendChild(icon);
  $('#hc-links').append(link);

}