status1="";
objects=[];
function preload(){
    img=loadImage("object detection-3.jpg");

}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectdetector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function modelloaded(){
  console.log("model loaded");
  status1="true";
  objectdetector.detect(img,gotresults);
}
function gotresults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}
function draw(){
    image(img,0,0,640,420);
    if(status1 != ""){
        for (i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="Status:Object Detected";
            fill("red");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+ " "+ percent +"%",objects[i].x,objects[i].y);
            noFill();
            stroke("red");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
        
    }}
    