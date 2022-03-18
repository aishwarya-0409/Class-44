const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var PLAY = 0
var END = 1;
var gamestate = PLAY;

function preload(){
    bgImg = loadImage("bg.png");
    boyImg = loadImage("boyy.png");
}

function setup(){
    createCanvas(800,400);

    bg = createSprite(400,100,400,20);
    bg.addImage("bg",bgImg);
    bg.scale = 0.3;
    bg.x = width/2;

    boy = createSprite(50,200,20,50);
    boy.addImage("boy",boyImg);
    boy.scale = 0.3;
    boy.x = width/2;


    engine = Engine.create();
    world = engine.world;

   

}

function draw(){
    background(0);
    Engine.update(engine);



    bg.velocityX = -3;
if(bg.x<100){
    bg.x=400;
}



    drawSprites();
}