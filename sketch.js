
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject,launcherObj;
var mango1,mango2,mango3,mango4,mango5,fly , mango6,mango7,mango8,mango9,mango10;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1200,130,30);
	mango3=new mango(1000,80,30);
	mango4=new mango(1150,200,30);
  mango5=new mango(1010,200,30);
  mango6=new mango(900,150 ,30)
  mango7=new mango(930,240,30);
  mango8=new mango(1240,210,30);
  mango9=new mango(1500,150,30);
  mango10=new mango(1100,26,30)
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);


	
	stoneObj=new stone (238,400,30);
	launcherObj=new launcher (stoneObj.body,{x:235,y:415});
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
//(bodyA: any, pointB: any): launcher

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  groundObject.display();
  stoneObj.display();
  launcherObj.display();

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
}
  function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   launcherObj.fly();
}

function keyPressed(){
  if (keyCode===32){

Matter.Body.setPosition(stoneObj.body,{x:238,y:400})
launcherObj.attach(stoneObj.body);
}
}

function detectollision(lstone,lmango){

mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){

 Matter.Body.setStatic(lmango.body,false);
}



}

