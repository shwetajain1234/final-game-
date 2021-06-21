


var mon,mon_fly;
var ground, groundImage;
var cloud,cloudImage,cloudGroup;
var girl,girlImage;

function preload(){
    mon_fly=
    loadAnimation("images/mons1.png","images/mons2.png","images/mons3.png","images/mons4.png")
    cloudImage=loadImage("images/thecloud1.png");
girlImage=loadAnimation("images/girl1.png","images/girl2.png","images/girl3.png","images/girl4.png","images/girl6.png","images/girl7.png","images/girl8.png")
    
}


function setup(){
    createCanvas(1200,800)
    

    mon=createSprite(100,250,20,50);
    mon.addAnimation("flying",mon_fly);
    mon.scale=0.5;

    ground=createSprite(600,800,1200,800)
    ground.shapeColor="#814D25"
    ground.velocityX=-3
    
   

    girl=createSprite(50,350,20,50);
    girl.addAnimation("running",girlImage);
    girl.scale=0.5

   cloudGroup=createGroup()
    
    
}

function draw(){
    background("#B7EDEF");

   
 

spawnClouds()
    drawSprites()
}

function spawnClouds(){
if(frameCount% 250===0){
   
     cloud=createSprite(1200,50,50,50)
     cloud.shapeColor="white"
     cloud.y=Math.round(random(50,180));
     cloud.addImage(cloudImage);
     cloud.velocityX=-2;
     cloud.scale=0.4

     cloud.lifetime=600;
    
     cloudGroup.add(cloud)
}
}