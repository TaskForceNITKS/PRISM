$(function() {
    var id = getUrlParameter('id');
    loadDepartmentInfo(id);
});

function loadDepartmentInfo(id) {
    for (var i = 0; i < departments.length; i++) {
        if(id === departments[i].id) {
            department = departments[i];
        }          
    }
    $('.header-title').html(department.name);    
    $('#content').html(department.content);       
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