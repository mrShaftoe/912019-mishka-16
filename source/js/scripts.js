//Меню для мобильного разрешения
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

//Модальное окно
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

//Я.Карты
var page = window.location.pathname.split("/").pop();
  if (page === "index.html") {
  ymaps.ready(init);

  centerMap = [59.93863106, 30.32305450];
  zoomMap = 16;

  function init() {
    var myMap = new ymaps.Map("map", {
      center: centerMap,
      zoom: zoomMap,
      controls: []
    });

    var myPlacemark = new ymaps.Placemark(centerMap, {}, {
      iconLayout: 'default#image',
      iconImageHref: '../img/map-pin.svg',
      iconImageSize: [67, 100],
      iconImageOffset: [-30, -100]
    });
    myMap.geoObjects.add(myPlacemark);
  }
}
