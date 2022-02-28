function BannerSlideInit() {
  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay:3000,
      disableOnInteraction:false
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    },

    navigation: {
      nextEl: '.my-button-next',
      prevEl: '.my-button-prev',
    },
  });

  $(".swiper-btn-box > .play").click(function() {
    if ($(".swiper-btn-box > .play").hasClass("active")) {
      $(".swiper-btn-box > .play").removeClass("active");
      $(".swiper-btn-box > .pause").addClass("active");
      swiper.autoplay.stop();
    }

  });

  $(".swiper-btn-box > .pause").click(function() {
    if ($(".swiper-btn-box > .pause").hasClass("active")) {
      $(".swiper-btn-box > .pause").removeClass("active");
      $(".swiper-btn-box > .play").addClass("active");
      swiper.autoplay.start();
    }
  });
}
