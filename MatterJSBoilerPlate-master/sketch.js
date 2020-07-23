var bob1, bob2, bob3, bob4, bob5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1 = createBody(circle, 200, 350, 200, 200);
bob2 = createBody(circle, 400, 350, 200, 200);
bob3 = createBody(circle, 600, 350, 200, 200);
bob4 = createBody(circle, 800, 350, 200, 200);
bob5 = createBody(circle, 1000, 350, 200, 200);
slingShot1 = new slingshot(bob1, ground, -bobDiameter*2, 0);
slingShot2 = new slingshot(bob2, ground, -bobDiameter*2, 0);
slingShot3 = new slingshot(bob3, ground, -bobDiameter*2, 0);
slingShot4 = new slingshot(bob4, ground, -bobDiameter*2, 0);
slingShot5 = new slingshot(bob5, ground, -bobDiameter*2, 0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1velocityY = bob1velocityY = -2;
  drawSprites();
 
}



