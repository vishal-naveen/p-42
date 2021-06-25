var issI, spacebgI, spacecraft1I,spacecraft2I,spacecraft3I,spacecraft4I
var iss, spacecraft, hasDocked = 'false';

function preload(){
  issI = loadImage("iss.png")
  spacebgI = loadImage("spacebg.jpg")
  spacecraft1I = loadImage("spacecraft1.png")
  spacecraft2I = loadImage("spacecraft2.png")
  spacecraft3I = loadImage("spacecraft3.png")
  spacecraft4I = loadImage("spacecraft4.png")
}
function setup() {
  createCanvas(1000,600);
  spacecraft = createSprite(100,500,50,50);
  spacecraft.addImage(spacecraft1I);
  spacecraft.scale = 0.35
  var ran = ((Math.random()* 1000)+1)
  spacecraft.x = ran;
  iss = createSprite(400, 220, 50, 50);
  iss.addImage(issI)
  iss.scale = 0.90
  
}

function draw() {
  background(spacebgI);  
  drawSprites();
  if(hasDocked === 'false'){
    if(keyIsDown(UP_ARROW)){
      spacecraft.y = spacecraft.y-5
      spacecraft.addImage(spacecraft2I);
    }
    if(keyIsDown(DOWN_ARROW)){
      spacecraft.y = spacecraft.y+5
      spacecraft.addImage(spacecraft2I);
    }
    if(keyIsDown(RIGHT_ARROW)){
      spacecraft.x = spacecraft.x+5
      spacecraft.addImage(spacecraft4I);
    }
    if(keyIsDown(LEFT_ARROW)){
      spacecraft.x = spacecraft.x-5
      spacecraft.addImage(spacecraft3I);
    }
  }
  
  console.log("spacecraftX: "+spacecraft.x);
  console.log("spacecraftY: "+spacecraft.y);

  if(spacecraft.y < 369 && spacecraft.y > 354 && spacecraft.x < 341 && spacecraft.x > 323){
    textSize(30);
    fill("yellow")
    text("Docking Successful!", 700, 300);
    hasDocked = 'true';
  }
}