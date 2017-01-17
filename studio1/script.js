// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("this is a js comment");

var cnv;
function setup() {
  // here we use a callback to display the image after loading
  cnv = createCanvas(800, 250);
  cnv.mouseOver(changeBack);
  background(255);   
}

function draw(){
    
    ellipse(mouseX, mouseY);
    fill (0);  
    
    loadImage("banner_icons_1.png", function(img) {
    image(img, 50, 1, img.width/2, img.height/2);
  });
    
    loadImage("banner_icons_2.png", function(img) {
    image(img, 250, 1, img.width/2, img.height/2);
  });
    
    loadImage("banner_icons_3.png", function(img) {
    image(img, 480, 1, img.width/2, img.height/2);
  });   
}

function changeBack(){
    background (0);
}