var player,playerImg;
var ground,groundImg;
var stone,stoneImg,stoneGroup;
var key, keyImg1,keyImg2,keyGroup;
var glassImg,glovesImg;

function preload(){
  playerImg= loadAnimation("Player/sprite0.png","Player/sprite1.png","Player/sprite2.png","Player/sprite3.png","Player/sprite4.png","Player/sprite5.png","Player/sprite6.png","Player/sprite7.png")
  groundImg= loadImage("ground (1).jpg");
  stoneImg=loadImage("stone.png");
  keyImg1= loadImage("Key.png");
  keyImg2= loadImage("Key1.png");
  glovesImg= loadImage("gloves.png");
  glassImg=loadImage("glass.png");
}
function setup() {
  createCanvas(450,550);

  ground= createSprite(200,200,800,600);
  ground.addImage(groundImg);
  ground.scale=1;
  ground.velocityY=-6;

  player=createSprite(200, 100, 50, 50);
  player.addAnimation("play",playerImg);
  player.scale=0.5;

 stoneGroup= new Group();
 keyGroup= new Group();

}

function draw() {
  background("lightblue");
  if(ground.y<400){
    ground.y=ground.height/2
  }  

  spawnStones();
  spawnKeys();
  drawSprites();
}

function spawnKeys(){
  if(frameCount%60===0){
    key= createSprite(random(100,350),550,10,10);
    var rand=Math.round(random(1,4));
    switch(rand){
      case 1 : key.addImage(keyImg1);
      break;
      case 2 : key.addImage(keyImg2);
      break;
      case 3 : key.addImage(glassImg);
      break;
      case 4 : key.addImage(glovesImg);
      break;
      default: break
    }
    key.velocityY=-6;
    key.scale=0.1;
    key.lifetime=600;
    keyGroup.add(key);
  }
}
function spawnStones(){
  if(frameCount%200===0){
    stone= createSprite(random(100,350),550,10,10);
    stone.addImage(stoneImg);
    stone.velocityY=-6;
    stone.scale=0.1;
    stone.lifetime=600;
    stoneGroup.add(stone);
  }
}