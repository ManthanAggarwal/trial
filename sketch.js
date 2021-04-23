const Engine = Matter.Engine,
const World = Matter.World,
const Events = Matter.Events,
const Bodies = Matter.Bodies;

var particles = [];
var pinkos = [];
var division = [];
var divisionHeight = 300  ;
var score =  0 ;

function setup (){

  createCanvas(800,800);
  engine = Engine.create ();
    world = engine.world;
    ground = new Ground(width/2,height,width,20);




    for (var k  =0; k <= width; k= k + 80){

      divisions.push(new Divisions(k, height - divisionHeight/2,10,divisionHeight));
    }


    for (var j   = 75; j  <= width; j  =j+50)
    {
      pinkos.push (new Pinko(j,75));
    }

    for (var j = 50; j  <=width - 10; j = j +50) {

      pinkos.push (new Pinko(j, 175))
    }
    for (var j = 75; j  <=width ; j = j +50) {

      pinkos.push (new Pinko(j, 275))
    }
    for (var j = 50; j  <=width - 10; j = j +50) {

      pinkos.push (new Pinko(j, 375))
    }

   
}


function draw(){
  background("black ");
  textSize(20)
  Engine.update(engine);
  ground.display()
 
  for (var i  = 0 ; i< pinkos.length; i++){

    pinkos[i].display();
  }
if(frameCount%60===0){


  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  score++
}
for (var j  = 0 ; j< pinkos.length; j++){

  pinkos[j].display();
}
for (var k  = 0 ; j< pinkos.length; k++){

  pinkos[k].display();
}

}










