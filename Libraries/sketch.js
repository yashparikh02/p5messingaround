var xoff=500 ;
var yoff=100 ;
var bugs = [] ;

function setup() {
  createCanvas(windowWidth,windowHeight); // windowWidth,windowHeight);
    for (var i=0; i<200; i++) {
  bugs.push(new square());
}
}

function draw() {
  background(100,70,60);

for (var i=0; i<bugs.length; i++) {
  bugs[i].display();
  //rotate(radians(20));
}


}

function square() {
  var xoff = Math.random() * 1000;
  var yoff = Math.random() * 1000;
  var x = map(noise(xoff),0,0,0, width);
  var y= map(noise(yoff), 0,0,0, height);


    this.display = function() {
      fill(255, 0, 0, 50);
      noStroke()
      rect(x,y, 20, 20);
      yoff += Math.random()/100;
      xoff -= Math.random()/100;
      x = map(noise(xoff),0,1,0, width);
      y = map(noise(yoff),0,1,0, height);


    };
  }
