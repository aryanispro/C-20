var rect1,rect2;

function setup() {
  createCanvas(1366,720);
  rect1 = createSprite(400, 200, 30, 50);
  rect1.shapeColor = "blue";
  rect2 = createSprite(200,150,80,50);
  rect2.shapeColor = "red";
}

function draw() {
  background("lightblue");  

  rect1.x = World.mouseX;
  rect1.y = World.mouseY;

  if(rect1.x - rect2.x <(rect1.width/2 + rect2.width/2)&& rect2.x  - rect1.x <(rect1.width/2 + rect2.width/2)&& rect1.y - rect2.y <(rect1.height/2 + rect2.height/2)&&rect2.y - rect1.y <(rect1.height/2 + rect2.height/2)){
    rect1.shapeColor="purple";
    rect2.shapeColor="purple";
  }else{
    rect1.shapeColor = "blue";
    rect2.shapeColor = "red";
  }


  drawSprites();
}