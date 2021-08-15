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




function gotResult(results,error)
 { if(error){
   console.log(error);
 }
    else  {
      console.log(results);
      objects = results ;
    }
 }

 function draw() {
   image(video, 0, 0,480, 380);
   if(status != "");

  objectDetector.detect(video, gotResults);
  for(objects[i].label == object_name ) {
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    document.getElementById("number_of_objects").innerHTML = "Number of objects =" +objects.length;
    document.getElementById("object_status").innerHTML = object_name + "found";

    fill("#FFFF00");
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + " " + percent + "%" + objects[i].x + 15 , objects[i].y + 15);
    nofill();
    stroke("#FFFF00");
    rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
  }
 }