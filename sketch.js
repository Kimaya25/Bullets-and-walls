var bullet,wall;
var speed, weight;


function setup() {
  createCanvas(1600,1600);
  speed = random(55,90);
  weight = random(400,1500)

  bullet = createSprite(40,50,200,60);
  bullet.velocityX = speed;
  wall = createSprite(1500,20,60,height/2);
  wall.shapeColor = color(rgb(80,80,80));
 
}

function draw() {
  background(0);  
  
/*
if(wall.x - car.x < (car.width + wall.width)/2){
   car.velocityX = 0;
   var deformation = 0.5 * weight * speed * speed/22509;
   if(deformation > 180){
     car.shapeColor = color(rgb(255,0,0));
   }

   if(deformation <180 && deformation > 100){
      car.shapeColor = color(rgb(230,230,0));
   }

   if(deformation < 100){
     car.shapeColor = color(rgb(120,230,0));
   }*/

   if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(40,70* 40,70 * 40,70);

    if(damage>10){

      wall.shapeColor = color(rgb(255,0,0));
    }

  if(damage<10){

    wall.shapeColor = color(rgb(0,255,0));
  }
  }



drawSprites();
}
function hasCollided(lbullet, lwall){
  
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}

