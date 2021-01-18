
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Dustbin1;
var Paper;
var Ground;

function preload()
{
	
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the bodies Here.

	Dustbin1 = new dustbin(255,285,20,100);
	//Dustbin2 = new dustbin(345,285,20,100);
	//Dustbin3 = new dustbin(300,310,200,20);

	Paper = new paper(100,200,45);

	Ground = new ground(400,650,800,40);

	Engine.run(engine);
  
}


function draw() {
  background(110);

  Engine.update(engine);
  

  Ground.display();

  Paper.display();

  Dustbin1.display();
  //Dustbin2.display();
  //Dustbin3.display();

  //drawSprites();
  //keyPressed();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
   
		Matter.Body.applyForce(Paper.body,Paper.body.position,{x:60,y:-85});
   
	 }
   }



