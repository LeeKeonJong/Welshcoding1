$(function(){

    $('.photo1').mouseenter(function(){
        $("#text1").fadeIn();
        $("#minibox1").fadeOut();
    })

    $('.photo1').mouseleave(function(){
        $("#text1").fadeOut();
        $("#minibox1").fadeIn();
    })

    $('.photo2').mouseenter(function(){
        $("#text2").fadeIn();
        $("#minibox2").fadeOut();
    })

    $('.photo2').mouseleave(function(){
        $("#text2").fadeOut();
        $("#minibox2").fadeIn();
    })

    $('.photo3').mouseenter(function(){
        $("#text3").fadeIn();
        $("#minibox3").fadeOut();
    })

    $('.photo3').mouseleave(function(){
        $("#text3").fadeOut();
        $("#minibox3").fadeIn();
    })

    $('.photo4').mouseenter(function(){
        $("#text4").fadeIn();
        $("#minibox4").fadeOut();
    })

    $('.photo4').mouseleave(function(){
        $("#text4").fadeOut();
        $("#minibox4").fadeIn();
    })

    $('.photo5').mouseenter(function(){
        $(".more1").fadeIn();
        $("#text5").fadeOut();
    })

    $('.photo5').mouseleave(function(){
        $(".more1").fadeOut();
        $("#text5").fadeIn();
    })

    $('.photo6').mouseenter(function(){
        $(".more2").fadeIn();
        $("#text6").fadeOut();
    })

    $('.photo6').mouseleave(function(){
        $(".more2").fadeOut();
        $("#text6").fadeIn();
    })

    $('.photo7').mouseenter(function(){
        $(".more3").fadeIn();
        $("#text7").fadeOut();
    })

    $('.photo7').mouseleave(function(){
        $(".more3").fadeOut();
        $("#text7").fadeIn();
    })
});
