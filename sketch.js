function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  frameRate(30);
}

function draw() {

  for (var x = 15; x < windowWidth; x += 15) {
    for (var y = 15; y < windowHeight; y += 15) {

      ellipse(x, y, 10);
      fill(random(255));



    }
  }
}
