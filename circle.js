class ShapeD {
  constructor(_xPos, _yPos, _rotation, _size) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation;
    this.size = _size;

  }

  display() {
    
    push();
    noFill();
    stroke(shapeDcolor);
    strokeWeight(10);
    strokeJoin(ROUND);
    translate(this.xPos, this.yPos);
    rotate(this.rotation)
    scale(this.size);
    circle(width * 0.15, height * 0.13, width * 0.1);
    pop();

  }

  move() {

    this.rotation++

    if (this.yPos <= height * 3) {
      this.yPos += 2;

    } else {
      this.yPos = -height * 0.1;
    }
  }

}