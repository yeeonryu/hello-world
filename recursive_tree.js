function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);

  let branchLength = map(mouseX, 0, width, 100, 200);
  let angle = map(mouseY, 0, height, 0, PI / 3);

  stroke(0);
  translate(width / 2, height);
  drawBranch(branchLength, angle, 10);
}

function drawBranch(length, angle, depth) {
  if (depth === 0) {
    return;
  }

  line(0, 0, 0, -length);
  translate(0, -length);

  push();
  rotate(-angle);
  drawBranch(length * 0.67, angle, depth - 1);
  pop();

  push();
  rotate(angle);
  drawBranch(length * 0.67, angle, depth - 1);
  pop();
}
