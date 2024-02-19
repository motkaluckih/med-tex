// * ====================================================================================================
// * Owl Carousel 2
// * ====================================================================================================
/*
 * Документация: https://owlcarousel2.github.io/OwlCarousel2/
 * Установка: npm install --save owl.carousel
 */
// Подключение библиотеки
import owlCarousel from "owl.carousel";
// Подключение стилей
import "owl.carousel/dist/assets/owl.carousel.css";

$(document).ready(function () {
  $(".services-slider .slider-wrapper").owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    autoplay: false,

    dotsContainer: ".services-slider .slider-dots__inner",
    navContainer: ".services-slider .slider-nav__inner",
    navText: [
      `<svg class="icon"><use xlink:href="img/sprite.svg#arrow"></use></svg>`,
      `<svg class="icon"><use xlink:href="img/sprite.svg#arrow"></use></svg>`,
    ],
  });
  $(".description__slider .slider-wrapper").owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    autoplay: false,
    margin: 10,
    
    navContainer: ".description__btn-dom",
    navText: [
      `<svg class="icon"><use xlink:href="img/sprite.svg#arrow"></use></svg>`,
      `<svg class="icon"><use xlink:href="img/sprite.svg#arrow"></use></svg>`,
    ],
  });


  $(".partners__slider .slider-wrapper").owlCarousel({
    loop: true,
    dots:true,
    nav: true,

    responsive: {
          290: {
            items:1,
          },
          768: {
            items:1,
          },
          992: {
            items:1,
          },
          1140: {
            dotsEach: true, 
            items:6,
          },
        },
    dotsContainer: ".partners__dots-inner",
    navContainer: ".partners__slider-nav",
    navText: [
      `<svg class="icon"><use xlink:href="img/sprite.svg#arrow"></use></svg>`,
      `<svg class="icon"><use xlink:href="img/sprite.svg#arrow"></use></svg>`,
    ],

  });

  $(".news__slider .slider-wrapper").owlCarousel({
    dots:false,
    responsive: {
      290: {
        items:1,
        loop: true,
        nav: true,
        margin: 15,
      },
      992: {
        items:3,
        margin: 15,
        loop: false,
        nav: false,
      },
    },

    navContainer: ".news__btn-dom",
    navText: [
      `<svg class="icon"><use xlink:href="img/sprite.svg#arrow"></use></svg>`,
      `<svg class="icon"><use xlink:href="img/sprite.svg#arrow"></use></svg>`,
    ],
    
  });


  $(".shop__slider .slider-wrapper").owlCarousel({
    loop: true,
    dots: true,
    responsive: {
      290: {
        items:1,
        margin: 15,
      },
      768: {
        items:1,
      },
      992: {
        items:2,
        margin: 20,
      },
    },
    navContainer: ".shop__btn-dom",
    navText: [
      `<svg class="icon"><use xlink:href="img/sprite.svg#arrow"></use></svg>`,
      `<svg class="icon"><use xlink:href="img/sprite.svg#arrow"></use></svg>`,
    ],
  });

});

// * ====================================================================================================
// * SwiperJS
// * ====================================================================================================
/*
 * Документация: https://swiperjs.com/swiper-api
 * Установка: npm install swiper
 * Сниппет (+swiper)
 */

// Подключение сразу всей библиотеки
// import Swiper from "swiper/bundle";
// Подключение по модулям
// import Swiper, { Navigation, Pagination } from "swiper";
// Подключение стилей
// import "swiper/css";

// const swiper = new Swiper(".swiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });

// * ====================================================================================================
// * GlideJS
// * ====================================================================================================
/*
 * Документация: https://glidejs.com/docs/
 * Установка: npm install @glidejs/glide
 */

// Подключение сразу всей библиотеки
// import Glide from "@glidejs/glide";
// Подлкючение по модулям
// import Glide, { Controls, Breakpoints } from "@glidejs/glide/dist/glide.modular.esm";
// Подлкючение стилей
// import "@glidejs/glide/dist/css/glide.core.min.css";

// new Glide(".glide").mount();
