const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;

var boy;
var maxDrops = 100;
var drops = [];

function preload(){
    thisimage = loadImage("images/Walking Frame/walking_1.png");
}

function setup(){
    createCanvas(400,780);
    engine = Engine.create();
    world = engine.world;

    boy = new Umbrella(200,800);
    
    for(var i=0;i<maxDrops;i++){
        drops.push(new Drops(random(0,400),random(0,400)));
    }

    Engine.run(engine);
}

function draw(){
    background("black");

    for(var i=0;i<maxDrops;i++){
        if(drops[i].body.position.y>780){
            drops[i].update();
        }
    }


    image(thisimage,200,800,100,100);
    boy.display();

    for(var i=0;i<maxDrops;i++){
        drops[i].display();
    }
}   

