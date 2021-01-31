var backGround, backGroundImg;
var cat, catImg1, catImg2, catImg3;
var mouse, mouseImg1, mouseImg2, mouseImg3;
function preload() {
    //load the images here
    backGroundImg = loadImage("images/garden.png");

    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");

    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");
    
    
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    //create tom and jerry sprites here
    backGround = createSprite(windowWidth/2 ,windowHeight-368);
    backGround.addImage("garden", backGroundImg);
    backGround.scale = 1;
    
    cat = createSprite(1100,windowHeight-130);
    cat.addAnimation("catresting", catImg1);
    cat.scale = 0.1;

    mouse = createSprite(400, windowHeight-130);
    mouse.addAnimation("mouse", mouseImg1);
    mouse.scale = 0.1;

}

function draw() {

    background(255);
    
    //Write condition here to evalute if tom and jerry collide

    keyPressed();
    
    if (cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        mouse.addAnimation("mouseLastImage",mouseImg3);
        mouse.changeAnimation("mouseLastImage");

        cat.addAnimation("catLastImage",catImg3);
        cat.changeAnimation("catLastImage");
        cat.velocityX = 0;;
        cat.x = 450;
    }
        
    
        
    
        
    
 



    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning", catImg2);
      cat.changeAnimation("catRunning");

      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation("mouseTeasing");
  }


}
