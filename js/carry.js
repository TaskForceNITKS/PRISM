$( document ).ready(function(){
	$("#sidenav").sideNav();
	$(document).scroll(function() { 
		var $nav = $('.navbar-fixed');
		$nav.find('nav').toggleClass('orange', $(this).scrollTop() > $('.carry-page-banner').height());
		$nav.find('nav').toggleClass('transparent', $(this).scrollTop() < $('.carry-page-banner').height());
    });

	$(".dropdown-button").dropdown();
    $('.dropdown-button').dropdown({
      hover: true, // Activate on hover
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
    }
  );    
  getAdmissionDocs();
  getCarryItems();
  getBuyItems();
});

function getAdmissionDocs() {
  var docs = documents;
  for(var i = 0; i < docs.length; i ++) {
    var p = document.createElement('p');
    p.innerText = docs[i];
    $('.docs-needed').append(p);
  } 
}

function getCarryItems() {
  var carryItems = carry;
  for(var i = 0; i < carryItems.length; i ++) {
    var p = document.createElement('p');
    p.innerText = carryItems[i];
    $('.what-to-carry').append(p);
  } 
}

function getBuyItems() {
  var buyItems = buy;
  for(var i = 0; i < buyItems.length; i ++) {
    var p = document.createElement('p');
    p.innerText = buyItems[i];
    $('.what-to-buy').append(p);
  } 
}

