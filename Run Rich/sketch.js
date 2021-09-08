

var engine, world;
var book,decent,diamond,hobb,millionaire,mobile,money,party,
poorMan,poor,richman,rich,school,shooppingbag,theif,truelove,golddigger;
var bookimg,decentimg,diamondimg,golddiggerimg,hoobbimg,millionaireimg,mobileimg,moneyimg,
partyimg,poormimg,poorimg,richmimg,richimg,schoolimg,bagimg,thiefimg,loveimg,backgroundimg;
var treasurecollected=0;
var PLAY = 1
var END = 0 
var gameState = PLAY 


function preload() {
    pathImg = loadImage("images/roads.png");
  hobbimg = loadImage ("images/hobb.png");
  decentimg = loadImage("images/decent.png")
 richimg  = loadImage ("images/rich.png")
 poorimg =loadImage("images/poor.png")
 millionaireimg = loadImage ("images/millionaire.png")
  moneyimg = loadImage("images/money.png")
}
function setup (){
createCanvas(800,800)
path = createSprite(400,400)
path.addImage(pathImg)
path.velocityY=5;


girl = createSprite(70,330,20,20)
girl.addImage(hobbimg)
girl.scale=0.8;

cashG = new Group ()


}

function draw(){
 background(0);
  if (gameState === PLAY){
  girl.x = World.mouseX;
  edges=createEdgeSprites()
  girl.collide(edges)
  if(path.y>700){
    path.y=height/2
}
createCash()
if(cashG.isTouching(girl)){
  cashG.destroyEach()
  treasurecollected=treasurecollected+50;
}
if(treasurecollected>0&&treasurecollected==250){
  girl.addImage(poorimg)

}
if(treasurecollected>450&&treasurecollected==750){
  girl.addImage(richimg)
  
}
if(treasurecollected>750&&treasurecollected==1000){
  girl.addImage(millionaireimg)
  
}
if(treasurecollected>250&&treasurecollected==450){
  girl.addImage(decentimg)
  
}
  }
 drawSprites()
 textSize (20)
 fill (55)
 text("TREASURE COLLECTED = "+treasurecollected,200,40)
}

function createCash (){
if (World.frameCount%50==0){
var cash = createSprite(Math.round(random(50,750),40,10,10))
 cash.addImage(moneyimg)
 cash.scale = 0.3;
 cash.velocityY=3;
 cashG.add(cash)
}







}