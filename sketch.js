var ob1,ob2;


function setup(){
  createCanvas(400,400)
ob1= createSprite(100,100,10,30);
ob2=createSprite(300,300,10,30);
ob1.shapeColor='blue';
ob2.shapeColor='green';

}
function draw()
{
  background(0);
if(isTouching(ob1,ob2)){
  ob1.shapeColor='red';
  ob2.shapeColor='red';

}else {
  ob1.shapeColor='blue';
ob2.shapeColor='green';
}
  drawSprites();
}