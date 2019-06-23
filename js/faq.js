$(function() {
	$("#sidenav").sideNav();
	$('.modal').modal();
	$(".dropdown-button").dropdown();
	$('.dropdown-button').dropdown({
	    hover: true, // Activate on hover
	    belowOrigin: true, // Displays dropdown below the button
	    alignment: 'left', // Displays dropdown with edge aligned to the left of button
	});
	for (var i = 0; i < faqs.length; i++) {
		var string = `<li><div class="collapsible-header">${ faqs[i].question }</div>
		<div class="collapsible-body">${ faqs[i].answer }</div>	</li>`;
		$('.collapsible').append(string);
	}
});
