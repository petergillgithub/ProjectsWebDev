// const navLinks = document.querySelectoAll(".nav-menu .nav-link");
const menuOpenbutton = document.querySelector("#menu-open-button");

const menuClosebutton = document.querySelector("#menu-close-button");

menuOpenbutton.addEventListener("click", () => {
  // Toggle Mobile Menu visibility;
  document.body.classList.toggle("show-mobile-menu");
});

// Close Menu when the close button is clicked;

menuClosebutton.addEventListener("click", () => menuOpenbutton.click());

// Close Menu when the nav menu is clicked;

// navLinks.forEach((link) => {
//   link.addEventListener("click", () => menuOpenbutton.click());
// });

// Initialize Swiper

const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  spaceBetween: 25,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
