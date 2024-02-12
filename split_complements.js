function setup() {
  createCanvas(400, 400);
}

function draw() {
  let x = map(mouseX, 0, width, 0, 255);
  background("white");
  fill(255, x, 0);
  rect(0, 0, 200, 400);
  fill(0, 128, x);
  rect(200, 0, 200, 400);
}
