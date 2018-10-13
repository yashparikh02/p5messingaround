
var num = 42;
var range = 120;

var ax = [];
var ay = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
    r = random(255);
    g = random(255);
    b = random(255);
  for ( var i = 0; i < num; i++ ) {
    ax[i] = width / 2;
    ay[i] = height / 2;
  }

  frameRate(22);
}

function draw() {
  strokeWeight(3);
  background(0, 0, 0);


  // Shift all elements 1 place to the left
  for ( var i = 1; i < num; i++ ) {
    ax[i - 1] = ax[i];
    ay[i - 1] = ay[i];
  }

  // Put a new value at the end of the array
  ax[num - 1] += random(-range, range);
  ay[num - 1] += random(-range, range);

  // Constrain all points to the screen
  ax[num - 1] = constrain(ax[num - 1], 0, width);
  ay[num - 1] = constrain(ay[num - 1], 0, height);

  // Draw a line connecting the points
  for ( var j = 1; j < num; j++ ) {
    var val = j / num * 204.0 + 51;
    stroke(val);
    fill(r, g, b);
    stroke(r, g, b);
    line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
// When the user clicks the mouse
function mousePressed() {
    r = random(255);
    g = random(255);
    b = random(255);
  }
