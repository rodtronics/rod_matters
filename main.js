// module aliases
var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;

// create an engine
var engine = Engine.create({
  gravity: { x: 0, y: 1, scale: 0.001 },
});

// create a renderer
var render = Render.create({
  element: document.body,
  engine: engine,
  options: { height: 1000, width: 2000 },
});

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var circleA = Bodies.circle(450, 300, 60, { render: { fillStyle: "red" } });
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
var wallLeft = Bodies.rectangle(800, 300, 50, 500, { isStatic: true });
var wallRight = Bodies.rectangle(0, 300, 50, 500, { isStatic: true });

circleA.restitution, boxA.restitution, (boxB.restitution = 1);

// add all of the bodies to the world
Composite.add(engine.world, [boxA, boxB, circleA, ground, wallLeft, wallRight]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);
