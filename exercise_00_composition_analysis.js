let img;
function preload() {
  img = loadImage('https://www.slam.org/wp-content/uploads/piction/image-cache/7217-elvira-resting-at-a-table.jpg');
}

function setup() {
  createCanvas(300, 450);
}

function draw() {
  background(220);
  img.resize(300, 450);
  image(img, 0, 0);
  noStroke();
  //wall
  fill('#bbd6b2')
  quad(0, 0, 450, 0, 300, 300, 0, 300);
  //floor
  fill('#704701')
  quad(0, 300, 450, 250, 450, 450, 0, 450);
  //neck
  fill('#edb18c');
  triangle(80, 150, 120, 85, 150, 140);
  //desk
  fill('#472a18');
  quad(195, 115, 300, 115, 300, 350, 250, 350); 
  //desk leg
  quad(260, 350, 290, 350, 290, 450, 260, 450); 
  //top
  fill('black')
  quad(60, 150, 225, 127.5, 165, 315, 68, 315);
  //bottom
  quad(67.5, 315, 180, 315, 225, 450, 30, 450);
  fill('#212121');
  //left arm
  quad(25, 190, 60, 170, 95, 365, 65, 400);
  //left hand
  fill('#f7c3a3');
  quad(76, 385, 95, 365, 165, 420, 120, 430);
  //face
  ellipse(135, 83, 70, 95);
  //bun
  fill('black');
  ellipse(140, 50, 80, 40);
  ellipse(145, 30, 70, 60);
  //right hand
  fill('#e3a47d');
  quad(143, 130, 170, 85, 190, 155, 170, 175);
  //dish
  fill('white');
  ellipse(300, 160, 70, 50);
  //eyes
  fill('#3b3b3b');
  ellipse(125, 75, 20, 7);
  ellipse(160, 80, 20, 7);
  //nose
  fill('#e3a47d');
  ellipse(140, 90, 5, 38);
  //lip
  fill('#a84343');
  ellipse(135, 115, 25, 5);






}
