var ground1;
var bin1, bin2, bin3;
var paper1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new ground(500, 480, 1000, 15);

	
	bin2 = new dustbin(710, 422.5, 20, 100);
	bin3 = new dustbin(890, 422.5, 20, 100);
	bin1 = new dustbin(800, 462.5, 200, 20);

	paper1 = new paper(100, 400, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

	fill(255);
	textSize(20);
	text("Press up arrow to put the paper in the dustbin", 300, 250);

  ground1.display();
  
  bin1.display();
  bin2.display();
  bin3.display();

  paper1.display();
 

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:15, y:-20});
	}
}


