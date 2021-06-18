function setup() {
  createCanvas(1600, 1600);
}

var yOffset = 0.0;

function draw() {
  background(100);

  var radius = 300;

  translate(width / 2, height / 2);

  beginShape();

  var xOffset = 0;

  for (var a = 0; a < TWO_PI; a += 0.1) {
    var offset = map(noise(xOffset, yOffset), 0, 1, -25, 25);

    var rad = radius + offset;
    var x = cos(a) * rad;
    var y = sin(a) * rad;

    vertex(x, y);

    xOffset += 0.1;
  }
  endShape();

  yOffset += 0.1;
}
