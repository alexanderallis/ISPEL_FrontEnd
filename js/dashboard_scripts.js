// var elem = document.querySelector('.grid');
// var msnry = new Masonry( elem, {
//   // options
//   // gutter: 10,
//   // columnWidth: 200  // If columnWidth is not set, Masonry uses the width of the first element.
// });
//
// // element argument can be a selector string
// //   for an individual element
// var msnry = new Masonry( '.grid', {
//   // options
//   itemSelector: '.grid-item',
//   gutter: 30,  // I think these units are in pixels
//   horizontalOrder: true
// });

// external js: masonry.pkgd.js



// A $( document ).ready() block.
// Using a document ready block ensures that the masonry
// javascript does not execute untill all the css is loaded/
// This ensures that the parameters set by the javascript
// are accurately executed.
$( document ).ready(function() {
  $('.grid').masonry({
  itemSelector: '.grid-item',
  gutter: 20
  });
});