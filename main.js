statuss = false;
var objectss;
object_to_detect = localStorage.getItem('otd');
var synth = window.speechSynthesis;

function preload(){
    // video = createVideo('Videos.mp4');
    
}
  

function setup() {
    canvas = createCanvas(980, 580);
    canvas.center();
    // video.hide();
    video = createCapture(VIDEO)
    video.hide();
}

function start() {
    objectDetector =ml5.objectDetector("cocossd" , modelLoaded)
    statuss = true;
}
function stop() {
    statuss = false;
}
function modelLoaded(){
    video.speed(0.5);
    video.loop();
    video.volume(1);
    console.log("model loaded")
}

function gotResults(error , result) {
    if (error) {
        console.log(error);
    }
    console.log(result);
    
    objectss = result
    
    // console.log("X =" +  Object1X + "Y ="+ Object1Y);
}
function check(){
    var utterThis = new SpeechSynthesisUtterance("Object Found" + object_to_detect);
    synth.speak(utterThis)
}


function draw(){
    image(video, 0, 0, 980, 580)

    if(statuss == true){
        objectDetector.detect(video , gotResults);
        if(objectss){
            for(var i=0; i<objectss.length; i++){
                if (objectss[i].label == object_to_detect){
                    // console.log("x = "+ objectss[i].x+ "y = "+ objectss[i].y + "width = "+ objectss[i].width + "height = " + objectss[i].height + "label = "+ objectss[i].label + " confidence = " + objectss[i].confidence);
                    percent = floor(objectss[i].confidence *100)
                    fill(255,0,0, 100);
                    text(objectss[i].label+ " " + percent + "%" , objectss[i].x - 15, objectss[i].y - 15);
                    noFill();
                    stroke(255,0,0, 100);
                    rect(objectss[i].x, objectss[i].y,objectss[i].width,objectss[i].height)
                    document.getElementById("status").innerHTML= "Status: True"
                    document.getElementById("number_of_objects").innerHTML= "Objects Detected: " + objectss.length;
                    
                    check();
                    stop()
                }
                // if (objectss[i].label == "car"){
                //     console.log("x = "+ objectss[i].x+ "y = "+ objectss[i].y + "width = "+ objectss[i].width + "height = " + objectss[i].height + "label = "+ objectss[i].label + " confidence = " + objectss[i].confidence);
                //     percent = floor(objectss[i].confidence *100)
                //     fill(255,0,0, 100);
                //     text(objectss[i].label+ " " + percent + "%" , objectss[i].x - 15, objectss[i].y - 15);
                //     noFill();
                //     stroke(255,0,0, 100);
                //     rect(objectss[i].x, objectss[i].y,objectss[i].width,objectss[i].height)
                //     document.getElementById("status").innerHTML= "Status: True"
                //     document.getElementById("number_of_objects").innerHTML= "Objects Detected: " + objectss.length;
                // }
                // else if (objectss[i].label == "truck"){
                //     console.log("x = "+ objectss[i].x+ "y = "+ objectss[i].y + "width = "+ objectss[i].width + "height = " + objectss[i].height + "label = "+ objectss[i].label + " confidence = " + objectss[i].confidence);
                //     percent = floor(objectss[i].confidence *100)
                //     fill(255,0,0, 100);
                //     text(objectss[i].label+ " " + percent + "%" , objectss[i].x - 15, objectss[i].y - 15);
                //     noFill();
                //     stroke(255,0,0, 100);
                //     rect(objectss[i].x, objectss[i].y,objectss[i].width,objectss[i].height)
                //     document.getElementById("status").innerHTML= "Status: True"
                //     document.getElementById("number_of_objects").innerHTML= "Objects Detected: " + objectss.length;
                // }
                // else if (objectss[i].label == object_to_detect){
                    //     console.log("x = "+ objectss[i].x+ "y = "+ objectss[i].y + "width = "+ objectss[i].width + "height = " + objectss[i].height + "label = "+ objectss[i].label + " confidence = " + objectss[i].confidence);
                    //     percent = floor(objectss[i].confidence *100)
                    //     fill(255,0,0, 100);
                    //     text(objectss[i].label+ " " + percent + "%" , objectss[i].x - 15, objectss[i].y - 15);
                    //     noFill();
                    //     stroke(255,0,0, 100);
                    //     rect(objectss[i].x, objectss[i].y,objectss[i].width,objectss[i].height)
                //     document.getElementById("status").innerHTML= "Status: True"
                //     document.getElementById("number_of_objects").innerHTML= "Objects Detected: " + objectss.length;
                // }
        }
    }
    }
}


