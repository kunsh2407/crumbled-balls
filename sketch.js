
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,ball,dustbin,wall1,wall2,wall3,dustbinimg;
function preload()
{
	dustbinimg=loadImage("dustbin.png");
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  ground=new Ground(width/2,380,1200,10)
  ball=new Ball(width/2-300,350,30)
  wall1=new Ground(width/2+310,330,20,100)
  wall2=new Ground(width/2+410,330,20,100)
  wall3=new Ground(width/2+370,370,100,20)
  
}


function draw() {
  rectMode(CENTER);
  background(120);
  ground.display();
  ball.display();
  wall1.display();
wall2.display();
wall3.display();
imageMode(CENTER)
image(dustbinimg,width/2+365,330,140,120)
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
Matter.Body.applyForce(ball.body,ball.body.position,{x:150,y:-150})
  
  }

}


