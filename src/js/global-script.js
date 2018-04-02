// Если на проекте jQuery
$( document ).ready(function() {
  $(".product-carousel").owlCarousel({
    items: 3,
    nav: false,
    loop: true,
    margin: 30,
    center: false,
    responsive : {
      0 : {
        items: 1,
        nav: false,
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
  $(".reviews__carousel").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    autoHeight: true,
    center: true,
    dots: false,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 2px;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 2px;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>']
  });

  $(".product-slider").owlCarousel({
    loop: true,
    items: 1,
    thumbs: true,
    thumbImage: true,
    thumbContainerClass: 'owl-thumbs',
    thumbItemClass: 'owl-thumb-item'
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
