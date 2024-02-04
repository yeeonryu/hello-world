function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("black");
  fill("white");
  noStroke();
  for (let x = 0; x <= width; x += 100) {
    for (let y = 0; y <= height; y += 100) {
      rect(x, y, 50, 50);
    }
  }
  for (let j = 50; j <= width; j += 100) {
    for (let i = 50; i <= height; i += 100) {
      rect(j, i, 50, 50);
    }
  }
  stroke("black");
  fill("red");
  for (let x = 25; x <= 400; x += 50) {
    for (let y = 25; y <= 80; y += 50) {
      circle(x, y, 30);
    }
  }
  fill("green");
  for (let x = 25; x <= 400; x += 50) {
    for (let y = 325; y <= 400; y += 50) {
      circle(x, y, 30);
    }
  }
}
