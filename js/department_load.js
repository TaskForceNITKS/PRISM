$(function() {
    var id = getUrlParameter('id');
    loadDepartmentInfo(id);
    $(document).scroll(function() { 
        var $nav = $('.navbar-fixed');
            $nav.find('nav').toggleClass('orange', $(this).scrollTop() > $('.dept-page-banner').height());
            $nav.find('nav').toggleClass('transparent', $(this).scrollTop() < $('.dept-page-banner').height());
   });

});

function loadDepartmentInfo(id) {
    for (var i = 0; i < departments.length; i++) {
        if(id === departments[i].id) {
            department = departments[i];
        }          
    }
    $('.header-title').html(department.name);    

    $('.intro').html(department.intro);      
    $('.department_name').html(department.name);      
    $('.definition').html(department.definition);      
    $('.course_information').html(department.course_information);
    $('.pg-options').html(department.pg);
    console.log(department);

    for (var i = 0; i < department.core_specializations.length; i++) {
        var c = document.createElement('div');
        c.className = "specialization-container";

        var title = document.createElement('h4');
        title.className = "pt-sans"; 
        title.innerText = department.core_specializations[i].title;

        c.appendChild(title);

        var description = document.createElement('p');
        description.innerText = department.core_specializations[i].desc;

        c.appendChild(description);

        $('.core_specializations').append(c);
    }
     

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