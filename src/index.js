var $ = require("jquery");

$(".nav__icon").click(function () {
  $(".nav__icon").toggleClass("is-clicked");
  $(".nav__mobile-menu").toggleClass("is-opened");
  $("body").toggleClass("menu-open");
});
