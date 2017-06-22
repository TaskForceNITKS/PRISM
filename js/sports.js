$(function() {
	$("#sidenav").sideNav(); 
	loadSports();
})

function loadSports() {
	// parent div for all sports cards
	$('#sports').toggleClass('row');
	for(i=0; i<sports.length; i++) {
		var sport = sports[i];
		var br = document.createElement('br');

		// column holder
		var holder = document.createElement('div');
		holder.className = "col s12";

		// create card element
		var card = document.createElement('div');
		card.className = "card hoverable";

		// div for all card contents
		var contents = document.createElement('div');
		contents.className = "card-content";

		// sport icon
		var imageWrapper = document.createElement('div');
		imageWrapper.style = "display: flex;"
		var image = document.createElement('img');
		image.src = "/img/sports/"+sport.title.split(" ")[0]+".png";
		image.style = "margin-left: auto; margin-right: auto;"
		imageWrapper.appendChild(image);
		contents.appendChild(imageWrapper);

		// sport title
		var title = document.createElement('h4');
		title.style = "font-family: 'Roboto', sans-serif;"
		title.innerText = sport.title;

		contents.appendChild(title);
		contents.appendChild(br);

		// name of team captain
		var captain = document.createElement('span');
		captain.style = "font-weight: bold;";
		captain.innerText = "Name of the Captain: ";

		contents.appendChild(captain);

		contents.innerHTML += sport.captainName;
		contents.appendChild(br);

		// selections
		var selection = document.createElement('span');
		selection.style = "font-weight: bold;";
		selection.innerText = "Selection Procedure: ";

		contents.appendChild(selection);

		contents.innerHTML += sport.selectionProcedure;
		contents.appendChild(br);

		// competitions
		var competitions = document.createElement('span');
		competitions.style = "font-weight: bold;";
		competitions.innerText = "Competitions: ";

		contents.appendChild(competitions);

		contents.innerHTML += sport.competitions;
		contents.appendChild(br);

		// achievements
		var achievements = document.createElement('span');
		achievements.style = "font-weight: bold;";
		achievements.innerText = "Major Achievements: ";

		contents.appendChild(achievements);

		contents.innerHTML += sport.achievements;
		contents.appendChild(br);

		// append all content to parent
		card.appendChild(contents);
		holder.appendChild(card);
		$('#sports').append(holder);
	}
}