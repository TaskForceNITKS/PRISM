$(function(){
	$("#sidenav").sideNav();
	$(document).scroll(function() { 
		var $nav = $('.navbar-fixed');
      	$nav.find('nav').toggleClass('orange', $(this).scrollTop() > $nav.height());
    	$nav.find('nav').toggleClass('transparent', $(this).scrollTop() < $nav.height());
    });
	loadTeam();
});

function loadTeam() {
	for (var i = 0; i < team.length; i++) {
		member = team[i];
		var container = document.createElement('div');
		container.className = "member-container col s12 m4";

		var image = document.createElement('img');
		image.src = "img/team/" + member.image;
		image.className = "circle responsive-img member-image";

		container.appendChild(image);

		var name = document.createElement('div');
		name.className = "member-name";
		name.innerText = member.name;

		container.appendChild(name);

		var description = document.createElement('div');
		name.className = "member-description";
		name.innerText = member.description;
		name.setAttribute('style', 'text-align:center');

		var link = document.createElement('a');
		link.className = 'member-link';
		link.setAttribute('href', member.facebook);

		var icon = document.createElement('img');
		icon.src = "img/fb_icon.png";
		icon.className = "link-icon";

		link.appendChild(icon);
		container.appendChild(link);

		$('#team-container').append(container);
	}
}