var bg, bgimg, boy, boyimg;
var invisibleGround;

function preload() {

  bgimg = loadImage('images/Bg.jpg');
  boyimg = loadAnimation('images/1.png','images/2.png','images/W27MMD copy 3.png','images/W27MMD copy 4.png','images/W27MMD copy 5.png','images/W27MMD copy 6.png','images/W27MMD copy 7.png','images/W27MMD copy 8.png','images/W27MMD copy 9.png','images/W27MMD copy 10.png','images/W27MMD copy 11.png','images/W27MMD copy 12.png');
}

function setup() {

  createCanvas(1000,600)

  bg = createSprite(500,300,1000,600);
  bg.addImage(bgimg);
  bg.scale = 2.2;
  bg.velocityX = -6;

  boy = createSprite(200,540,10,10);
  boy.addAnimation('cycle',boyimg);

  invisibleGround=createSprite(300, 580, 1500, 10)
  invisibleGround.visible=false



}

function draw() {

  background('black');

  
  if (bg.x < 500) {
    bg.x = bg.width;
  }
  boy.collide(invisibleGround)
  drawSprites();

}