function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    tint_color = ""
}

function draw() {
    image(video, 120, 90, 400, 300);

    fill(134, 24, 237);
    stroke(134, 24, 237);
    rect(50, 25, 20, 400);
    rect(50, 25, 510, 20);
    rect(50, 440, 510, 20);
    rect(570, 25, 20, 433);
    fill("#FFD700");
    stroke("#FFD700");
    circle(59.5, 30, 50);
    circle(580, 30, 50);
    circle(59.5, 445, 50);
    circle(580, 445, 50);
    
}



function take_snapshot() {
    save("My_Pic.png")
}