function back(){
    window.location= "index.html";
}

function preload(){
    img= loadImage("Fruit basket.jpg");
}

function setup(){
    canvas= createCanvas(640, 420);
    canvas.position(450, 190);
}

function draw(){
    image(img, 0, 0, 640, 420);
}