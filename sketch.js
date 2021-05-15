const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;





function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ball = new Ball(200, 200, 40)
    rope = new Rope(ball.body,{x:500, y:50})
    building1 = new Building(900, 100, 70, 70)
    building2 = new Building(900, 100, 70, 70)
    building3 = new Building(900, 100, 70, 70)
    building4 = new Building(900, 100, 70, 70)
    building5 = new Building(900, 100, 70, 70)
    building6 = new Building(900, 100, 70, 70)
    building7 = new Building(800, 100, 70, 70)
    building8 = new Building(800, 100, 70, 70)
    building9 = new Building(800, 100, 70, 70)
    building10 = new Building(800, 100, 70, 70)
    building11 = new Building(800, 100, 70, 70)
    building12 = new Building(800, 100, 70, 70)

}

function draw(){ 
    Engine.update(engine);

    background ("white")


    ground.display();
    ball.display();
    rope.display();
    building1.display();
    building2.display();
    building3.display();
    building4.display();
    building5.display();
    building6.display();
    building7.display();
    building8.display();
    building9.display();
    building10.display();
    building11.display();
    building12.display();
    
 

 
}

function mouseDragged(){
    //if (gameState!=="launched"){
       // Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
   
}

