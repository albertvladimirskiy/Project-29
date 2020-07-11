const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand, block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12;
var block13, block14, block15;
var block16, slingshot, ball;

function preload(){
  poly = loadImage ("sprites/unnamed.png")
}

function setup() {
  var canvas = createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  
  stand = new Ground(500, 500, 300, 20);

  block1 = new Box(400,480,30,40);
  block2 = new Box(430,480,30,40);
  block3 = new Box(460,480,30,40);
  block4 = new Box(490,480,30,40);
  block5 = new Box(520,480,30,40);
  block6 = new Box(550,480,30,40);
  block7 = new Box(580,480,30,40);

  block8 = new Box(430,440,30,40);
  block9 = new Box(460,440,30,40);
  block10 = new Box(490,440,30,40);
  block11 = new Box(520,440,30,40);
  block12 = new Box(550,440,30,40);

  block13 = new Box(460,400,30,40);
  block14 = new Box(490,400,30,40);
  block15 = new Box(520,400,30,40);

  block16 = new Box(490,360,30,40);

  //polygon = new Polygon(200,200,30);

  ball=Bodies.circle(50,200,20);
  World.add(world,ball)



  slingshot = new Slingshot(this.ball,{x:100,y:200})

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  stand.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  slingshot.display();

  imageMode(CENTER);
  image(poly,ball.position.x,ball.position.y,40,40)
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}