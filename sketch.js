var score=0;

var bg,bg2;
var umbrella, umbrellaImg;
var raindrop, raindropImg;
var robotGroup,raindropGroup;
var robot1, robot1Img, robot2, robot2Img, robot5, robot5Img,robot7, robot7Img;
var greycloud,greycloud1,greycloud2,greycloud3,greycloud4,greycloud5,greycloud6, greycloudImg;

function preload() {
 
  
  bg= loadImage("images/bg.jpg");
  bg2=loadImage("images/bg2.jpg")

  umbrellaImg=loadImage("images/umbrella.png");
  
  robot1Img=loadImage("images/robot1.png");
  robot2Img=loadImage("images/robot2.png");
  robot3Img=loadImage("images/robot3.png");
  robot4Img=loadImage("images/robot4.png");
  robot5Img=loadImage("images/robot5.png");
  robot6Img=loadImage("images/robot6.png");
  robot7Img=loadImage("images/robot7.png");

  raindropImg=loadImage("images/raindrop.png");

  greycloudImg=loadImage("images/greycloud.png");
  
}

function setup() {
  createCanvas(1000,500);
  
  umbrella=createSprite(200,240,90,10);
  umbrella.addImage(umbrellaImg);
  umbrella.scale=0.4;

  

  greycloud=createSprite(100,30,90,10);
  greycloud.addImage(greycloudImg);
  greycloud.scale=0.5;

  greycloud1=createSprite(240,30,90,10);
  greycloud1.addImage(greycloudImg);
  greycloud1.scale=0.5;
  
  greycloud3=createSprite(550,30,90,10);
  greycloud3.addImage(greycloudImg);
  greycloud3.scale=0.5;


  greycloud2=createSprite(400,30,90,10);
  greycloud2.addImage(greycloudImg);
  greycloud2.scale=0.5;


  greycloud4=createSprite(680,30,90,10);
  greycloud4.addImage(greycloudImg);
  greycloud4.scale=0.5;

  greycloud5=createSprite(850,30,90,10);
  greycloud5.addImage(greycloudImg);
  greycloud5.scale=0.5;

  greycloud6=createSprite(1000,30,90,10);
  greycloud6.addImage(greycloudImg);
  greycloud6.scale=0.5;

robotGroup=createGroup();
raindropGroup=createGroup();

  
  
}

function draw() {
  background(bg);
 
  robots();
  raindrops();

  fill("yellow");
  textSize(20);
  text("Score: "+ score, 70,480);
    
  if(keyDown("LEFT_ARROW")){
    umbrella.x = umbrella.x - 8;
  }
    
  if(keyDown("RIGHT_ARROW")){
    umbrella.x = umbrella.x + 8;
  }
    
  

  if(score === 100) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("Congratulations!!!",250, 200);

  }

  if(raindropGroup.isTouching(umbrella)){
    bounceOff
  }
  
  drawSprites()
}

function robots(){
  if (frameCount % 100 === 0){
    //position= Math.round(random(1,2));
    var robot1=createSprite(100,350,90,10);
    robot1.velocityX = 3;
    var robot2=createSprite(900,350,90,10);
    robot2.velocityX= -3;
    

    /*if (r==1){
      robot1.addImage(robot1Img);
    }
    else if (r==2){
      robot1.addImage(robot2Img);
    }
    else if (r==3){
      robot1.addImage(robot5Img);
    }
    else if (r==4){
      robot1.addImage(robot7Img);
    }*/
  
    
    var rand=Math.round(random(1,7));
    switch(rand){
      case 1: robot1.addImage(robot1Img);
        break;
      case 2: robot1.addImage(robot2Img);
        break;
      case 3: robot1.addImage(robot5Img);
        break;
      case 4: robot1.addImage(robot7Img);
        break;
      case 5: robot2.addImage(robot3Img);
        break;
      case 6:robot2.addImage(robot4Img);
        break;
      case 7:robot2.addImage(robot6Img);
        break;
      default: break;

    }

    
    
    /*if (position==1){
      robot1.x=200;
      robot1.velocityX=(4);
    }
    else {
      if (position==2) {
        robot1.x=200;
        robot1.velocityX=(4);
      }
    }*/
    
    //robot1.y=Math.round(random(60,500));
    robot1.scale=0.1;
    robot1.setLifetime=100;

    robot2.scale=0.1;
    robot2.setLifetime=100;
    
    robotGroup.add(robot1);
  }
  
}

/*function raindrops(){
  if (frameCount % 20 === 0){
    position= Math.round(random(1,2,4,5,6,7,8,9,10));
    raindrop=createSprite(300,350,90,10);
    raindrop.scale=0.1;

    
    r=Math.round(random(1,4));
    if (r==1){
      raindrop.addImage(raindropImg);
    }
    else if (r==2){
      raindrop.addImage(raindropImg);
    }
    else if (r==3){
      raindrop.addImage(raindropImg);
    }
    else if (r==4){
      raindrop.addImage(raindropImg);
    }

    if (position==1){
      raindrop.y=70;
      raindrop.x=100;
      raindrop.velocityY=(4);
    }
    else if(position==2) {
        raindrop.y=200;
        raindrop.x=10;
        raindrop.velocityY=(4);
      }
  
    else if(position==3){
     raindrop.y=200;
     raindrop.x=100;
     raindrop.velocityY=(4);
    }

    //robot1.y=Math.round(random(60,500));
    raindrop.setLifetime=100;
    
    raindropGroup.add(raindrop);
  }
}*/

function raindrops(){
  if(frameCount %5===0){
    var raindrop=createSprite(50,200,90,10);
    raindrop.y=Math.round(random(1,-700));
    raindrop.addImage(raindropImg);
    raindrop.scale=0.1;
    raindrop.velocityY= 5;
    raindrop.velocityX=5;

    raindrop.lifetime=300;


    
  }
}
