var joeB;
var isOverCircle1, isOverCircle2, isOverCircle3;

//I'm still deciding what exactly I want to do for this idea so it's not fleshed out yet. I think it will be the block in love however.
function setup() {
  createCanvas(1200, 1000);
  background(255);
  text("Block in Love", 450, 50)
  joeB = new Block(200, 400, joe);
}

function preload(){
	joe = loadImage("/img/block.png");
	bghouse = loadImage("/img/bghouse.png");
	bgmount = loadImage("/img/bgmount.png");
	housewindow = loadImage("/img/housewindow.png");
	through = loadImage("/img/through.png");

}

function draw() {
  image(bghouse, 0,0);
  
  if (joeB.xVal>750){
    joeB.stop();
  } 
  joeB.move(700);
  joeB.display();
  //image(joe, 200, 490, joe.height/1.5, joe.width/1.5);
  
  
  if(frameCount > 200) {
    image(housewindow, 0,0);
    image(joe, 300, 450);
  }
  
  if(frameCount > 275){
    image(through, 0, 0);
  }
  
  if(frameCount > 325){
    background(45);
    
    pickOne();
  }
}


function pickOne(){
  // get distance between mouse and circle
  var distance1 = dist(mouseX, mouseY, 600, 350); 
  var distance2 = dist(mouseX, mouseY, 600, 450); 
  var distance3 = dist(mouseX, mouseY, 600, 550); 
  
  // if the distance is less than the circle's radius
  if(distance1 < 25)
  {
    isOverCircle1 = true;
  } else {
    isOverCircle1 = false;
  }
  
  if(distance2 < 25)
  {
    isOverCircle2 = true;
  } else {
    isOverCircle2 = false;
  }
  
  if(distance3 < 25)
  {
    isOverCircle3 = true;
  } else {
    isOverCircle3 = false;
  }
  
  // draw a circle
  ellipseMode(CENTER);
  stroke(0);
  strokeWeight(5);
  
  if(isOverCircle1 === true)
  {
    fill(100);
    cursor(HAND);
  } else {
    fill(200); 
    cursor(ARROW); 
  }
  ellipse(600, 350, 50, 50);
  
  if(isOverCircle2 === true)
  {
    fill(100);
    cursor(HAND);
  } else {
    fill(200); 
    cursor(ARROW); 
  }
  ellipse(600, 450, 50, 50);
  
  if(isOverCircle3 === true)
  {
    fill(100);
    cursor(HAND);
  } else {
    fill(200); 
    cursor(ARROW); 
  }
  ellipse(600, 550, 50, 50);
  
  strokeWeight(0);
  fill(255);
  textSize(32);
  text("The block falls in love with the: ", 350, 250)
  text("- Triangle!", 400, 360);
  text("- Square!", 400, 460);
  text("- Circle!", 400, 560)
}

function mousePressed()
{
  if(isOverCircle3 === true)
  {
    fill(255);
    ellipse(800, 500, 100, 100);
  }
}
function fallInLove(){
//draw heart in his chest

}

//function 


