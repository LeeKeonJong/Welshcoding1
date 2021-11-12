$(function(){
    $('#prev').click(function () {
        $('#newgamesultwo li:last').prependTo('#newgamesultwo');
        $('#newgamesultwo').css('margin-left', 0);
        $('#newgamesultwo').stop().alimate({ marginLeft: 0 }, 800);
    });
    
    $('#next').click(function () {
        $('#newgamesultwo li:first').appendTo('#newgamesultwo');
        $('#newgamesultwo').css({ marginLeft: 205 });
        $('#newgamesultwo').stop().animate({ marginLeft: -0 }, 500, function () {   
        });
    });

    $('#prevtwo').click(function () {
        $('#topsellersul li:last').prependTo('#topsellersul');
        $('#topsellersul').css('margin-left', 0);
        $('#topsellersul').stop().alimate({ marginLeft: 0 }, 800);
    });
    
    $('#nexttwo').click(function () {
        $('#topsellersul li:first').appendTo('#topsellersul');
        $('#topsellersul').css({ marginLeft: 0 });
        $('#topsellersul').stop().animate({ marginLeft: -0 }, 800, function () {   
        });
    });

    $('#prevthree').click(function () {
        $('#discountgamesul li:last').prependTo('#discountgamesul');
        $('#discountgamesul').css('margin-left', 0);
        $('#discountgamesul').stop().alimate({ marginLeft: 0 }, 800);
    });
    
    $('#nextthree').click(function () {
        $('#discountgamesul li:first').appendTo('#discountgamesul');
        $('#discountgamesul').css({ marginLeft: 0 });
        $('#discountgamesul').stop().animate({ marginLeft: -0 }, 800, function () {   
        });
    });


    $('#prevfour').click(function () {
        $('#comingsoongamesul li:last').prependTo('#comingsoongamesul');
        $('#comingsoongamesul').css('margin-left', 0);
        $('#comingsoongamesul').stop().alimate({ marginLeft: 0 }, 800);
    });
    
    $('#nextfour').click(function () {
        $('#comingsoongamesul li:first').appendTo('#comingsoongamesul');
        $('#comingsoongamesul').css({ marginLeft: 0 });
        $('#comingsoongamesul').stop().animate({ marginLeft: -0 }, 800, function () {   
        });
    });

    $('#prevslide').click(function () {
        $('#review div:last').prependTo('#review');
        $('#review').css('margin-left', 0);
        $('#review').stop().alimate({ marginLeft: 0 }, 800);
    });
    
    $('#nextslide').click(function () {
        $('#review div:first').appendTo('#review');
        $('#review').css({ marginLeft: 0 });
        $('#review').stop().animate({ marginLeft: -0 }, 800, function () {   
        });
    });
});
