let frames = [];
let currentFrame = 0;
let isReversed = false;
function preload() {
  for (let i = 0; i <= 6; i++) {
    let framePath = "frame" + i + ".png";
    frames.push(loadImage(framePath));
  }
}

function setup() {
  createCanvas(640, 338);
  frameRate(6);
}

function draw() {
  background(220);

  image(frames[currentFrame], 0, 0);

  if (!isReversed) {
    currentFrame = (currentFrame + 1) % frames.length;
  } else {
    currentFrame = (currentFrame - 1 + frames.length) % frames.length;
  }
}

function mousePressed() {
  isReversed = !isReversed;
}
