$(function(){
    $(".menu").click(function(){
        $(".b").slideToggle();
    });
});

$(window).resize(function(){
    if(window.innerWidth>=769){
        $('.b').show();
    }
});