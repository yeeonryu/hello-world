// image reference:https://chayoot.blog/2018/07/08/the-heros-journey/
let img;
function preload() {
  img = loadImage(
    "https://i0.wp.com/chayoot.blog/wp-content/uploads/2018/07/Heroes-Journey-Principles-by-Ray-Dalio.png?w=479&ssl=1"
  );
}
function setup() {
  createCanvas(479, 398);
}

function draw() {
  background("white");
  img.resize(479, 398);
  //image(img, 0, 0);
  noFill();
  stroke("black");
  strokeWeight(2.5);
  //face
  circle(241, 18, 10);
  strokeWeight(5);
  //line
  quad(80, 142, 370, 142, 385, 143, 142, 143);
  //bigcircle
  circle(233, 203, 326);
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
  noStroke();
  fill("black");
  textSize(26.3);
  text("THE HERO'S", 150, 234);
  text("JOURNEY", 170, 272);
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
  strokeWeight(2.5);
  stroke("black");
  noFill();
  //bag
  quad(226, 23, 235, 25, 228, 41, 218, 40);
  noStroke();
  fill("black");
  //top
  quad(237, 25, 242, 27, 222, 76, 216, 75);
  //cane
  quad(248, 47, 251, 49, 235, 76, 231, 75);
  //leg
  quad(230, 43, 235, 45, 245, 76, 240, 75);
  //arm
  quad(235, 28, 240, 30, 248, 45, 243, 44);
  //hand
  quad(245, 40, 253, 42, 253, 45, 245, 44);
}
