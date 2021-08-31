var garden,rabbit;
var gardenImg,rabbitImg;

var greenleaf, redleaf, orangeleaf, greenleafImage, redleafImage, orangeleafImage;
var apple,appleImage

var select_sprites = Math.round(random(1,2));

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png")
  greenleafImage = loadImage("leaf.png");
  redleafImage = loadImage("redImage.png");
  orangeleafImage = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  

// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  
  if(frameCount % 80 === 0){
    if (select_sprites==1){
      createApples();
    }
    else{
      createLeaves();
    }
  }
  
  rabbit.x=World.mouseX;
   
  drawSprites();
}

function createApples(){
  background(0) 
  apple = createSprite(random(50,350), 40,10,10);
   apple.addImage(appleImage);
   apple.velocityY = 5;
   apple.scale = 0.07;
   apple.lifetime = 150;
   
  
 }

function createLeaves(){
  background(0) 
   greenleaf = createSprite(random(50,350),10,10);
   greenleaf.addImage(greenleafImage);
   greenleaf.velocityY = 3;
   greenleaf.scale = 0.07;

   orangeleaf = createSprite(random(50,200),10,10);
   orangeleaf.addImage(orangeleafImage);
   orangeleaf.velocityY = 3;
   orangeleaf.scale = 0.07;

   redleaf = createSprite(random(50,150),10,10);
   redleaf.addImage(redleafImage);
   redleaf.velocityY = 3;
   redleaf.scale = 0.07;

  
 }

