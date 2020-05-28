function isTouching(movingRect,fixedRect){
    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
        && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
        && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
        && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
        return true
    }
      else {
        return false
      }
}
function bounceOff(gobject1,gobject2) {
    if (gobject2.x - gobject1.x < gobject1.width/2 + gobject2.width/2
      && gobject1.x - gobject2.x < gobject1.width/2 + gobject2.width/2){
     gobject1.velocityX=gobject1.velocityX*(-1);   
     gobject2.velocityX=gobject2.velocityX*(-1);  
  }
  if ( gobject2.y - gobject1.y < gobject1.height/2 + gobject2.height/2
      && gobject1.y - gobject2.y < gobject1.height/2 + gobject2.height/2) {
        gobject1.velocityY=gobject1.velocityY*(-1);   
        gobject2.velocityY=gobject2.velocityY*(-1); 
        /*movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";*/
  }
  }