$(function(){
    $('.prev').click(function(){
        $('.slide li:last').prependTo('.slide');
        $('.slide').css('margin-left',-1110);
        $('.slide').stop().animate({marginLeft:0},800)
    });

    $('.next').click(function(){
        $('.slide').stop().animate({marginLeft:-1110},800, function(){
        $('.slide li:first').appendTo('.slide');
        $('.slide').css({marginLeft:0});
    });
    });
});

