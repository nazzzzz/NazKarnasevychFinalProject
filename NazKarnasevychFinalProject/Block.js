function Block(x, y, img) {
  this.xVal = x;
  this.yVal = y;
  this.img = img;
  this.speed = 3;



  this.display = function() {
    image(this.img, this.xVal, this.yVal);

  };
  
  this.move = function(xval) {
    this.xVal +=this.speed;
  }
  
  this.stop = function(){
    this.speed = 0;
  }
}