function setup() {
  createCanvas(450, 750);
}

function draw() {
  background('#f0e6da');
  for (var j = 0; j < 23;) {
    for (var i = 0; i < 13; i++) {
      var x = i * 25 + 35;
      var y = 25*j+25;
      var d = 25;
      noFill();
      rect(x*((i*0.009)+(1+j*0.0035)), y*((i*0.005)+1+j*0.00000000145), d, d);
    }
    j+=2;
  }
  for (var j = 0; j < 23;) {
    for (var i = 0; i < 13; i++) {
      var x = i * 25 + 35;
      var y = 25*j+50;
      var d = 25;
      noFill();
      rect(x*((i*0.009)+(1-j*0.0035)), y*((i*0.005)+1+j*0.0001), d, d);
    }
    j+=2;
  }
}
