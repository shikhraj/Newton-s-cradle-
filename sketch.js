
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Roof(350, 50, 500, 50);
	Engine.run(engine);

	
	bob1 = new Bob(230,350,30);
	bob2 = new Bob(290,350,30);
	bob3 = new Bob(350,350,30);
	bob4 = new Bob(410,350,30);
	bob5 = new Bob(470,350,30);
	

	rope1 = new Rope(bob1.body, ground.body,-115,0);
	rope2 = new Rope(bob2.body, ground.body,-55,0);
	rope3 = new Rope(bob3.body, ground.body,5,0);
	rope4 = new Rope(bob4.body, ground.body,65,0);
	rope5 = new Rope(bob5.body, ground.body,125,0);
	



	
}


function draw() {
  rectMode(CENTER);
  background("grey");
 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  ground.display();



  drawSprites();

 
}



function keyPressed() { 
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-0.09, y:-0})	 
	}
}