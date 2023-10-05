function preload() {

}

function setup() {
    canvas = createCanvas(500 , 400);
    canvas.position(70 , 200);
    video = createCapture(VIDEO);
    video.hide();

}

function draw() 
{
    image(video ,100 , 80 , 300 , 250 );
    stroke(137,207,240);
    fill(137,207,240);

    circle(40 , 40 , 50);
    circle(460 , 40 , 50);
    circle(40 , 360 , 50);
    circle(460 , 360 , 50);

    stroke(128 , 0 , 128);
    fill(128 , 0 , 128);

    rect(63 , 27 , 375 , 25);
    rect(63 , 347 , 375 , 25);
    rect(27 , 63 , 25 , 275);
    rect(448 , 63 , 25 , 275);
}

function take_snapshot() 
{
    save('frame.png');
}

