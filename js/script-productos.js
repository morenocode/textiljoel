var swiper = new Swiper(".swiper-productos", {
  // Optional parameters
  slidesPerView: 5,
  spaceBetween: 15,
  // slidesPerGroupAuto: true,

  direction: "horizontal",
  loop: true,
  speed: 2500,
  // allowTouchMove: true,
  // effect: "cube",
  autoplay: {
    
    delay: 2000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    // type: "progressbar"
    clickable: false,
    //dynamicBullets: false,
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

// Configuración específica para pantallas móviles (max-width: 768px)
if (window.innerWidth <= 768) {
  swiper.params.slidesPerView = 2; // Cambia el número de slides a mostrar
  swiper.update(); // Actualiza Swiper con la nueva configuración
}