//bouncing Off using function with arguments
var fixedRect, movingRect,object1,object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(0, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityX=5
  movingRect = createSprite(1200,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX=-5;
  object1=createSprite(600,0,50,80);
  object1.shapeColor = "green";
  object1.debug=true;
  object1.velocityY=5;
  object2=createSprite(600,800,50,80);
  object2.shapeColor = "green";
  object2.debug=true;
  object2.velocityY=-5;
}

function draw() {
  background(0,0,0);  
  /*movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;*/


  /*else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }*/
  bounceOff(fixedRect,movingRect);
  bounceOff(object1,object2);
  drawSprites();
}
