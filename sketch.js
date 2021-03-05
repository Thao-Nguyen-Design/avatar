let circlesize;
let squaresize;
let mic;
let micLevel;
let withinBounds;

let change1 = false;
let change2 = false;
let change3 = false;
let change4 = false;

let shapeAarray = [];
let shapeBarray = [];
let shapeCarray = [];
let shapeDarray = [];

let sketchStarted = false;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  frameRate(90);


  for (let i = 0; i <= 3; i++) {
    shapeAarray[i] = new ShapeA(random(1, 11) * width * 0.1,
      random(1, 10) * width * 0.1,
      random(360),
      random(10) * 0.2);
  }

  for (let i = 0; i <= 3; i++) {
    shapeBarray[i] = new ShapeB(random(1, 12) * width * 0.1,
      random(1, 20) * width * 0.6,
      random(360),
      random(10) * 0.2);
  }

  for (let i = 0; i <= 3; i++) {
    shapeCarray[i] = new ShapeC(random(1, 13) * width * 0.1,
      random(1, 15) * width * 0.5,
      random(360),
      random(10) * 0.2);
  }

  for (let i = 0; i <= 3; i++) {
    shapeDarray[i] = new ShapeD(random(1, 9) * width * 0.1,
      random(1, 5) * width * 0.3,
      random(360),
      random(10) * 0.2);
  }


  //colors
  skin = color(255, 233, 208);
  black = color(50);
  blush = color(255, 146, 136);
  white = color(255, 255, 255);

  bgBlue = color(114, 211, 254);
  bg1 = color(164, 207, 180); //green
  bg2 = color(224, 187, 227); //purple
  bg3 = color(238, 185, 163); //orange
  bg4 = color(243, 176, 194); //pink

  shapeAcolor = color(224, 255, 222); //green
  shapeBcolor = color(255, 254, 222); //yellow
  shapeCcolor = color(255, 222, 241); //pink
  shapeDcolor = color(199, 255, 253); //lightblue

  //audio input
  createButton("Start").mousePressed(startSketch);

}


function startSketch(){
  mic = new p5.AudioIn();
  mic.start();
  micLevel = mic.getLevel();
  sketchStarted = true;
}


function draw() {
  if(sketchStarted){
  //react to audio
  circlesize = map(mic.getLevel(), 0, 0.06, width * 0.02, width * 0.04, [withinBounds]);
  squaresize = map(mic.getLevel(), 0, 0.04, width * 0.2, width * 0.9, [withinBounds]);


  Background();

  for (i = 0; i < shapeAarray.length; i++) {
    shapeAarray[i].display();
    shapeAarray[i].move();
  }


  for (i = 0; i < shapeBarray.length; i++) {
    shapeBarray[i].display();
    shapeBarray[i].move();
  }


  for (i = 0; i < shapeCarray.length; i++) {
    shapeCarray[i].display();
    shapeCarray[i].move();
  }


  for (i = 0; i < shapeDarray.length; i++) {
    shapeDarray[i].display();
    shapeDarray[i].move();
  }


  BackSquare(squaresize);
  Face();
  Blush();
  Eyes();
  Glasses();
  Nose();
  LeftHighlights(circlesize);
  RightHighlights(circlesize);
  Hair();

}
}

function Background() {
  if (change1 == true) {
    background(bg1)
  } else if (change2 == true) {
    background(bg2)
  } else if (change3 == true) {
    background(bg3)
  } else if (change4 == true) {
    background(bg4)
  } else {
    background(bgBlue)
  }
}

function mousePressed() {

  if (mouseX < width * 0.5 && mouseY < height * 0.5) {
    change1 = !change1;

  } else if (mouseX > width * 0.5 && mouseY < height * 0.5) {
    change2 = !change2;

  } else if (mouseX < width * 0.5 && mouseY > height * 0.5) {
    change3 = !change3;

  } else if (mouseX > width * 0.5 && mouseY > height * 0.5) {
    change4 = !change4;
  } else {
    background(bgBlue)
  }
}

function BackSquare(squaresize) {
  push();
  noFill();
  strokeWeight(15);
  stroke(white);
  square(width / 2, height / 2, squaresize);
  pop();
}

function Face() {
  fill(skin);
  noStroke();
  beginShape();
  vertex(width * 0.6, height * 0.2);
  vertex(width * 0.3, height * 0.35);
  vertex(width * 0.2, height * 0.55);
  vertex(width * 0.25, height * 0.7);
  vertex(width * 0.35, height * 0.8);
  vertex(width * 0.5, height * 0.85);
  vertex(width * 0.65, height * 0.85);
  vertex(width * 0.75, height * 0.8);
  vertex(width * 0.8, height * 0.7);
  vertex(width * 0.85, height * 0.5);
  vertex(width * 0.75, height * 0.3);
  endShape(CLOSE);
}

function Blush() {
  noStroke();
  fill(blush)
  blush.setAlpha(255 + (sin(frameCount) * 255));
  circle(width * 0.4, height * 0.67, width * 0.15);
  circle(width * 0.8, height * 0.54, width * 0.15);
}

function Eyes() {
  fill(black);
  noStroke();

  //left eye
  circle(width * 0.42, height * 0.57, width * 0.1);

  //right eye
  circle(width * 0.72, height * 0.47, width * 0.1);

}

function Glasses() {
  noFill();
  stroke(black);
  strokeWeight(4);

  //left frame
  circle(width * 0.72, height * 0.47, width * 0.2);

  //right frame
  circle(width * 0.42, height * 0.57, width * 0.22);
}

function Nose() {
  fill(255, 146, 136);
  noStroke();
  circle(width * 0.62, height * 0.57, width * 0.06);
}

function LeftHighlights(circlesize) {
  fill(white);
  circle(width * 0.44, height * 0.54, circlesize);
  circle(width * 0.41, height * 0.59, circlesize / 1.5);
}

function RightHighlights(circlesize) {
  fill(white);
  circle(width * 0.74, height * 0.44, circlesize);
  circle(width * 0.71, height * 0.49, circlesize / 1.5);
}

function Hair() {

  fill(black);
  noStroke();

  beginShape();
  vertex(width * 0.6, height * 0.2);
  vertex(width * 0.35, height * 0.4);
  vertex(width * 0.3, height * 0.7);
  vertex(width * 0.45, height * 0.95);
  vertex(width * 0.25, height * 0.95);
  vertex(width * 0.15, height * 0.8);
  vertex(width * 0.1, height * 0.6);
  vertex(width * 0.15, height * 0.3);
  vertex(width * 0.35, height * 0.1);
  vertex(width * 0.7, height * 0.1);
  vertex(width * 0.85, height * 0.3);
  vertex(width * 0.95, height * 0.6);
  vertex(width * 0.9, height * 0.9);
  vertex(width * 0.75, height * 0.95);
  vertex(width * 0.8, height * 0.75);
  vertex(width * 0.82, height * 0.55);
  vertex(width * 0.8, height * 0.4);
  endShape(CLOSE);

}
