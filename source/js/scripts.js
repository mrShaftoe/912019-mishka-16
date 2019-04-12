var toggle = document.querySelector(".site-menu__toggle");
var menu = document.querySelectorAll(".site-menu");

menu.forEach(function(elem) {
  elem.classList.remove("site-menu--nojs");
  elem.classList.add("site-menu--closed");
});

toggle.addEventListener("click", function () {
  menu.forEach(function(elem) {
    if (elem.classList.contains("site-menu--closed")) {
      elem.classList.remove("site-menu--closed");
      elem.classList.add("site-menu--opened");
    } else {
      elem.classList.remove("site-menu--opened");
      elem.classList.add("site-menu--closed");
    }
  });
});

