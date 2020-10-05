const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var lBox, rBox, bBox;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(100,360,20);
	ground = new Ground(400, 675, 800, 7);

	lBox = new Box(500, 645, 7, 65);
	rBox = new Box(700, 645, 7, 65);
	bBox = new Box(600, 675, 200, 7);


	Engine.run(engine);
  
}


function draw() {
  background(0);

  ball.display();
  ground.display();
  lBox.display();
  rBox.display();
  bBox.display();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position, {x:60,y:-60});
	}
}