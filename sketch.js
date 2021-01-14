const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var bg, bgImg;
var hero,heroSImg,heroJImg,heroMrImg,heroMlImg;
var ib1,ib2,ib3,ib4,ib5,ib6,ib7,ile,ire,ibe,pipe;
var is1,is2,is3,is4;
var iss1,iss2,iss3,iss4;
var isss1,isss2,isss3,isss4,isss5,isss6;
var issss1,issss2,issss3,issss4,issss5;
var coin1,coin2,coin3,coin4,coin5,coin6;

var score = 0;

var coinImg,coinS,jump,dead,deadImg,deadP,fall;



function preload(){

  heroSImg = loadImage("stand stand.png");
  heroJImg =loadImage("jump jump.png");
  heroMrImg = loadImage("1.png");
  heroMlImg = loadImage("1f.png");
  coinImg = loadImage("coin.png");
  deadImg = loadImage("game-over-1.jpeg");
  fall = loadImage("fall.png");
  bgImg = loadImage("mario-6-1.gif.png");
  coinS = loadSound("coin.mp3")
  jump= loadSound("jump.mp3")
  dead = loadSound("dead.mp3")
  
}

function setup(){
  createCanvas(displayWidth-100,displayHeight-400);
  engine = Engine.create();
    world = engine.world;

  ib1 = createSprite(displayWidth/2-552,displayHeight/3+55,188,20);
  ib1.visible = false;
  ib2 = createSprite(displayWidth/2-395,displayHeight/3+55,73,20);
  ib2.visible = false;
  ib3 = createSprite(displayWidth/2-288,displayHeight/3+55,18,20);
  ib3.visible = false;
  ib4 = createSprite(displayWidth/2-188,displayHeight/3+55,138,20);
  ib4.visible = false;
  ib5 = createSprite(displayWidth/2-30,displayHeight/3+55,118,20);
  ib5.visible = false;
  ib6 = createSprite(displayWidth/2+150,displayHeight/3+55,138,20);
  ib6.visible = false;
  ib7 = createSprite(displayWidth/2+400,displayHeight/3+55,298,20);
  ib7.visible = false;


  is1 = createSprite(displayWidth/2-373,displayHeight/3+35,55,22);
  is1.visible = false;
  is2 = createSprite(displayWidth/2-343,displayHeight/3+11,55,24);
  is2.visible = false;
  is3 = createSprite(displayWidth/2-322,displayHeight/3-12,40,22);
  is3.visible = false;
  is4 = createSprite(displayWidth/2-303,displayHeight/3-34,30,22);
  is4.visible = false;


  iss1 = createSprite(displayWidth/2+22.5,displayHeight/3+35,46,23);
  iss1.visible = false;
  iss2 = createSprite(displayWidth/2+27,displayHeight/3+11,35,23);
  iss2.visible = false;
  iss3 = createSprite(displayWidth/2+32.5,displayHeight/3-12,25,22);
  iss3.visible = false;
  iss4 = createSprite(displayWidth/2+36,displayHeight/3-34,16,22);
  iss4.visible = false;

  isss1 = createSprite(displayWidth/2+149,displayHeight/3+11,20,21);
  isss1.visible = false;
  isss2 = createSprite(displayWidth/2+152,displayHeight/3-11,12,22);
  isss2.visible = false;
  isss3 = createSprite(displayWidth/2+171,displayHeight/3-8,10,120);
  isss3.visible = false;
  isss4 = createSprite(displayWidth/2+185,displayHeight/3-20,16,140);
  isss4.visible = false;
  isss5 = createSprite(displayWidth/2+205,displayHeight/3-103,37,20);
  isss5.visible = false;
  isss6 = createSprite(displayWidth/2+226,displayHeight/3-11,28,21);
  isss6.visible = false;

  issss1 = createSprite(displayWidth/2+515,displayHeight/3+35,50,20);
  issss1.visible = false;
  issss2 = createSprite(displayWidth/2+520,displayHeight/3+11,40,20);
  issss2.visible = false;
  issss3 = createSprite(displayWidth/2+525,displayHeight/3-12,25,20);
  issss3.visible = false;
  issss4 = createSprite(displayWidth/2+530,displayHeight/3-35,16,20);
  issss4.visible = false;
  issss5 = createSprite(displayWidth/2+534,displayHeight/3-55,10,25);
  issss5.visible = false;






  ile = createSprite(displayWidth/2-630,displayHeight/3-50,5,displayHeight);
  ile.visible = false;
  ire = createSprite(displayWidth/2+540,displayHeight/3-55,5,displayHeight);
  ire.visible = false;
  ibe = createSprite(displayWidth/2-30,displayHeight/3+80,displayWidth,5);
  ibe.visible = false;
  pipe = createSprite(displayWidth/2+315.5,displayHeight/3+13,16,66);
  pipe.visible = false;

  deadP = createSprite(displayWidth/2-120,displayHeight/3-120);
  deadP.addImage(deadImg);
  deadP.scale = 0.7
  deadP.visible = false;


  hero = createSprite(displayWidth/2-500,displayHeight/3+55,30,30);
  hero.addImage(heroSImg);
  hero.scale = 0.3 ;

  coin1 = createSprite(displayWidth/2-452,displayHeight/3-25,10,15);
  coin1.addImage(coinImg);
  coin1.scale = 0.08
  coin2 = createSprite(displayWidth/2-440,displayHeight/3-25,10,15);
  coin2.addImage(coinImg);
  coin2.scale = 0.08
  coin3 = createSprite(displayWidth/2-428,displayHeight/3-25,10,15);
  coin3.addImage(coinImg);
  coin3.scale = 0.08

  coin4 = createSprite(displayWidth/2-190,displayHeight/3-25,10,15);
  coin4.addImage(coinImg);
  coin4.scale = 0.08
  coin5 = createSprite(displayWidth/2-180,displayHeight/3-25,10,15);
  coin5.addImage(coinImg);
  coin5.scale = 0.08
  coin6 = createSprite(displayWidth/2-170,displayHeight/3-25,10,15);
  coin6.addImage(coinImg);
  coin6.scale = 0.08

  coin7 = createSprite(displayWidth/2+255,displayHeight/3-60,10,15);
  coin7.addImage(coinImg);
  coin7.scale = 0.08
  coin8 = createSprite(displayWidth/2+265,displayHeight/3-60,10,15);
  coin8.addImage(coinImg);
  coin8.scale = 0.08
  coin9 = createSprite(displayWidth/2+275,displayHeight/3-60,10,15);
  coin9.addImage(coinImg);
  coin9.scale = 0.08

  


  
  


  




}

function draw(){
  background(bgImg);

  createEdgeSprites();
  Engine.update(engine);



    
 

  if(keyWentDown("space") ){
//console.log(hero.y);
    hero.velocityY = -5;
    hero.addImage(heroJImg);
    jump.play();
  }
  if(keyWentUp("space") ){
        hero.addImage(heroSImg);
      }
  hero.velocityY += 0.5;
  if(keyDown("d")){
    hero.velocityX += 0.05;
    hero.addImage(heroMrImg);
    hero.scale = 0.43;
  }
  if(keyDown("a")){
    hero.velocityX += -0.05;
    hero.addImage(heroMlImg);
    hero.scale = 0.43;
  }
  if(hero.isTouching(ibe)){
    deadP.visible = true;
    hero.addImage(fall);
    hero.scale = 0.2
    //dead.play();
   }
  

  hero.collide(ile);
  hero.collide(ire);
  hero.collide(ibe);
  hero.collide(pipe);

  hero.collide(ib1);
  hero.collide(ib2);
  hero.collide(ib3);
  hero.collide(ib4);
  hero.collide(ib5);
  hero.collide(ib6);
  hero.collide(ib7);

  hero.collide(is1);
  hero.collide(is2);
  hero.collide(is3);
  hero.collide(is4);

  hero.collide(iss1);
  hero.collide(iss2);
  hero.collide(iss3);
  hero.collide(iss4);

  hero.collide(isss1);
  hero.collide(isss2);
  hero.collide(isss3);
  hero.collide(isss4);
  hero.collide(isss5);
  hero.collide(isss6);

  hero.collide(issss1);
  hero.collide(issss2);
  hero.collide(issss3);
  hero.collide(issss4);
  hero.collide(issss5);
  
  

  //coin1.debug = true;

  if(hero.isTouching(coin1)){
    coin1.destroy();
    coinS.play();
    score += 1;
   }
   if(hero.isTouching(coin2)){
    coin2.destroy();
    coinS.play();
    score += 1;
   }
   if(hero.isTouching(coin3)){
    coin3.destroy();
    coinS.play();
    score += 1;
   }
   if(hero.isTouching(coin4)){
    coin4.destroy();
    coinS.play();
    score += 1;
   }
   if(hero.isTouching(coin5)){
    coin5.destroy();
    coinS.play();
    score += 1;
   }
   if(hero.isTouching(coin6)){
    coin6.destroy();
    coinS.play();
    score += 1;
   }
   if(hero.isTouching(coin7)){
    coin7.destroy();
    coinS.play();
    score += 1;
   }
   if(hero.isTouching(coin8)){
    coin8.destroy();
    coinS.play();
    score += 1;
   }
   if(hero.isTouching(coin9)){
    coin9.destroy();
    coinS.play();
    score += 1;
   }

   

  drawSprites();
  
  fill("gold")
  text("Score : "+score,displayWidth/2-600,displayHeight/3-220)
}