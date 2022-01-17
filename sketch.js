
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;

var hammer_img;
var hammer;

var constructionWorker;
var constructionWorker_img;

var buildings_img;
var buildings;
var demolished_building;

var break_sound;
var bk_song;

var score = 0;

function preload() {
  hammer_img = loadImage('hammer.png');
  hammer2_img = loadImage('hammer2.png');

  constructionWorker_img = loadImage('constructionWorker.png');

  buildings_img = loadImage('buildings.png');
  demolished_building_img = loadImage('demolished_building.png');

  break_sound = loadSound('break.mp3');
  bk_song = loadSound('sound1.mp3');

  //hammer = loadAnimation("hammer.png,hammer2.png");

  //hammer.playing = true;
  //hammer.looping = false;

}

function setup() {
  createCanvas(600,600);

  bk_song.play();
  bk_song.setVolume(0.5);
  

  engine = Engine.create();
  world = engine.world;

  hammer = new Hammer(560, 300, 100, 100);
  //hammer = createSprite(560,300,300,300);
  //hammer.addImage(hammer_img);
  hammer.scale = 0.3;

  /*hammer2 = createSprite(560,300,300,300);
  hammer2.addImage(hammer2_img);
  hammer2.scale = 0.02;*/

  buildings = createSprite(250,0,50,50);
  buildings.addImage(buildings_img);
  buildings.scale = 0.06;

  this.playButton = createButton("Destruction!");

  constructionWorker = createSprite(50,530,50,50);
  constructionWorker.addImage(constructionWorker_img);
  constructionWorker.scale = 0.2;

  /*demolished_building = createSprite(250,10,50,50);
  demolished_building.addImage(demolished_building_img);
  demolished_building.scale = 0.06;*/
  
}


function draw() 
{
  background(51);
  image(buildings_img, 0, 0, width, height)
  Engine.update(engine);

  
  drawSprites();
  
  hammer.display();

  fill("#6d4c41");
  textSize(25);
  text(`Score:${score}`, width - 100, 50);
  textAlign(CENTER, CENTER);

  
}

/*function gameOver() {
  swal(
    {
      title: `Game Over!!!`,
      text: "Thanks for playing!!",
      imageSize: "150x150",
      confirmButtonText: "Play Again"
    },
    function(isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }
  );
}*/

function keyReleased() {
  if (keyCode === DOWN_ARROW ) {
    break_sound.play();
    balls[balls.length - 1].shoot();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


