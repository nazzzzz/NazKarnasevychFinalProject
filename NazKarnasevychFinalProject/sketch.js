var joeB, triB;
var isOverCircle1, isOverCircle2, isOverCircle3;


function setup() {
  createCanvas(1000, 1000);
  background(255);
  text("Block in Love", 450, 50)
  joeB = new Block(200, 400, joe);
  joeC = new Block(100, 420, joe);
  triB = new Block(700, 420, tri);
  circlebigB = new Block(900, 420, circlebig);
  block2B = new Block(900, 400, blocksmaller2);
}

function preload() {
  //loading assets

  joe = loadImage("/img/block.png");
  tri = loadImage("img/triangle.png");

  //triS = createSprite(700, 420);
  //triS.addImage(tri);

  circle = loadImage("img/circle.png");
  circlebig = loadImage("img/circlebigger.png");
  block2 = loadImage("img/block2.png");
  heart = loadImage("img/heart.png");
  heart2 = loadImage("img/heart2.png");
  broken = loadImage("img/broken.png");
  bghouse = loadImage("/img/bghouse.png");
  bgmount = loadImage("/img/bgmount2.png");
  bginside = loadImage("/img/bginside.png");
  bgshore = loadImage("/img/bgshore.png");
  housewindow = loadImage("/img/housewindow.png");
  through = loadImage("/img/through.png");
  
  blocksmaller = loadImage("img/blocksmaller.png");
  blocksmaller2 = loadImage("img/block2smaller.png");

}

function draw() {
  //load house and joe moving towards window
  image(bghouse, 0, 0);

  if (joeB.xVal > 750) {
    joeB.stop();
  }
  joeB.move(1);
  joeB.display();
  //image(joe, 200, 490, joe.height/1.5, joe.width/1.5);


  //looking through window
  if (frameCount > 200) {
    image(housewindow, 0, 0);
    image(joe, 300, 450);
  }

  //seeing the 3 options
  if (frameCount > 275) {
    image(through, 0, 0);
  }

  //showing the illusion of choice
  if (frameCount > 450) {
    background(45);

    pickOne();
  }

  if (frameCount > 700) {
    background(45);
    textSize(32);
    text("You chose the Triangle!", 350, 300)
  }
  //joe declares love for triangle
  if (frameCount > 800) {
    background(255);
    image(bgmount, 0, 0);
    image(joe, 100, 420);
    image(heart2, 250, 475);
    triB.display();

  }

  //triangle rejects him
  if (frameCount > 850) {
    triB.move(1);
    triB.display();
  }

  //joe is heartbroken
  if (frameCount > 950) {
    image(bgmount, 0, 0);
    image(joe, 100, 420);
    image(broken, 250, 475);
  }

  if (frameCount > 1050) {
    background(45);
    textSize(32);
    text("The Triangle didn't choose you!", 300, 300)
  }

  if (frameCount > 1150) {
    background(45);
    textSize(32);
    text("Maybe the Circle feels differently!", 300, 300)
  }

  //set up circle scene
  if (frameCount > 1250) {
    background(255);
    image(bginside, 0, 0);
    //joeB.newCoord(100, 420);
    joeC.display();
    //image(joe, 100, 420);
    //image(heart2, 250, 475);
    image(circle, 450, 420);

  }

  if (frameCount > 1300) {
    //console.log(joeB.xVal);
    //joeB.newCoord(100, 420);
    if (joeC.xVal > 225) {
      joeC.stop();
    }
    joeC.move(1);

    joeC.display();
  }


  //declares love to circle
  if (frameCount > 1425) {
    image(heart, 425, 475);
  }

  //interrupted
  if (frameCount > 1450) {
    if (circlebigB.xVal < 650) {
      circlebigB.stop();
    }
    circlebigB.move(0);

    circlebigB.display();
  }

  if (frameCount > 1575) {
    image(heart2, 700, 500);
    image(heart2, 525, 475);
  }

  if (frameCount > 1625) {
    background(45);
    textSize(32);
    text("No luck there either!", 350, 300)
  }

  if (frameCount > 1675) {
    background(45);
    textSize(32);
    text("Finding love is hard!", 350, 300)
  }

  if (frameCount > 1725){
    background(255);
    image(bgshore, 0, 0);
    image(blocksmaller, 400, 400);
    image(broken, 500, 450);
    block2B.display();
  }
  
   if (frameCount > 1750) {
    if (block2B.xVal < 650) {
      block2B.stop();
    }
    block2B.move(0);

    block2B.display();
    
  }
  
  if (frameCount > 1875) {
    image(heart2, 750, 450);
    
  }
  
  if(frameCount > 1925){
    image(heart2, 500, 450);
  }
  
  
  

}


function pickOne() {
  // get distance between mouse and circle
  var distance1 = dist(mouseX, mouseY, 600, 350);
  var distance2 = dist(mouseX, mouseY, 600, 450);
  var distance3 = dist(mouseX, mouseY, 600, 550);

  // if the distance is less than the circle's radius
  if (distance1 < 25) {
    isOverCircle1 = true;
  } else {
    isOverCircle1 = false;
  }

  if (distance2 < 25) {
    isOverCircle2 = true;
  } else {
    isOverCircle2 = false;
  }

  if (distance3 < 25) {
    isOverCircle3 = true;
  } else {
    isOverCircle3 = false;
  }

  // draw a circle
  ellipseMode(CENTER);
  stroke(0);
  strokeWeight(5);

  if (isOverCircle1 === true) {
    fill(100);
    cursor(HAND);
  } else {
    fill(200);
    cursor(ARROW);
  }
  ellipse(600, 350, 50, 50);

  if (isOverCircle2 === true) {
    fill(100);
    cursor(HAND);
  } else {
    fill(200);
    cursor(ARROW);
  }
  ellipse(600, 450, 50, 50);

  if (isOverCircle3 === true) {
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
  text("Joe falls in love with the: ", 360, 250)
  text("- Square!", 400, 360);
  text("- Circle!", 400, 460);
  text("- Triangle", 400, 560)
}

/*function mousePressed() {
  if (isOverCircle3 === true) {
    fill(255);
    ellipse(800, 500, 100, 100);
  }
}
*/
