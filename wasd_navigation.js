let xPosition = 200;
let yPosition = 200;
let speed = 5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  drawAvatar(xPosition, yPosition);
  
  moveAvatar();
}

function drawAvatar(x, y) {
  fill('black');
  rect(x-7, y, 20, 50);
  circle(x+2,y-5,40)
  rect(x-28, y+15, 60, 10);
  rect(x-15, y+40, 15, 40);
  rect(x+5, y+40, 15, 40);
  
}

function moveAvatar() {
  if (keyIsDown(87)) {
    yPosition -= speed;
  }
  if (keyIsDown(83)) {
    yPosition += speed;
  }
  if (keyIsDown(65)) {
    xPosition -= speed;
  }
  if (keyIsDown(68)) {
    xPosition += speed;
  }
}
