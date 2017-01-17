// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("this is a js comment");


var cnv;
var dim;
var d;
var g;
function setup() {
  // here we use a callback to display the image after loading
  cnv = createCanvas(800, 250);
  background(255);
  cnv.mousePressed(drawGradient);
  dim = width/2;
  background(0);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  ellipseMode(RADIUS);
  frameRate(1);    
}

function draw(){
    
    loadImage("banner_icons_1.png", function(img) {
    image(img, 50, 1, img.width/2, img.height/2);
  });
    
    loadImage("banner_icons_2.png", function(img) {
    image(img, 250, 1, img.width/2, img.height/2);
  });
    
    loadImage("banner_icons_3.png", function(img) {
    image(img, 480, 1, img.width/2, img.height/2);
  });
    
  background(0);
  for (var x = 0; x <= width; x+=dim) {
    drawGradient(x, height/2);
  }     
}

function drawGradient(x,y) {
  var radius = dim/2;
  var h = random(0, 360);
  for (var r = radius; r > 0; --r) {
    fill(h, 90, 90);
    ellipse(x, y, r, r);
    h = (h + 1) % 360;
  }
}
