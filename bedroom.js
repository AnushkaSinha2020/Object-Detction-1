function back(){
    window.location= "index.html";
}

function preload(){
    img= loadImage("bedroom.jfif");
}

function setup(){
    canvas= createCanvas(640, 420);
    canvas.position(450, 190);
}

function draw(){
    image(img, 0, 0, 640, 420);

    fill("aqua");
    text("Bed" , 200, 250);
    noFill();
    stroke("aqua");
    rect(190 , 230 , 280, 180);

    fill("#ff0000");
    text("Painting" , 55, 145);
    noFill();
    stroke("#ff0000");
    rect(50 , 130 , 100, 150);

    fill("#3cff00");
    text("Lamp" , 516, 145);
    noFill();
    stroke("#3cff00");
    rect(510 , 130 , 100, 150);
}