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
		card.className = "card z-depth-3 hoverable";

		// div for all card contents
		var contents = document.createElement('div');
		contents.className = "card-content";

		// sport title
		var titleRow = document.createElement('div');
		titleRow.className = "row center-align";
		var title = document.createElement('h4');
		title.style = "font-family: 'Roboto', sans-serif;"
		title.innerText = sport.title;
		
		titleRow.appendChild(title);
		contents.appendChild(titleRow);

		var dataRow = document.createElement('div');
		dataRow.className = "row";
		// sport icon
		var imageWrapper = document.createElement('div');
		imageWrapper.className = "col s12 m4 right";
		var image = document.createElement('img');
		image.src = "/img/sports/"+sport.title.split(" ")[0]+".png";
		image.style = "width: 100%;"
		imageWrapper.appendChild(image);
		dataRow.appendChild(imageWrapper);

		var dataContainer = document.createElement('div');
		dataContainer.className = "col s12 m8";

		// name of team captain
		var captain = document.createElement('span');
		captain.style = "font-weight: bold;";
		captain.innerText = "Name of the Captain: ";

		dataContainer.appendChild(captain);

		dataContainer.innerHTML += sport.captainName;
		dataContainer.appendChild(br);

		// selections
		var selection = document.createElement('span');
		selection.style = "font-weight: bold;";
		selection.innerText = "Selection Procedure: ";

		dataContainer.appendChild(selection);

		dataContainer.innerHTML += sport.selectionProcedure;
		dataContainer.appendChild(br);

		// competitions
		var competitions = document.createElement('span');
		competitions.style = "font-weight: bold;";
		competitions.innerText = "Competitions: ";

		dataContainer.appendChild(competitions);

		dataContainer.innerHTML += sport.competitions;
		dataContainer.appendChild(br);

		// achievements
		var achievements = document.createElement('span');
		achievements.style = "font-weight: bold;";
		achievements.innerText = "Major Achievements: ";

		dataContainer.appendChild(achievements);

		dataContainer.innerHTML += sport.achievements;
		dataContainer.appendChild(br);

		dataRow.appendChild(dataContainer);

		contents.appendChild(dataRow);
		// append all content to parent
		card.appendChild(contents);

		holder.appendChild(card);
		$('#sports').append(holder);
	}
}