const FIGURESIZE = 500
const SIDES = 6


function setup() {
  createCanvas(530, 530, SVG);
  background('white')
  noLoop();
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  noFill()
  stroke(0)
  push()
    translate(width/2, height/2)
    ellipse(0,0,FIGURESIZE,FIGURESIZE)
    for(let i=0; i < SIDES; i++){
      line(0,0,0,FIGURESIZE/2)
      rotate(360/SIDES)
    }
    
  pop()
}