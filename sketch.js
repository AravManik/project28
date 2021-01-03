
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy = new Boy(230, 530, 200, 400);
	ground = new Ground(400, 680, 800, 20);
	tree = new Tree(600, 350, 400, 700);

	mango1 = new Mango(649, 150, 60, 60);
	mango2 = new Mango(630, 250, 40, 40);
	mango3 = new Mango(550, 150, 45, 45);
	mango4 = new Mango(500, 260, 50, 50);
	mango5 = new Mango(580, 100, 70, 70);
	mango6 = new Mango(700, 230, 40, 40);

	stone = new Stone(170, 435, 50, 50);
	chain = new Chain( stone.body, { x:170, y:435 });


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  boy.display();
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone.display();
  chain.display();

  detectollision(stone, mango1);
  detectollision(stone, mango2);
  detectollision(stone, mango3);
  detectollision(stone, mango4);
  detectollision(stone, mango5);
  detectollision(stone, mango6);

  
  drawSprites();
 
}

function mouseDragged()
{
    Matter.Body.setPosition(stone.body, {x : mouseX, y:mouseY});
}

function mouseReleased()
{
    chain.fly();
}

function detectollision(stone, mango)
{
	mangoBodyPosition = mango.body.position
	stoneBodyPosition = stone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<-mango.r+stone.r)
	{
		Matter .Body.setStatic(mango.body,false);
	}
}

