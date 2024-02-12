function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("gray");
  fill("white");
  ellipse(100, 200, 150, 100);
  ellipse(300, 200, 150, 100);
  let xc1 = constrain(mouseX, 60, 140);
  fill("black");
  circle(xc1, 200, 60);
  circle(xc1 + 200, 200, 60);
}
