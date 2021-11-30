const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object;

var object;

var ball; 

function setup() {
  createCanvas(800,600);

  engine = Engine.create();
  world = engine.world;
  
  var options = {isStatic:true}
  object = Bodies.rectangle (400,590, 1000, 20, options);
  World.add(world, object);

var balloptions = {restitution:1}
 ball = Bodies.circle (400, 100, 50, balloptions);
 World.add(world, ball);
}

function draw() {
  background(255,255,255);  

  Engine.update(engine);

  rectMode(CENTER);
  rect (object.position.x,object.position.y, 1000, 20)

  ellipseMode(RADIUS);
  ellipse (ball.position.x,ball.position.y, 50);
}