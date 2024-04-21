function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}
function draw() {
  background(20, 20, 20,);
  for (var y = 0; y <= 1000; y += 500) {
    for (var x = 0; x <= 1000; x += 500) {
      noFill();
      stroke(55, 147, 206);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      circle(0, 0, 500);
    }
  }
}