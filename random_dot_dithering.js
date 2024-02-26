let img;
let num = 128;

function preload() {
  // Load your image
  img = loadImage('https://whitneymedia.org/assets/artwork/5633/69_13_8_cropped.jpeg');

}

function setup() {
  createCanvas(img.width, img.height);
  background(255);
  img.loadPixels();
  loadPixels();
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let z = (x + y * img.width) * 4;
      let r = img.pixels[z];
      let g = img.pixels[z + 1];
      let b = img.pixels[z + 2];
      let bright = (r + g + b) / 3;
      let num = random(255);
      if (num > bright) {
        set(x, y, color(0));
      }
    }
  }
  updatePixels();
}
