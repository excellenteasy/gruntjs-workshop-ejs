(function() {
  "use strict";
  var hue = 0;
  var body = document.querySelector('body');
  var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  raf(step);
  function step() {
    body.style.backgroundColor = 'hsl(' + hue++ % 360 + ', 50%, 50%)';
    raf(step);
  };
}).call(this);
