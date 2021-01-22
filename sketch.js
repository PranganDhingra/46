var walking, walkingimage;
var ghost, ghostimage, ghost1,ghost2,ghost3,ghost4,ghost5,ghost6,ghost7,ghost8,ghost9;
var bg, bgimage;
var treasurehuntimg,treasurehunt;
var zombie, zombieimg, zombie1,zombie2,zombie3,zombie4,zombie5,zombie6;
var runninggirl, runninggirlimg;
var runningboy, runningboyimg;
var key, keyimage;
var life, lifeimage;
var door, doorimage;
var map, mapimage;
var gameState,gameOver;
var score = 0;
var gameState = "choose"; 
var edges, boyend,girlend;

function preload() {
  
walkingimage=loadAnimation("walking1.jpeg","walking2.jpeg","walking3.jpeg","walking4.jpeg");
ghostimage=loadAnimation("ghost1.png","ghost2.png","ghost3.png","ghost4.png","ghost5.png","ghost6.png","ghost7.png","ghost8.png","ghost9.png")
bgimage=loadImage("bg.png");
treasurehuntimg=loadAnimation("th1.png","th2.png","th3.png","th4.png","th4.png","th4.png","th4.png");
runninggirlimg=loadAnimation("runninggirl1.png","runninggirl2.png","runninggirl3.png","runninggirl4.png","runninggirl5.png","runninggirl6.png")
runningboyimg=loadAnimation("runningboy1.png","runningboy2.png","runningboy3.png","runningboy4.png");
keyimage=loadAnimation("movingkey1.png","movingkey2.png","movingkey4.png","movingkey5.png","movingkey6.png","movingkey7.png","movingkey8.png");
lifeimage=loadImage("life.png");
doorimage=loadAnimation("od1.png","od2.png");
zombieimg=loadAnimation("z1.png","z2.png","z3.png","z4.png","z5.png","z6.png");
doorimg=loadAnimation("d1.png","d1.png","d2.png","d2.png","d3.png","d3.png","d4.png","d4.png","d5.png","d5.png","d6.png","d6.png")
mapimage=loadImage("map.jpg");
startbutton=loadImage("start.png"); 
restartbutton=loadImage("restart.png");
gameoverimge=loadImage("go.jpg")
}


function setup(){
createCanvas(1000,620)

bg= createSprite(0,0);
bg.addImage("back_ground",bgimage);
bg.velocityX=-2
bg.scale=6
bg.visible=false

edges=createEdgeSprites()
mapsprite= createSprite(0,0);
mapsprite.addImage("map",mapimage);

mapsprite.visible=false
mapsprite.scale=8

/*map= createSprite(0,0);
map.addImage("maps",mapimage);
map.velocityX=-2
map.scale=6*/
//bg.visible=false

start = createSprite(85,27,20,20);
start.addImage(startbutton);
start.scale = 2;
start.visible = false;
start.scale = 0.5;

//gameover=createSprite(500,500,50,50);
//gameover.addImage("go",gameoverimage);

restart=createSprite(414,313,20,20);
restart.addImage("button",restartbutton);
restart.scale = 2;
restart.visible = false;
restart.scale = 0.9;

zombie= createSprite(547,386,50,50);
zombie.addAnimation("zombiess",zombieimg);
zombie.addAnimation("falls",ghostimage);
zombie.addAnimation("walk",walkingimage);
zombie.scale=2;
zombie.visible=false

/*door=createSprite(457,102,50,50);
door=addAnimation("doors",doorimg);
//door.scale=2*/

/*walking= createSprite(200,400,50,50);
walking.addAnimation("walk",walkingimage);
walking.scale=2*/

treasurehunt= createSprite(331,295,50,50);
treasurehunt.addAnimation("treasure",treasurehuntimg);
treasurehunt.visible=false

/*ghost= createSprite(55,263,50,50);
ghost.addAnimation("ghost",ghostimage);
ghost.scale=2*/

runninggirl=createSprite(86,518,50,50);
runninggirl.addAnimation("running",runninggirlimg);
runninggirl.scale=0.4

runningboy=createSprite(205,500,50,50);
runningboy.addAnimation("run",runningboyimg);
runningboy.scale=0.4

//runninggirl.visible=false
//runningboy.visible=false

key= createSprite(882,275,50,50);
key.addAnimation("moving",keyimage);
key.scale=0.4
key.velocityX=-2
key.visible=false

life= createSprite(825,133,50,50);
life.addImage("point",lifeimage);
life.scale=0.1
life.velocityX=-2
life.visible=false

door= createSprite(600,476,50,50);
door.addAnimation("doors",doorimg);
door.scale=1
door.visible=false

player=createSprite(206,476,50,50);
player.visible=false
ghostgroup= new Group()

}

function draw(){
background("white")
    if (bg.x<0){
        bg.x=bg.width/2}

//background(0);
playerChoosing();
if(gameState==="play"){
spawnobstacles();

if (player.isTouching(ghostgroup)){

    gameOver.visible=true

    player.velocityY=0
    gameState="end"
    bg.velocityX=0
    ghostgroup.destroyEach()
   }

    start.visible=false
if(keyDown("space")&& player.y>325){
    player.velocityY=-10
    score += 10

}
player.velocityY = player.velocityY+ 0.8
}
  //console.log(player.y)

  

player.collide(edges[3])



//play();
//button();
//map();
//end();

drawSprites();
textSize(20);
  text("Score: "+ score, 802,47);

}



function playerChoosing(){
    if(gameState === "choose"){
        background(180);
        fill(255);
        textSize(30);
        
        text("Choose your character:", 20,230); 
        runninggirl.visible=true
    runningboy.visible=true  

    if(mousePressedOver(runninggirl)){
       // background(mapimage);
       player.visible=true
        player.addAnimation("2",runninggirlimg)
        runninggirl.destroy();
        runningboy.destroy();
        mapsprite.visible=true
       player.scale=0.5
       
        gameState = "Map"
       // map()
    }
    if(mousePressedOver(runningboy)){
        //background(mapimage);
        player.addAnimation("2",runningboyimg)
        player.scale=0.5
        runninggirl.destroy();
        runningboy.destroy();
        player.visible=true;
        mapsprite.visible=true
        gameState = "Map"
//map()
}    }
//}

//function map(){
  
    if(gameState === "Map"){
     // console.log("k")
        start.visible=true;
        mapsprite.visible=true
   // if(mousePressedOver(start)){
        gameState = "start"
        
  //  }


}
if (gameState==="start"){
    
    if(mousePressedOver(start)){
        mapsprite.visible=false
        gameState = "play"
        start.destroy();  
      // background(bgimage)
      bg.visible=true
    }

}


}

/*function button(){
    if(gameState === "button"){
        background(mapimage);
        start.visible = true; 
    }
    if(mousePressedOver(start)){
        gameState = "play"
        start.destroy();  
    }
}
*/
/*function play(){
    if (gameState==="play"){

        start.visible=false
    if(keyIsDown("UP_ARROW") ){
        player.velocityY=-10
    }
    player.velocityY = player.velocityY+ 0.8
    }
}*/

    function end(){
        if(gameState === "end"){
            restart.visible=true;
            bg.visible = false;
            player.visible = false;
            background(0);
            console.log("end");
        }
      }

      function reset(){
        gameState = "play";
        gameOver.visible = false;
        restart.visible = false;
        
        if(localStorage["HighestScore"]<score){
          localStorage["HighestScore"] = score;
        }
        console.log(localStorage["HighestScore"]);
        
        score = 0;
        
      }


function spawnobstacles(){
    if(frameCount%200===0){
    
        ghost= createSprite(1000,533,50,50);
       //ghost.addAnimation("zombie",ghostimage);
        ghost.scale=2
        ghost.velocityX=-7
        
    var rand= Math.round(random(1,2))
    switch(rand){
    case 1 : ghost.addAnimation("ghosts",ghostimage);
    break;
    
    case 2 : ghost.addAnimation("walking",walkingimage)
    break; 
    
    default: break;
    }
    ghostgroup.add(ghost);
    
    //ghost.debug=true
      ghost.setCollider("circle",0,0,40)
    }
    }

    
    