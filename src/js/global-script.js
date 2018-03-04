// Если на проекте jQuery
$( document ).ready(function() {
  $(".product-carousel").owlCarousel({
    items: 3,
    nav: true,
    loop: true,
    margin: 30,
    center: false,
    responsive : {
      0 : {
        items: 1,
        nav: true,
        loop: true,
        center: false,
      },
      480 : {
        items: 2,
      },
      768 : {
        items: 3,
      },
      992 : {
        items: 4,
      },
      1200 : {
        items: 4,
      },
      1800 : {
        items: 4,
      }
    }
  });
});

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
