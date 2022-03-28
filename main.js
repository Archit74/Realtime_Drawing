nose_x = 0;
nose_y = 0;
right_wrist = 0;
left_wrist = 0;
difference = 0;

function setup(){
Video = createCapture(VIDEO);
Video.size(400,400);
canvas = createCanvas(400,400);
canvas.position(600, 150);
posenet = ml5.poseNet(Video, modelLoaded);
posenet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialised" );
}

function gotPoses(results){
if(results.length > 0){
console.log(results.length);
nose_x = results[0].pose.nose.x ;
nose_y = results[0].pose.nose.y ;
right_wrist = results[0].pose.rightWrist.x ;
left_wrist  = results[0].pose.leftWrist.x ;
difference = Math.floor(left_wrist - right_wrist);
}

}

function draw(){
background('#969A97');
document.getElementById("span_result").innerHTML = " The width and the height of the square wil be   "+difference +"px" ;
fill('#F90093');
stroke('#F90093');
square(nose_x, nose_y, difference)
}

