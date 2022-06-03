img=" ";
status="";
objects=[];
function setup() {
    canvas = createCanvas(700, 500);
    canvas.center();
    objectDetector= ml5.objectDetector("CocoSsd", modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting object";
  }

function preload(){
img=loadImage('Wolf.jpg');
}

function draw(){
image(img, 0, 0, 700, 500);

if(status != " ")
{
for(i = 0; i < objects.length; i++)
{
document.getElementById("status").innerHTML="Status : Objects detected";
fill("#a3bc26");
percent=floor(objects[i].confidence*100);
text(objects[i].label+" "+ percent + "%", objects[i].x + 10, objects[i].y- 10);
noFill();
stroke("#4f839d");
rect(objects[i].x, objects[i].y, objects[i].height, objects[i].width )

}
}
}
 
function modelLoaded(){
console.log("modelLoaded");
status= true;
objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
  if (error) {
  console.log(error);
  }
  console.log(results);
  objects=results;
  }