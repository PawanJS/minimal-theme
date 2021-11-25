import 'bootstrap';

let jQuery = require('jquery');
window.jQuery = window.$ = jQuery;

let slick = require('slick-carousel');

$('.product-slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
});

console.log('Hie from Product file');
