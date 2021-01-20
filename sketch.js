const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var myEngine,myWorld
var box1,box2
var ground;
var bird;
var pig;

function setup() {
 var canvas = createCanvas(1200,400);
 myEngine = Engine.create();
 myWorld = myEngine.world;

box1 = new Box(700,320,70,70);
box2 = new Box(920,320,70,70);
box3 = new Box(700,240,70,70);
box4 = new Box(920,240,70,70);
box5 = new Box(810,160,70,70);

pig = new Pig(810,350);
pig2 = new Pig(810,220);

log = new Log(810,260,300,PI/2);
log2 = new Log(810,180,300,PI/2);
log3 = new Log(770,120,150,PI/7);
log4 = new Log(840,120,150,-PI/7);
ground = new Ground(600,height,1200,20);

bird = new Bird(200,100);


}
function draw() {
  background(0);
 Engine.update(myEngine)
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ground.display();
  bird.display();
  pig.display();
  pig2.display();
  log.display();
  log2.display();
  log3.display();
  log4.display();
}