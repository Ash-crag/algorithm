var fixedbox, movingbox

function setup() {
  createCanvas(800, 400);
  movingbox = createSprite(400, 200, 50, 50);
  movingbox.shapeColor = 'green'

  fixedbox = createSprite(100, 100, 30, 40)
  fixedbox.shapeColor = 'green'

}

function draw() {
  background(0);

  movingbox.x = World.mouseX
  movingbox.y = World.mouseY

if(movingbox.x - fixedbox.x < movingbox.width/2 + fixedbox.width/2
  &&fixedbox.x - movingbox.x < movingbox.width/2 + fixedbox.width/2
  &&movingbox.y - fixedbox.y < movingbox.height/2 + fixedbox.height/2
  &&fixedbox.y - movingbox.y < movingbox.height/2 + fixedbox.height/2){

    fixedbox.shapeColor = 'red'
    movingbox.shapeColor = 'red'
  }
else{
  fixedbox.shapeColor = 'green'
  movingbox.shapeColor = 'green'


}
  

  drawSprites();


}