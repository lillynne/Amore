$(document).ready(function(){

    $(".slider").slick({
        autoplay: true ,
        autoplaySpeed: 2000 ,
        slidesToShow: 1 ,
        slidesToScroll: 1, 
        speed: 1500 ,
        prevArrow:$(".arrow-left") ,
        nextArrow:$(".arrow-right") ,



    });

    $(".play").click(function(){
    
        $(".play").removeClass("active");
        $(".pause").addClass("active");
        $(".slider").slick('slickPlay')
        
      });
      
      $(".pause").click(function(){
        
        $(".pause").removeClass("active");
        $(".play").addClass("active");
        $(".slider").slick('slickPause');
        
      });
});