// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("this is a js comment");

function setup() {
  // here we use a callback to display the image after loading
  createCanvas(800, 250);
  background(255);
}

function draw(){
    loadImage("banner_icons_1.png", function(img) {
    image(img, 0, 1, img.width/2, img.height/2);
  });
    
    loadImage("banner_icons_2.png", function(img) {
    image(img, 300, 1, img.width/2, img.height/2);
  });
    
    loadImage("banner_icons_3.png", function(img) {
    image(img, 400, 1, img.width/2, img.height/2);
  });
}