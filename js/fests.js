$(function() {
    var id = getUrlParameter('id');
    loadFestInfo(id);
    $("#sidenav").sideNav();
    $(document).scroll(function() { 
        var $nav = $('.navbar-fixed');
        $nav.find('nav').toggleClass('orange', $(this).scrollTop() > $('.dept-page-banner').height());
        $nav.find('nav').toggleClass('transparent', $(this).scrollTop() < $('.dept-page-banner').height());
    });
    $(".dropdown-button").dropdown();
    $('.dropdown-button').dropdown({
      hover: true, // Activate on hover
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
  });
});

function loadFestInfo(id) {
    for (var i = 0; i < fests.length; i++) {
        if(id === fests[i].id) {
            fest = fests[i];
        }          
    }

    /*
     * Fests Image Head
    */
    var image =document.getElementById('fest-img');
    image.src="img/fests/" + fest.id + "/" + fest.head_image;

    /*
     * Fests Title
    */
    $('.header-title').html(fest.name);  

    /*
     * Fests Core Team
    */
    for (var i = 0; i < fest.team.length; i++) {
        var member = fest.team[i];

        var container = document.createElement('div');
        container.className = "member-container col s12 m4";

        var image = document.createElement('img');
        image.src = "img/fests/" + fest.id + "/" + member.image;
        image.className = "center circle responsive-img member-image";

        container.appendChild(image);

        var name = document.createElement('div');
        name.className = "member-name";
        name.innerText = member.name;
        name.setAttribute('style', 'text-align:center');

        container.appendChild(name);

        var post = document.createElement('div');
        post.className = "member-description";
        post.innerText = member.post_name;
        post.setAttribute('style', 'text-align:center');

        container.appendChild(post);

        $('#team-details-container').append(container);
    }

    /*
     * Fests Introduction
    */
    var intro_container = document.getElementById('introduction');

    var intro_image = document.createElement('img');
    intro_image.src = "img/fests/" + fest.id + "/" + fest.introduction[0].image;
    intro_image.className = "responsive-img";
    intro_container.appendChild(intro_image);

    var intro_content = document.createElement('div');
    intro_content.className = "intro-content";
    intro_content.innerText = fest.introduction[0].content;
    intro_container.appendChild(intro_content);

    $('#introduction').append(intro_container);

    /*
     * Fests Committees
    */

    for (var i = 0; i < fest.committees.length; i++) {
        var committee = fest.committees[i];

        var committees_container = document.createElement('div');
        committees_container.className = "committees-container col s12";

        var name = document.createElement('h4');
        name.className = "committee-name";
        name.innerText = committee.name;
        name.setAttribute('class', 'pt-sans');

        committees_container.appendChild(name);

        var procedure = document.createElement('div');
        procedure.className = "committee-procedure";
        procedure.innerText = committee.procedure;

        committees_container.appendChild(procedure);

        var committee_does = document.createElement('div');
        committee_does.className = "committee-does";
        committee_does.innerText = committee.committee_does;

        committees_container.appendChild(committee_does);


        $('#committees').append(committees_container);
    }

    /*
     * Fests Events
    */
    for (var i = 0; i < fest.events.length; i++) {
        var event = fest.events[i];

        var events_container = document.createElement('div');
        events_container.className = "member-container col s12";

        var name = document.createElement('h4');
        name.className = "event-name";
        name.innerText = event.name;
        name.setAttribute('class', 'pt-sans');

        events_container.appendChild(name);

        var image = document.createElement('img');
        image.src = "img/fests/" + fest.id + "/" + event.image;
        image.className = "responsive-img center-align";

        events_container.appendChild(image);

        var description = document.createElement('div');
        description.className = "event-description";
        description.innerText = event.description;

        events_container.appendChild(description);

        $('#events').append(events_container); 
    }
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split('&'),
    sParameterName, i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};