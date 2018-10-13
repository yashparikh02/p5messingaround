
var xspacing = 10;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0.0;      // Start angle at 0
var amplitude; // Height of wave
var period = 500.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave

function setup() {
  createCanvas(710, 400);
  w = width+16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));
  amplitude= Math.floor(Math.random() * ((2-1)+1) + 2);

  setInterval(function() {
           amplitude= Math.floor(Math.random() * ((2-1)+1) + 2);
      }, 3000);
r = random(255);
g = random(255);
b = random(255);
}

function draw() {
  background(0);
  calcWave();
  renderWave();
}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.02;


  // For every x value, calculate a y value with sine function
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude*100*sin(2*x)*sin(4*x)*cos(x/2)^2;
    x+=dx;
  }
}

function renderWave() {
  noStroke();
  fill(r,g,b);

  // A simple way to draw the wave with an ellipse at each location
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(x*xspacing, height/2+yvalues[x], 6, 6);
  }
}

function mousePressed() {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
