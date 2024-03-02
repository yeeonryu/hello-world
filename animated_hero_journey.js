let img;
let centerX = 233;
let centerY = 203;
let radius = 163;
let angleOffset = 0;
let heroX, heroY;
let isMoving = true;

function preload() {
  img = loadImage(
    "https://i0.wp.com/chayoot.blog/wp-content/uploads/2018/07/Heroes-Journey-Principles-by-Ray-Dalio.png?w=479&ssl=1"
  );
}

function setup() {
  createCanvas(479, 450);
  heroX = centerX;
  heroY = centerY;
  heroColorSeed = random(100);
}

function draw() {
  background("white");
  img.resize(479, 398);
  //image(img, 0, 0);
  let angle = radians(frameCount * 0.5) + angleOffset;

  let constrainedX = centerX + cos(angle) * radius;
  let constrainedY = centerY + sin(angle) * radius;
  //line
  noFill();
  stroke("black");
  strokeWeight(2.5);
  quad(82, 142, 384, 142, 384, 143, 82, 143);
  //bigcircle
  circle(centerX, centerY, radius * 2);
  //textbackground
  noStroke();
  fill("white");
  quad(208, 30, 263, 30, 263, 50, 208, 50);
  quad(190, 300, 276, 300, 276, 380, 190, 380);
  quad(50, 75, 150, 75, 150, 115, 50, 115);
  quad(300, 75, 400, 75, 400, 110, 300, 110);
  quad(350, 148, 440, 148, 440, 180, 350, 180);
  quad(50, 315, 180, 315, 180, 345, 50, 345);
  quad(30, 215, 180, 215, 180, 255, 30, 255);
  //text
  textSize(26.3);
  text("THE HERO'S", 150, 234);
  text("JOURNEY", 170, 272);
  fill('black');
  textSize(19);
  textStyle(BOLD);
  text("ABYSS", 200, 370);
  textStyle(NORMAL);
  textSize(19.5);
  text("ADVENTURE", 174, 166);
  textSize(10);
  text("CALL TO", 331, 88.5);
  text("ADVENTURE", 324, 100.5);
  text("CROSSING", 365, 158.5);
  text("THE THRESHOLD", 349, 171.5);
  text("RETURNING", 77, 94);
  text("THE BOON", 78, 107);
  text("THE ULTIMATE", 31, 228);
  text("BOON", 53, 242);
  text("METAMORPHOSIS", 85, 335);
  stroke("black");
  textSize(19);
  textStyle(BOLD);
  if (isMoving) {
    drawHero(constrainedX, constrainedY);
  } else {
    drawHero(heroX, heroY);
  }
  fill('black')
  text("Press Spacebar to Stop the Hero", 80, 420);
}

function drawHero(x, y) {
  randomSeed(heroColorSeed);
  noStroke();
  let r = random(255);
  let g = random(255);
  let b = random(255);
  fill(r,g,b);
  // bag
  noStroke();
  quad(x - 15, y - 20, x - 7, y - 18, x - 17, y + 5, x - 25, y + 4);
  // face
  circle(x + 3, y - 25, 10);
  strokeWeight(5);
  // top
  quad(x - 4, y - 18, x + 1, y - 16, x - 19, y + 33, x - 25, y + 30);
  // cane
  quad(x + 8, y + 4, x + 11, y + 6, x - 5, y + 33, x - 9, y + 32);
  // leg
  quad(x - 5, y, x, y + 2, x + 10, y + 33, x + 5, y + 32);
  // arm
  quad(x, y - 15, x + 5, y - 15, x + 13, y, x + 8, y - 1);
  // hand
  quad(x + 7, y - 2, x + 15, y, x + 15, y + 3, x + 7, y + 1);
}

function keyPressed() {
  if (keyCode === 32) {
    isMoving = !isMoving;
    if (!isMoving) {
      heroX = centerX + cos(radians(frameCount * 0.5) + angleOffset) * radius;
      heroY = centerY + sin(radians(frameCount * 0.5) + angleOffset) * radius;
    }
  }
}
