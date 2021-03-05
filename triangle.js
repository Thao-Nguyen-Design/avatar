class ShapeA {
  constructor(_xPos, _yPos, _rotation, _size) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation;
    this.size = _size;
  }

  display() {
    
    push();
    fill(shapeAcolor);
    stroke(shapeAcolor);
    strokeWeight(15);
    strokeJoin(ROUND);
    translate(this.xPos, this.yPos);
    rotate(this.rotation)
    scale(this.size);
    triangle(width * 0.15, height * 0.13, width * 0.11, height * 0.2, width * 0.19, height * 0.2);
    pop();

  }

  move() {

    this.rotation++
    if (this.yPos <= height * 2) {
      this.yPos += 2;

    } else {
      this.yPos = -height * 0.2;
    }
  }


}
