var toggle = document.querySelector(".site-menu__toggle");
var menu = document.querySelectorAll(".site-menu");

menu.forEach(function(elem) {
  elem.classList.remove("site-menu--nojs");
  elem.classList.add("site-menu--closed");
});

