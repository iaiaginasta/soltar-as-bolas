
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(400,400);


		var ground_options ={
		isStatic: true
 	 };

	 var block1_options = {
		restitution : 0.5,
		friction : 0.02,
		frictionair : 0
	 };

	 var block2_options = {
		restitution : 0.7,
		friction : 0.01,
		frictionair : 0.1
	 };

	 var block3_options = {
		restitution : 0.1,
		friction : 1,
		frictionair : 0.3
	 };

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.

		ground = Bodies.rectangle(400,400,100,20,ground_options);
  		World.add(world,ground);

  		block1 = Bodies.circle(220, 10, 10, block1_options);
  		World.add(world,block1);

 	 block2 = Bodies.rectangle(110, 50, 10, 10, block2_options);
 	 World.add(world,block2);

 	 block3 = Bodies.rectangle(350, 50, 10, 10, block3_options);
 	 World.add(world,block3);

	  ground1 = Bodies.rectangle(100,400,650,20,ground_options);
  World.add(world,ground1); 

	Engine.run(engine);

	rectMode(CENTER);
  ellipseMode(RADIUS);
  
}


function draw() {
  rectMode(CENTER);
  background(51);
  Engine.update(engine);

  push()
fill("blue")
  ellipse(block1.position.x,block1.position.y,20);
pop()

  push()
  fill("yellow")
  rect(block2.position.x,block2.position.y,40,20);
 pop()

 push()
 fill("purple")
 rect(block3.position.x,block3.position.y,20,20);
pop()

push()
fill("green")
rect(ground.position.x,ground.position.y,800,10)

  drawSprites();
 
}



