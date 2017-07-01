$(function(){
	$("#sidenav").sideNav();
	$(document).scroll(function() { 
		var $nav = $('.navbar-fixed');
		$nav.find('nav').toggleClass('orange', $(this).scrollTop() > $('.home-page-banner').height());
		$nav.find('nav').toggleClass('transparent', $(this).scrollTop() < $('.home-page-banner').height());
    });
	loadTechTeam();
	loadContentTeam();
	loadHelpdeskTeam();
});

function loadTechTeam() {
	for (var i = 0; i < tech_team.length; i++) {
		member = tech_team[i];
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
		description.className = "member-description";
		description.innerText = member.description;
		description.setAttribute('style', 'text-align:center');

		container.appendChild(description);

		var link = document.createElement('a');
		link.className = 'member-link';
		link.setAttribute('href', member.facebook);

		var icon = document.createElement('img');
		icon.src = "img/fb_icon.png";
		icon.className = "link-icon";

		link.appendChild(icon);
		container.appendChild(link);

		// console.log(container.innerText);

		$('#tech-team-container').append(container);
	}
}

function loadContentTeam() {
	for (var i = 0; i < content_team.length; i++) {
		member = content_team[i];
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
		description.className = "member-description";
		description.innerText = member.description;
		description.setAttribute('style', 'text-align:center');

		container.appendChild(description);

		var link = document.createElement('a');
		link.className = 'member-link';
		link.setAttribute('href', member.facebook);

		var icon = document.createElement('img');
		icon.src = "img/fb_icon.png";
		icon.className = "link-icon";

		link.appendChild(icon);
		container.appendChild(link);

		// console.log(container.innerText);

		$('#content-team-container').append(container);
	}
}

function loadHelpdeskTeam() {
	for (var i = 0; i < helpdesk_team.length; i++) {
		member = helpdesk_team[i];
		var container = document.createElement('div');
		container.className = "member-container col s12 m6 l6";

		var image = document.createElement('img');
		image.src = "img/team/" + member.image;
		image.className = "circle responsive-img member-image";

		container.appendChild(image);

		var name = document.createElement('div');
		name.className = "member-name";
		name.innerText = member.name;

		container.appendChild(name);

		var description = document.createElement('div');
		description.className = "member-description";
		description.innerText = member.description;
		description.setAttribute('style', 'text-align:center;');

		container.appendChild(description);

		var number = document.createElement('div');
		number.className = "member-number";
		number.innerText = member.number;
		number.setAttribute('style', 'padding-bottom:25px;');

		container.appendChild(number);

		// console.log(container.innerText);

		$('#helpdesk-team-container').append(container);
	}
}