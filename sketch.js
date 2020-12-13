var boy,boyImage,bgs,bgi,enemyim
var enemyGroup,gameState

function preload (){
boyImage=loadAnimation("images/boy_1-removebg-preview.png","images/boy2-removebg-preview.png","images/boy3-removebg-preview.png","images/boy4-removebg-preview.png")
bgi=loadImage("images/background.jpg")
enemyim=loadAnimation("images/enemy2.png","images/enemy3.png","images/enemy4.png","images/enmy5.png")

}
function setup (){
  createCanvas (1200,600)
  bgs=createSprite(600,-10,1200,400)
  bgs.scale=3
  boy =createSprite(200,200,10,10)
  boy.addAnimation("boyrunning",boyImage)
  
 bgs.addImage(bgi)
 
  bgs.x=bgs.width/2
  bgs.velocityX=-5;
  enemyGroup=new Group()
  gameState="play"
  }


function draw (){
background("black")


if (gameState==="play") {
  if (bgs.x<0) {
    bgs.x=width/2
  }
  spawnEnemy();
  jump();
  if (enemyGroup.isTouching(boy)) {
    gameState="end"
  }
}
 else if (gameState==="end") {
   
 }




edges=createEdgeSprites()
boy.collide(edges[3])









  drawSprites()



}


function jump(){
  if (keyDown("space")) {
    boy.velocityY=-20
  }
boy.velocityY=boy.velocityY+0.8

}
if (boy.isTouching) {
  
}