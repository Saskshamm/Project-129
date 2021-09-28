 leftwristx=0;
 leftwristy=0;
 rightwristx=0;
 rightwristy=0;
song = "";
scoreleft=0;

function preload() {
    song = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();


    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelloaded);

    posenet.on('pose', gotPoses);
}


function draw() {
    image(video, 0, 0, 600, 500);
    if(0.2 < scoreleft){
        fill("#10d0ad");
        stroke("#10d0ad");
        circle(leftwristx,leftwristy,20);
        leftynumber=Number(leftwristy);
        removedecimal=floor(leftynumber);
        volume=removedecimal/500;
        song.setVolume(volume);
        }
}

function playsound() {
    song.play();
    song.setVolume(1);
    song.rate(1);
};


function modelloaded() {
    console.log("Your Model Is loaded!");
}

function gotPoses(results){
 if(results.length > 0){
     console.log(results);
     leftwristx = results[0].pose.leftWrist.x;
     leftwristy = results[0].pose.leftWrist.y; 
     rightwristx = results[0].pose.rightWrist.x;
     rightwristy = results[0].pose.rightWrist.y; 
  
     scoreleft = results[0].pose.keypoints[9].score;
        }
}

