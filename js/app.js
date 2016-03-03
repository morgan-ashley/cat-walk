var movePixels = 10;
var delayMs = 50;
var catTimer = null;
var start = document.getElementById('start-button');
var stop = document.getElementById('stop-button');
var faster = document.getElementById('speed-button');

start.disabled = false;
stop.disabled = true;
faster.disabled = true;

function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels) + 'px';
    if (currentLeft > (window.innerWidth-img.width)) {
        img.style.left = '0px';
    }
}

function startCatWalk() {
  catTimer = window.setInterval(catWalk, delayMs);
}

function stopCatWalk() {
  window.clearInterval(catTimer);
     movePixels=10;
}

start.addEventListener('click', function() {
  startCatWalk();
  start.disabled = true;
  stop.disabled = false;
  faster.disabled = false;
}, false);

stop.addEventListener('click', function() {
  stopCatWalk();
  stop.disabled = true;
  start.disabled = false;
  faster.disabled = true;
}, false);

faster.addEventListener('click', function() {
  movePixels+=10;
}, false);

function play(path) {
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', path);
  audioElement.play();
}