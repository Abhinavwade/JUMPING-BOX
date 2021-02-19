var canvas;
var music;
var block1;
var block2;
var block3;
var block4;
var minebox

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);


block1 = createSprite (40,400,80,20)
block1. shapeColor = ("green")


block2 = createSprite (155,400,80,20)
block2. shapeColor = ("red")

block3 = createSprite (255,400,80,20)
block3 . shapeColor = ("blue")

block4 = createSprite (360,400,80,20)
block4. shapeColor = ("orange")

minebox = createSprite (200,100,20,20)
minebox. shapeColor = ("black")

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background("lightblue");

    drawSprites();


   minebox.x=mouseX
   minebox.y=mouseY

   if (isTouching(minebox,block1)) {
    minebox.shapeColor = "green";
  block1.shapeColor = "green"; 
   }
   else if(isTouching(minebox,block2)){
  minebox.shapeColor = "red";
  block2.shapeColor = "red"; 
  
  }
  else if(isTouching(minebox,block3)){
    minebox.shapeColor = "blue";
    block3.shapeColor = "blue"; 
    
    } 
    else if(isTouching(minebox,block4)){
        minebox.shapeColor = "orange";
        block4.shapeColor = "orange"; 
    }
   else {
    minebox.shapeColor = "black";
  block1.shapeColor = "green"; 
  minebox.shapeColor = "black";
  block2.shapeColor = "red";
  minebox.shapeColor = "black";
  block3.shapeColor = "blue"; 
  minebox.shapeColor = "black";
  block4.shapeColor = "orange"; 
  }









   function isTouching(minebox,block1,block2,block3){
    if (minebox.x - block1.x < block1.width/2 + minebox.width/2
      && block1.x - minebox.x < block1.width/2 + minebox.width/2
      && minebox.y - block1.y < block1.height/2 + minebox.height/2
      && block1.y - minebox.y < block1.height/2 + minebox.height/2)
      {

    return true;
  
      }        
    else {
    return false 
   
    }
    if (minebox.x - block2.x < block2.width/2 + minebox.width/2
        && block2.x - minebox.x < block2.width/2 + minebox.width/2
        && minebox.y - block2.y < block2.height/2 + minebox.height/2
        && block2.y - minebox.y < block2.height/2 + minebox.height/2)
        {
            return true;
  
        }        
      else {
      return false 
     
      }
      if (minebox.x - block3.x < block3.width/2 + minebox.width/2
        && block3.x - minebox.x < block3.width/2 + minebox.width/2
        && minebox.y - block3.y < block3.height/2 + minebox.height/2
        && block3.y - minebox.y < block3.height/2 + minebox.height/2)
        {
            return true;
  
        }        
      else {
      return false 
     
      }

      if (minebox.x - block4.x < block4.width/2 + minebox.width/2
        && block4.x - minebox.x < block4.width/2 + minebox.width/2
        && minebox.y - block4.y < block4.height/2 + minebox.height/2
        && block4.y - minebox.y < block4.height/2 + minebox.height/2)
        {
            return true;
  
        }        
      else {
      return false
      }
}
   }
