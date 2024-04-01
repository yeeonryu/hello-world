let numShapes = 6;
let shapeSize = 50;
let speed = 0.01;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  colorMode(HSB);
}

function draw() {
  background(255);
  text('Use the up arrow key and the down arrow key',2,300)
    text('to change the number of shapes',2,320)
  translate(width / 2, height / 2);

  for (let i = 0; i < numShapes; i++) {
    push();
    let rotation = map(i, 0, numShapes, 0, 360);
    rotate(rotation + frameCount * speed);

    // Adjust properties for each quadrant
    let quadrantOffset = map(i, 0, numShapes, 0, TWO_PI);
    let hue = map(i, 0, numShapes, 0, 360);
    let saturation = map(cos(frameCount * 0.1 + quadrantOffset), -1, 1, 50, 100);
    let brightness = map(sin(frameCount * 0.1 + quadrantOffset), -1, 1, 50, 100);
    fill(hue, saturation, brightness);

    // Draw shape
    let shapeType = i % 3;
    switch (shapeType) {
      case 0:
        ellipse(0, 0, shapeSize, shapeSize);
        break;
      case 1:
        rect(-shapeSize / 2, -shapeSize / 2, shapeSize, shapeSize);
        break;
      case 2:
        triangle(-shapeSize / 2, -shapeSize / 2, shapeSize / 2, -shapeSize / 2, 0, shapeSize / 2);
        break;
    }
    pop();
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    numShapes++;
  } else if (keyCode === DOWN_ARROW && numShapes > 1) {
    numShapes--;
  }
}
