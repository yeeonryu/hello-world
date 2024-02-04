function setup() {
  createCanvas(400, 400);
}

function draw() {
  noStroke();
  background("black");
  blendMode(LIGHTEST);
  fill(255, 0, 0, 255);
  circle(200, 135, 200);
  fill(0, 0, 255, 191);
  for (var x = 130; x <= 350; x = x + 140) {
    circle(x, 245, 200);
    fill(0, 255, 0, 127);
  }
}
