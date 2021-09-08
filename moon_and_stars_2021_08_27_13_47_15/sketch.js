
function preload(){
 starImg = loadImage("star1.png")
  
}
  
function setup(){
 
  createCanvas(400,600);
// Moving background
star=createSprite(200,200, 20, 20)
  star.addImage(starImg)
}

function draw() {

  drawSprites();
  
  
}

