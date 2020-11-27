
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
rock = new Rock(160,440,30,30)
sling = new Sling(rock.body,{x:120,y:200})
tree = new Tree(700,10,500,600)
ground = new Ground(580,600,1300,20)
boy  = new Boy(200,360,300,300)
mango1 = new Mango(760,280,40,40)
mango2 = new Mango(820,180,50,50)
mango3 = new Mango(930,50,70,70)
mango4 = new Mango(960,200,60,60)
mango5 = new Mango(1050,260,60,60)
mango6 = new Mango(1130,204,40,40)
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  rock.display();
  tree.display();
  ground.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

 Engine.update(engine);
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling.gettingThrown();
}
