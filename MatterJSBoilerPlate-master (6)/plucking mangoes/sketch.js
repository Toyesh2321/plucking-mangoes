
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy

function preload()
{
	backgroundImg = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);

    boy = new boy(50,50,30,30);
	stone = new stone(60,50,10,10);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  stone.display();
  boy.display();
  drawSprites();
 
}



