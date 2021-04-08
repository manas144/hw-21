var d
var speed,weight;
var bullet, wall;  
var thicknessofwall
function setup() {
  createCanvas(1600,400);
speed=random(55,90)
weight=random(400,1500)
bullet = createSprite(50,200,50,50);
wall=createSprite(800,200,60,height/2);
thicknessofwall=random (22,83);
bullet.velocityX=speed;
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
 d=(0.5*speed*speed*weight)/thicknessofwall*thicknessofwall*thicknessofwall
 if (hasCollided(bullet, wall))
   bullet.velocityX=0
   if (d>10){
     bullet.shapeColor="red";
   }
   if (d<10){
     bullet.shapecolor="green"
   }
 }
  drawSprites();
 
