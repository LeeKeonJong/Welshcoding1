$(function(){
    $('#prev').click(function () {
        
        $('#newgamesultwo li:last').prependTo('#newgamesultwo');
        $('#newgamesultwo').css('margin-left',-0);
        $('#newgamesultwo').stop().alimate({ marginLeft:0},800);
    });
    
    $('#next').click(function () {
        $('#newgamesultwo').stop().animate({ marginLeft: -215 }, 800, function () { 
        $('#newgamesultwo li:first').appendTo('#newgamesultwo');
        $('#newgamesultwo').css({ marginLeft: 0 });
         
        });
    });

    $('#prevtwo').click(function () {
        $('#topsellersul li:last').prependTo('#topsellersul');
        $('#topsellersul').css('margin-left', 0);
        $('#topsellersul').stop().alimate({ marginLeft: 0 }, 800);
    });
    
    $('#nexttwo').click(function () {
        $('#topsellersul').stop().animate({ marginLeft: -215 }, 800, function () { 
        $('#topsellersul li:first').appendTo('#topsellersul');
        $('#topsellersul').css({ marginLeft: 0 });         
        });
    });

    $('#prevthree').click(function () {
        $('#discountgamesul li:last').prependTo('#discountgamesul');
        $('#discountgamesul').css('margin-left', 0);
        $('#discountgamesul').stop().alimate({ marginLeft: 0 }, 800);
    });
    
    $('#nextthree').click(function () {
        $('#discountgamesul').stop().animate({ marginLeft: -215 }, 800, function () { 
        $('#discountgamesul li:first').appendTo('#discountgamesul');
        $('#discountgamesul').css({ marginLeft: 0 });         
        });
    });


    $('#prevfour').click(function () {
        $('#comingsoongamesul li:last').prependTo('#comingsoongamesul');
        $('#comingsoongamesul').css('margin-left', 0);
        $('#comingsoongamesul').stop().alimate({ marginLeft: 0 }, 800);
    });
    
    $('#nextfour').click(function () {
        $('#comingsoongamesul').stop().animate({ marginLeft: -215 }, 800, function () {
        $('#comingsoongamesul li:first').appendTo('#comingsoongamesul');
        $('#comingsoongamesul').css({ marginLeft: 0 });          
        });
    });

    $('#prevslide').click(function () {
        $('#review div:last').prependTo('#review');
        $('#review').css('margin-left', 0);
        $('#review').stop().alimate({ marginLeft: 0 }, 800);
    });
    
    $('#nextslide').click(function () {
        $('#review').stop().animate({ marginLeft: -530 }, 800, function () {
        $('#review div:first').appendTo('#review');
        $('#review').css({ marginLeft: 0 });          
        });
    });
});
