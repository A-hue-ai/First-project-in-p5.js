function setup()
{
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 150, 115, 220, 200);

    fill(225, 0, 0);
    stroke(225, 0, 0);
    circle(50, 50, 80);

    fill(0, 0, 120);
    stroke(0, 0, 120);
    rect(90, 40, 350, 20);

    fill(225, 0, 0);
    stroke(225, 0, 0);
    circle(450, 50, 80);

    fill(0, 0, 120);
    stroke(0, 0, 120);
    rect(90, 350, 350, 20);

    fill(225, 0, 0);
    stroke(225, 0, 0);
    circle(50, 355, 80);

    fill(225, 0, 0);
    stroke(225, 0, 0);
    circle(455, 355, 80);
}


function take_snapshot()
{
    save('myFilterImage.png')
}