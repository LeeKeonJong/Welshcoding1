$(function(){
    $(window).scroll(function(){
    var ws=$(this).scrollTop();
    if(ws>3100){
    $('.shape').css("transform","translateX(0px)").css("opacity","1");
    }
    });

    $(window).scroll(function(){
    var ws=$(this).scrollTop();
    if(ws>2200){
    $('#text14').css("transform","translateX(0px)").css("opacity","1");
    }
    });
});