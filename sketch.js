var fixedRect, movingRect;
var ball1, ball2;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(500,200,20,300);
  movingRect = createSprite(200,200,100,30);
  ball1 = createSprite(200, 200, 20, 20);
  ball1.shapeColor = "orange";
  ball2 = createSprite(200, 300, 20, 20);
  ball2.shapeColor = "purple"

  movingRect.debug = true;
  fixedRect.debug = true;
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "blue";

  ball1.velocityX = 4;
  ball2.velocityX = 3;
}


function draw() {
  
  background("black");
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //detecting collision between movingRect and fixedRect
  if(fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 &&
  movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 && 
  fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2 && 
  movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2)
  {  
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else
  {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "blue";
  }

  //detect collision and collide - yellow ball and fixed rectangle
  if(fixedRect.x - ball1.x <= fixedRect.width/2 + ball1.width/2){
    ball1.velocityX = 0;
  }
  
 //detect collision and bounce off - purple ball and fixed rectangle
 if(fixedRect.x - ball2.x <= fixedRect.width/2 + ball2.width/2){
  ball2.velocityX = -3;
} 
  drawSprites()
}