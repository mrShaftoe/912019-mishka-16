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

var modalAppear = document.querySelectorAll(".modal-appear");
var modalCover = document.querySelector(".modal-cover");
var modalOrder = document.querySelector(".modal-order");
var modalOrderForm = modalOrder.querySelector("form");

for (var i = 0; i < modalAppear.length; i++) {
  modalAppear[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    modalCover.classList.add("modal--show");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27 && modalCover.classList.contains("modal--show")) {
    evt.preventDefault();
    modalCover.classList.remove("modal--show");
  }
});

modalCover.addEventListener("click", function (evt) {
  if (evt.target !== modalOrder && !modalOrder.contains(evt.target)) {
    modalCover.classList.remove("modal--show");
  }
});
