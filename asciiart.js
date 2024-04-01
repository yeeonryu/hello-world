//must allow permission for the camera before running
let video;
let asciiart = '';
let cols = 100;
let rows = 50;
let font_size = 12;

function setup() {
  createCanvas(800, 400);
  video = createCapture(VIDEO);
  video.size(cols, rows);
  video.hide();
}

function draw() {
  background(255);
  video.loadPixels();
  asciiart = '';
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let index = (x + y * cols) * 4;
      let r = video.pixels[index];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
      let brightness = (r + g + b) / 3;
      let glyph = brightnessToChar(brightness);
      asciiart += glyph;
    }
    asciiart += '\n';
  }
  textSize(font_size);
  text(asciiart, 10, 20);
}

function brightnessToChar(brightness) {
  let chars = '@%#*+=-:. ';
  let index = floor(map(brightness, 0, 255, 0, chars.length));
  return chars.charAt(index);
}
