$(function() {
	$('#sidenav').sideNav();
	loadDepartmentsList();
	$(document).scroll(function() { 
		var $nav = $('.navbar-fixed');
	  	$nav.find('nav').toggleClass('orange', $(this).scrollTop() > $nav.height());
		$nav.find('nav').toggleClass('transparent', $(this).scrollTop() < $nav.height());
    });

});

function loadDepartmentsList() {

	var cont=document.createElement('div');
	cont.innerText = content[0].content;

    var rows = document.createElement('div');
    rows.id="dept-rows";
    $('#departmentinfo').append(rows);

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
		holder.appendChild(cont);

		$('#dep-row-'+ parseInt(i/3)).append(holder);
		$('#dept-rows').append(cont);
	}
}