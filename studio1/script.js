// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("this is a js comment");


/*var bg;
function setup() {
  bg = loadImage("banner_icons_1.png");
  createCanvas(800, 250);
}
    
function draw() {
  background(bg);
}*/
    
function setup() {
  // here we use a callback to display the image after loading
  createCanvas(800, 250);
  background(255);
}

function draw(){
    loadImage("banner_icons_1.png", function(img) {
    image(img, 10, 100, height/2, img.width/2, img.height/2);
  });
}