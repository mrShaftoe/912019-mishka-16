var toggle = document.querySelector(".site-menu__toggle");
var menu = document.querySelectorAll(".site-menu");

for (var i = 0; i < menu.length; i++) {
  menu[i].classList.remove("site-menu--nojs");
  menu[i].classList.add("site-menu--closed");
}

toggle.addEventListener("click", function () {
  for (var i = 0; i < menu.length; i++) {
    var elem = menu[i];
    if (elem.classList.contains("site-menu--closed")) {
      elem.classList.remove("site-menu--closed");
      elem.classList.add("site-menu--opened");
    } else {
      elem.classList.remove("site-menu--opened");
      elem.classList.add("site-menu--closed");
    }
  }
});
