let particles = [];

function setup() {
  createCanvas(800, 600);
  stroke(255);
  strokeWeight(4);
}

function draw() {
  background(0);
  
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }
}

function mousePressed() {
  explode(mouseX, mouseY);
}

function explode(x, y) {
  let particleCount = 100;
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle(x, y));
  }
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(1, 6));
    this.acc = createVector(0, 0.2); 
    this.lifespan = 255;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.lifespan -= 4;
  }

  finished() {
    return this.lifespan < 0;
  }

  show() {
    stroke(255, this.lifespan);
    point(this.pos.x, this.pos.y);
  }
}
