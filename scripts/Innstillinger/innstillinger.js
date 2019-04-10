new Vue({
    el: '#app-container',
    data: {
        name: 'Andreas Graesmo',
        dob: '21.12.1998'
    }
});

$(document).ready(function(){

   $('.settings-link').click(function(){
        $(this).parent().next(".content-li").toggle();
        $(this).children().children().next(".settings-list-icon").toggleClass("rotate");
    });
});