$(document).ready(function () {
  $(".feature-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
    ],
  });
});

const menuSidebarIcon = document.querySelector(".btn-sidebar");
const menuSidebarSelect = document.querySelector(".menu-sidebar");

menuSidebarIcon.addEventListener("click", function () {
  menuSidebarSelect.classList.toggle("menu-sidebar-none");
});
