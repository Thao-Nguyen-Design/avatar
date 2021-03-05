class ShapeC {
  constructor(_xPos, _yPos, _rotation, _size) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation;
    this.size = _size;

  }

  display() {

    push();
    noFill();
    stroke(shapeCcolor);
    strokeWeight(10);
    strokeJoin(ROUND);
    translate(this.xPos, this.yPos);
    rotate(this.rotation)
    scale(this.size);
    line(width * 0.1, height * 0.1, width * 0.2, height * 0.2);
    line(width * 0.2, height * 0.1, width * 0.1, height * 0.2);
    pop();

  }

  move() {

    this.rotation++

    if (this.yPos <= height * 2) {
      this.yPos += 2;

    } else {
      this.yPos = -height * 0.3;
    }
  }

}