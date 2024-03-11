let pet;

function setup() {
  createCanvas(400, 400);
  pet = new VirtualPet();
  setInterval(interactWithPet, 15000);
}

function draw() {
  background(220);
  pet.display();
}

function interactWithPet() {
  let interaction = floor(random(4));
  switch (interaction) {
    case 0:
      pet.feed();
      break;
    case 1:
      pet.play();
      break;
    case 2:
      pet.sleep();
      break;
    case 3:
      pet.pet();
      break;
  }
}

class VirtualPet {
  constructor() {
    this.health = 100;
    this.happiness = 100;
    this.state = "Happy";
    this.x = width / 2;
    this.y = height / 2;
  }

  display() {
    textSize(20);
    fill(0);
    text(`Health: ${this.health}`, 20, 50);
    text(`Happiness: ${this.happiness}`, 20, 80);
    text(`State: ${this.state}`, 20, 110);

    fill(240, 204, 170);
    ellipse(this.x, this.y + 10, 90, 80);
    ellipse(this.x - 20, this.y - 50, 30, 60);
    ellipse(this.x + 20, this.y - 50, 30, 60);
    fill("black");
    ellipse(this.x - 20, this.y, 20, 20);
    ellipse(this.x + 20, this.y, 20, 20);
    fill("white");
    circle(this.x - 20, this.y - 5, 7);
    circle(this.x + 20, this.y - 5, 7);
    fill("pink");
    circle(this.x, this.y + 20, 10);
  }

  feed() {
    this.health += 10;
    this.happiness += 5;
    this.checkStatus();
    this.updateState();
  }

  play() {
    this.health -= 5;
    this.happiness += 15;
    this.checkStatus();
    this.updateState();
  }

  sleep() {
    this.health += 15;
    this.happiness += 10;
    this.checkStatus();
    this.updateState();
  }

  pet() {
    this.happiness += 20;
    this.checkStatus();
    this.updateState();
  }

  checkStatus() {
    if (this.health > 100) {
      this.health = 100;
    }
    if (this.happiness > 100) {
      this.happiness = 100;
    }
    if (this.health <= 0) {
      this.health = 0;
      this.state = "Unhealthy";
    }
    if (this.happiness <= 0) {
      this.happiness = 0;
      this.state = "Sad";
    }
  }

  updateState() {
    if (this.state !== "Unhealthy" && this.state !== "Sad") {
      if (this.health < 50 || this.happiness < 50) {
        this.state = "Neutral";
      } else {
        this.state = "Happy";
      }
    }
  }
}
