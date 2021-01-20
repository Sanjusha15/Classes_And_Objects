class Log {
    
    constructor(x,y,height,angle){

  var options = {

     'restitution': 0.3,
     'friction':0.8,
     'density':1.5

  }
  this.body = Bodies.rectangle(x,y,20,height,options);
  Matter.Body.setAngle(this.body,angle);
  this.width = 20;
  this.height = height;

World.add(myWorld,this.body);


    }

    display() {

var pos = this.body.position;
var angle = this.body.angle;

push();

translate(pos.x,pos.y);
rotate(angle);
strokeWeight(3);
stroke("green");
rectMode(CENTER);
fill (255);
rect(0,0,this.width,this.height);
pop ();


    }
};

