var  sprite1
var image 
/*function preload(){
  image=loadImage("pics/sup.jpg");
}*/
function setup() {
  createCanvas(600,600);
  sprite1=createSprite(400,400,50,50);
  //sprite1.addImage(image)
}

function draw() 
{
  background(30);
  if (keyDown("left"))
   {
   sprite1.x=sprite1.x-5

   }
  if (keyDown("Right"))
   {
    sprite1.x=sprite1.x+5
  
   }
 if (keyDown("Down"))
   {
   sprite1.y=sprite1.y+5

   }
 if (keyDown("Up"))
   {
    sprite1.y=sprite1.y-5
  
   } 























 drawSprites();
}




