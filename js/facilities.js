$(function() {
	$("#sidenav").sideNav();
	$(document).scroll(function() { 
	  	var $nav = $('.navbar-fixed');
	    $nav.find('nav').toggleClass('orange', $(this).scrollTop() > $('.facilities-page-banner').height());
	    $nav.find('nav').toggleClass('transparent', $(this).scrollTop() < $('.facilities-page-banner').height());
	});
	$(".dropdown-button").dropdown();
	$('.dropdown-button').dropdown({
	    hover: true, // Activate on hover
	    belowOrigin: true, // Displays dropdown below the button
	    alignment: 'left', // Displays dropdown with edge aligned to the left of button
	});
	loadFacilities();
});

function loadFacilities() {
	for (var i = 0; i < facilities.length; i++) {
		facility = facilities[i];

		var holder = document.createElement('div');
		holder.className = "row";

		var name = document.createElement('h2');
		name.className = "facility-name";
		name.innerText = facility.name;
		holder.appendChild(name);

		var intro = document.createElement('div');
		intro.className = "facility-intro";
		intro.innerHTML += facility.intro;
		holder.appendChild(intro);

		if(facility.timings){
			var timings = document.createElement('p');
			timings.className = "facility-timings";
			timings.innerHTML += "<b>Timings:</b><br>" + facility.timings;

			holder.appendChild(timings);
		}

		$('#facilities').append(holder);
	}
}