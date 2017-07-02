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
    $('.header-title').html(fest.name);  
    $('#content1').html(fest.events);
    $('#content').html(fest.description); 
    var image =document.getElementById('festimg');
    image.src="img/fests/"+fest.image;
    

}


var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};