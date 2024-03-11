let spring;

function setup() {
  createCanvas(600, 400);
  spring = new Spring(width / 2, height / 2, height / 4);
}

function draw() {
  background(220);
  spring.update(mouseX, mouseY);
  spring.display();
}

function mousePressed() {
  spring.move(mouseX, mouseY);
}

class Spring {
  constructor(x, y, restPosition) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.restPosition = restPosition;
    this.damping = 0.9;
    this.stiffness = 0.1;
  }

  move(targetX, targetY) {
    this.position.x = targetX;
    this.position.y = targetY;
  }

  update(targetX, targetY) {
    let displacement = createVector(targetX - this.position.x, targetY - this.position.y);
    let force = p5.Vector.mult(displacement, this.stiffness);
    this.velocity.add(force);
    this.velocity.mult(this.damping);
    this.position.add(this.velocity);
  }

  display() {
    stroke(0);
    fill(175);
    rectMode(CENTER);
    rect(this.position.x, this.position.y, 20, this.restPosition);
  }
}
