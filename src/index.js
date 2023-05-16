import ScrollReveal from "scrollreveal";
const $ = require("jquery");

function toggleMobileMenu() {
  $(".nav__icon").click(() => {
    $(".nav__icon").toggleClass("is-clicked");
    $(".nav__mobile-menu").toggleClass("is-opened");
    $("body").toggleClass("menu-open");
  });

  $("main").click(() => {
    $(".nav__icon").removeClass("is-clicked");
    $(".nav__mobile-menu").removeClass("is-opened");
    $("body").removeClass("menu-open");
  });
}

function activateScrollReveal() {
  window.sr = ScrollReveal();
  window.sr.reveal(".sr-animate");
}

toggleMobileMenu();
activateScrollReveal();
