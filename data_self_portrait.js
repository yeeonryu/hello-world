let dailyStudyHoursData = [2, 3, 4, 5, 6, 3, 4, 5, 6, 2, 3, 4, 5, 6];
let dailySleepHoursData = [7, 6.5, 8, 7.5, 6, 8, 7, 8, 6.5, 7.5, 8, 7, 6, 7];

let showStudyHours = true;

function setup() {
  createCanvas(800, 400);

  if (showStudyHours) {
    drawGraph(dailyStudyHoursData, [0, 8], color(0, 128, 0));
  } else {
    drawGraph(dailySleepHoursData, [5, 9], color(255, 165, 0));
  }

  mousePressed = toggleData;
}

function drawGraph(data, marginRange, lineColor) {
  let numPoints = data.length;
  let margin = 50;
  let graphWidth = width - (2 * margin);
  let graphHeight = height - (2 * margin);

  let minMargin = marginRange[0];
  let maxMargin = marginRange[1];

  let scaleFactor = graphHeight / (maxMargin - minMargin);

  stroke(0);
  line(margin, margin, margin, height - margin);

  line(margin, height - margin, width - margin, height - margin);

  textAlign(CENTER, CENTER);
  textSize(12);
  fill(0);

  for (let i = minMargin; i <= maxMargin; i += 1) {
    let y = map(i, maxMargin, minMargin, margin, height - margin);
    text(i+" hours", margin / 2, y);
  }

  for (let i = 0; i < numPoints; i++) {
    let x = map(i, 0, numPoints - 1, margin, width - margin);
    text("day" + (i + 1), x, height - margin / 2);
  }

  stroke(lineColor);
  noFill();
  beginShape();
  for (let i = 0; i < numPoints; i++) {
    let x = map(i, 0, numPoints - 1, margin, width - margin);
    let y = map(data[i], minMargin, maxMargin, height - margin, margin);
    vertex(x, y);
    ellipse(x, y, 5, 5);
    textAlign(CENTER, BOTTOM);
    textSize(10);
    text(data[i], x, y - 15);
  }
  endShape();

  textAlign(CENTER, CENTER);
  textSize(16);
  fill(0);
  text(showStudyHours ? "Daily Study Hours" : "Daily Sleep Hours", width / 2, margin / 2);
  text("Click to view another graph", 400, 393)
}

function toggleData() {
  showStudyHours = !showStudyHours;
  background(255);
  if (showStudyHours) {
    drawGraph(dailyStudyHoursData, [0, 8], color(0, 128, 0));
  } else {
    drawGraph(dailySleepHoursData, [5, 9], color(255, 165, 0));
  }
}
