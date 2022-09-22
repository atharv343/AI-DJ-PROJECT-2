believer="";
DM="";
function setup(){
    canvas=createCanvas(493,343);
    canvas.position(485,250);
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    
}
function modelLoaded(){
    console.log('Posenet is loaded');}
function draw(){
    image(video,485,250,493,343);
    fill('lime');
    fill('orange');}
    function gotPoses(results){
        if(results.length>0){
            console.log(results);
            scoreRightWrist=results[0].pose.keypoints[10].score*1000;
            scoreLeftWrist=results[0].pose.keypoints[9].score*1000;
            console.log("scoreRightWrist = "+ scoreRightWrist +"scoreLeftWrist = "+ scoreLeftWrist);}
            
      














        }
