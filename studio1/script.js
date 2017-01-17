// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("this is a js comment");

function setup() {
  // here we use a callback to display the image after loading
  createCanvas(800, 250);
  background(255);
  img = createImage(230, 230);
  img.loadPixels();
  for(var x = 0; x < img.width; x++) {
    for(var y = 0; y < img.height; y++) {
      var a = map(y, 0, img.height, 255, 0);
      img.set(x, y, [255, a]); 
    }
  }
  img.updatePixels();
}

function draw(){
   background(0);
   image(img, 90, 80);
   image(img, mouseX-img.width/2, mouseY-img.height/2);
    
    loadImage("banner_icons_1.png", function(img) {
    image(img, 80, 1, img.width/2, img.height/2);
  });
    
    loadImage("banner_icons_2.png", function(img) {
    image(img, 280, 1, img.width/2, img.height/2);
  });
    
    loadImage("banner_icons_3.png", function(img) {
    image(img, 480, 1, img.width/2, img.height/2);
  });
}