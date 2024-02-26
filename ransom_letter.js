let message = "Hello World!";

function setup() {
  createCanvas(400, 400);
  background(255);
  
  let x = 50;
  let y = height / 2;
  
  for (let i = 0; i < message.length; i++) {
    let font = random(['Arial', 'Courier New', 'Georgia', 'Helvetica', 'Verdana']);
    
    let fontSize = random(10, 50);
    textSize(fontSize);
    
    let letterWidth = textWidth(message[i]);
    
    let r = random(255);
    let g = random(255);
    let b = random(255);
    fill(r, g, b);
    
    textFont(font);
    text(message[i], x, y);
    
    x += letterWidth + 10;
  }
}
