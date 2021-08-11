video = "";
status = "";

function preload() {
}

function setup() {
  canvas = createCanvas(480, 340);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video, 0, 0, 480, 340);
}

function start() {
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects"
}

function modelLoaded() {
  console.log('modelLoaded');
  status = true;
}