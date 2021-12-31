noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
Difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(580,130);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialised");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nose X = "+noseX+" Nose Y = "+noseY);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        Difference=floor(leftWristX-rightWristX);
        console.log("left wrist X = "+leftWristX+" right wrist X = "+rightWristX+" difference = "+Difference);
    }
}

function draw(){
    background("#34eb98");
    document.getElementById("squareSide").innerHTML="Width and Height of the square is "+Difference+"px";
    fill("#61197d");
    stroke("#61197d");
    square(noseX,noseY,Difference);
}