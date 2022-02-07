var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombieImg;
var gameState;
var zombieGroup;
var bulletImg;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")
zombieImg = loadImage("assets/zombie.png")

bulletImg = loadImage("assets/bullet1.png")
}

function setup() {

  zombieGroup=createGroup();
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3;

   zombie = createSprite(displayWidth);

   bullet= createSprite(100, height/2, 50,50);
   bullet.addImage(bulletImg);
   bullet.scale=0.2;

   player.debug = true
   // player.debug = false
    // player.Debug =false
    // Player.debug = true

   //player.Collider("rectagle",0,0,300,300)
   //player.setcollider("rectangle",0,0)
   player.setCollider("rectangle",0,0,300,300)
  // player.Setcollider("rectangle",0,0,300,300)

}

function draw() {
  background(0);

  heading.html("Life: "+life)
  heading.style('color:red'); 
  heading.position(150,20)

  scoreboard.html("Score: "+score)
  scoreboard.style('color:red'); 
  scoreboard.position(width-200,20)
  


  fill("white");
  stroke("white")
  text("click p to start", 400,400);


  if(keyDown("p")){
    gameState=1
  }  

  if (gameState === 1) {
    game.play();
    if(keyDown("UP_ARROW")||touches.length>0){
      player.y = player.y-30
    }
    if(keyDown("DOWN_ARROW")||touches.length>0){
     player.y = player.y+30
    }
    
    
    
    
    //release bullets and change the image of shooter to shooting position when space is pressed
    if(keyWentDown("space")){
     
      player.addImage(shooter_shooting)
     
    }
    
    //player goes back to original standing image once we stop pressing the space bar
    else if(keyDown("space")){
      //player.addImage( shooter_shooting )
     // player.addImage()
      player.addImage(shooterImg)
     //player.addImage(shooter_1.png)
    
    
  }
}
  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
      


  //moving the player up and down and making the game mobile compatible using touches



    

drawSprites();
}

function zombieGroup(){
  zombie = createSprite(800,random(20,780),40,40);
  zombie.addImage(zombieImg);
  zombie.velocityX = -8;
  zombie.lifetime = 400;
 zombieGroup.add(bluebubble);
    if (frameCount % 80 === 0) {
      drawZombie();
    }
  }

  function shootBullet(){
    bullet= createSprite(150, width/2, 50,20);
    bullet.y= gun.y-20;
    bullet.addImage(bulletImg);
    bullet.scale=0.12;
    bullet.velocityX= 7;
    bulletGroup.add(bullet);
  }