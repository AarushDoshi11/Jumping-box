
var music;
var box1, box2, box3 , box4;
var box5;
function preload(){
    
}


function setup(){
    createCanvas(600,600);
    box1 = createSprite(180,500,100,20);
    box1.shapeColor  = "green";
    box1.debug = true;

    box2 = createSprite(60,500,100,20);
    box2.shapeColor  = "blue";
    box2.debug = true;

    box3 = createSprite(300,500,100,20);
    box3.shapeColor  = "red";
    box3.debug = true;

   box4 = createSprite(420,500,100,20);
   box4.shapeColor  = "yellow";
   box4.debug = true;

   box5 = createSprite(500,300,20,20);
 
  
   box5.debug = true;
music = loadSound("music.mp3");

}

function draw() {
    background("lightblue");
    
    box5.y = World.mouseY
    box5.x = World.mouseX


    if(box5.isTouching(box1)){
     box1.shapeColor = "green"
    }
    
    
    drawSprites();
}
