
//I'm still deciding what exactly I want to do for this idea so it's not fleshed out yet. I think it will be the block in love however.
function setup() {
  createCanvas(1000, 1000);
  background(255);
  text("Block in Love", 450, 50)
}

function preload(){
	joe = loadImage("img/block.png");

}

function draw() {
  image(joe, 100, 100,joe.height/3, joe.width/3);
}

function fallInLove(){
//draw heart in his chest

}

//function 


