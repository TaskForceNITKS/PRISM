$(function() {
	$('#sidenav').sideNav();
	loadDepartmentsList();
});

function loadDepartmentsList() {

	for (var i = 0; i < departments.length; i++) {
		if(i%3 === 0) {
			var row = document.createElement('div');
			row.className = "row";
			row.id = "dep-row-" + i/3;
			$('#departments').append(row);
		}
		department = departments[i];
		var holder = document.createElement('div');
		holder.className = "col s12 m4";

		var linkWrapper = document.createElement('a');
		linkWrapper.setAttribute('href', 'departments.html?id=' + department.id);

		var container = document.createElement('div');
		container.className = "department-card z-depth-2";

		var icon = document.createElement('img');
		icon.className = "department-icon";
		icon.src = "img/departments/" + department.icon;

		var title = document.createElement('div');
		title.className = "department-title";
		title.innerText = department.name;

		container.appendChild(icon);
		container.appendChild(title);
		linkWrapper.appendChild(container);
		holder.appendChild(linkWrapper);

		$('#dep-row-'+ parseInt(i/3)).append(holder);
	}
}