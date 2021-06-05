var fish,fishImg,fishdImg;
var can,canImg,cansGroup;
var seed,seedImg;
var sewage,sewageImg;
var bg,bgImg;
var fishfood,fishfoodImg,foodGroup;
var heart,heartImg,heartsGroup;
var score=5;


function preload(){
  bgImg = loadImage("images/water.gif");
  fishImg = loadImage("images/fish2.png");
  sewageImg = loadImage("images/sewage.png");
  canImg = loadImage("images/can.png");
  fishfoodImg= loadImage("images/fishfood1.png");
  heartImg = loadImage("images/heart.png");
  fishdImg = loadImage("images/sadfish.png")
}
function setup(){
  createCanvas(displayWidth,displayHeight);
  //bg=createSprite(800,600);
  fish = createSprite(260,600)
  fish.addImage("fish",fishImg);
 fish.scale=0.4;

 sewage = createSprite(80,displayHeight/2);
 sewage.addImage("sewage",sewageImg);

 foodGroup=new Group();
cansGroup= new Group();
heartsGroup= new Group();

 
  
}
function draw(){
  background(bgImg);
  stroke("white");
  fill("white");
  textSize(40);
  text("Score: "+ score,displayWidth-200,displayHeight-700);

  if(keyDown(UP_ARROW)){
    fish.y = fish.y-5;

  }
  if(keyDown(DOWN_ARROW)){
    fish.y = fish.y+5;
  }
  if(keyDown(RIGHT_ARROW)){
    fish.x = fish.x+5;
  }
  if(keyDown(LEFT_ARROW)){
    fish.x = fish.x-5;
  }
  
  for(let i=0; i<foodGroup.length; i++){
    foodGroup[i].displace(foodGroup);
  }
  fish.isTouching(foodGroup,removeFood);

  for(let i=0; i<cansGroup.length; i++){
    cansGroup[i].displace(cansGroup);
  }
  fish.isTouching(cansGroup,removeCans);

  for(let i=0; i<heartsGroup.length; i++){
    heartsGroup[i].displace(heartsGroup);
  }
  fish.isTouching(heartsGroup,removeHearts);

 
  spawnCans();
  spawnFood();
  spawnheart();
if(score<=0){
  textSize(50);
  stroke("red");
  fill("yellow");
  text("Fish Dead",displayWidth/2,displayHeight/2);
  heartsGroup.setVelocityXEach(0)
  cansGroup.setVelocityXEach(0)
  foodGroup.setVelocityXEach(0)
  fish.addImage(fishdImg);
  fish.scale=0.2;
  fish.velocityY=+4;

}

  drawSprites();
}

function spawnCans(){
if(frameCount%100===0){
  can = createSprite(Math.round(random(0,displayWidth)),Math.round(random(50,displayHeight)));
  can.addImage(canImg)
  can.scale=0.4
  can.lifetime= 700;
  can.velocityX=-5;
 cansGroup.add(can);
 
}


}

function spawnFood(){
  if(frameCount%100===0){
    fishfood = createSprite(Math.round(random(0,displayWidth)),Math.round(random(50,displayHeight)));
    fishfood.addImage(fishfoodImg)
    fishfood.scale=0.2;
    fishfood.lifetime= 700;
    fishfood.velocityX=-3;
   foodGroup.add(fishfood);
  
}

}

function spawnheart(){
  if(frameCount%500===0){
    heart = createSprite(Math.round(random(0,displayWidth)),Math.round(random(50,displayHeight)));
    heart.addImage(heartImg)
    heart.scale=0.2;
    heart.lifetime= 700;
    heart.velocityX=-2;
    heartsGroup.add(heart);
  

}

}

function removeFood(sprite,foodGroup){
foodGroup.remove();
fish.scale+=0.01
score+=2

}


function removeCans(sprite,CansGroup){
  CansGroup.remove();
  fish.scale-=0.1;
  score-=3
  
  }

  function removeHearts(sprite,heartsGroup){
    heartsGroup.remove();
    score+=5;
   
    }
