var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var PLAY;
var END;
var gameState = PLAY;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	helicopterSprite=createSprite(width/2, 80, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6;

	packageSprite = createSprite(width/2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 650 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  if(gameState === PLAY){

	helicopterSprite.visible = true;
    helicopterSprite.y=World.mouseY;
  helicopterSprite.x=World.mouseX;

  if(packageSprite.isTouching(groundSprite)){
	packageSprite.restitution = .3
  }	
  }

  background(0);
  drawSprites();
 package();
  Box.display();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
packageSprite.velocityY = 2;
    
  }
}



