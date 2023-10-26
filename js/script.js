var swiper = new Swiper(".swiper-hero", {
    // Optional parameters
    //slidesPerView: "auto",
    //spaceBetween: 15,
    // slidesPerGroupAuto: true,

    direction: "horizontal",
    loop: true,
    // allowTouchMove: true,
    effect: "fade",
    speed: 4000,
    autoplay: {
      delay: 1000,
      pauseOnMouseEnter: false,
      disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      // type: "progressbar"
      clickable: true,
      dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    //   draggable: true,
    // },
  });