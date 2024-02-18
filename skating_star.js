let x, y;
let speedX, speedY;
let d = 20;

function setup() {
    createCanvas(400, 400);
    x = random(d, width - d);
    y = random(d, height - d);
    speedX = random(-2, 2);
    speedY = random(-2, 2);
}

function draw() {
    background(220);

    x += speedX;
    y += speedY;

    if (x <= (20 + d) / 2 || x >= width - (20 + d) / 2) {
        speedX *= -1;
        x = constrain(x+40, (20 + d) / 2, width - (20 + d) / 2-40);
    }
    if (y <= (20 + d) / 2 || y >= height - (20 + d) / 2-20) {
        speedY *= -1;
        y = constrain(y+40, (20 + d) / 2, height - (20 + d) / 2 -20);
    }

    star(x, y, 20 + d, d, 5);

    function star(x, y, r1, r2, npoints) {
        let angle = TWO_PI / npoints;
        let halfAngle = angle / 2.0;
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
            let sx = x + cos(a) * r2;
            let sy = y + sin(a) * r2;
            vertex(sx, sy);
            sx = x + cos(a + halfAngle) * r1;
            sy = y + sin(a + halfAngle) * r1;
            vertex(sx, sy);
        }
        endShape(CLOSE);
    }
}
