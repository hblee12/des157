// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("this is a js comment");

var cnv;
function setup() {
  // here we use a callback to display the image after loading
  cnv = createCanvas(800, 250);
  cnv.parent('mySketch');
  cnv.mouseOver(changeBack);
  cnv.mouseOut(changeBlank);
}

function draw(){ 
    
    loadImage("studio1/banner_icons_1.png", function(img) {
    image(img, 50, 1, img.width/2, img.height/2);
  });
    
    loadImage("studio1/banner_icons_2.png", function(img) {
    image(img, 250, 1, img.width/2, img.height/2);
  });
    
    loadImage("studio1/banner_icons_3.png", function(img) {
    image(img, 480, 1, img.width/2, img.height/2);
  });
    
    if (mouseX > 72) && (mouseX < 144){
    
        loadImage("studio1/banner_icons_2.png", function(img) {
        image(img, 50, 1, img.width/2, img.height/2);
        });
    }
    
}

function changeBack(){
    loadImage("studio1/banner_gradient.png", function(img) {
    image(img, 0,0)
  });
}

function changeBlank(){
    loadImage("studio1/banner_gradient_2.png", function(img) {
    image(img, 0,0)
  });
}
