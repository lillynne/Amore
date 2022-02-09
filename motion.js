$(document).ready(function(){
    $(".slider").on("init" , function(event , slick){
        $(".slider .content").eq(1).addClass("active");
      });

    $(".silder").slick({
      autoplay: true ,
      autoplaySpeed: 2000 ,
      slidesToShow: 1 ,
      slidesToScroll: 1, 
      speed: 1500 ,
      prevArrow: $(".arrow-left") ,
      nextArrow: $(".arrow-right") ,
      customPaging: function(slide , i){
        var now_slide = $(slide.$slides[i]).attr("data-nav-txt");
        console.log(now_slide);
        return now_slide;
      } ,

     });
