function Block(x, y, img) {
  this.xVal = x;
  this.yVal = y;
  this.img = img;
  this.speed = 3;



  this.display = function() {
    image(this.img, this.xVal, this.yVal);

  };

  this.move = function(direction) {
    if (direction == 1) {
      this.xVal += this.speed;
    } 
    else {
      this.xVal -= this.speed;
    }
  }

  this.stop = function() {

    this.speed = 0;

  }

  this.newCoord = function(newX, newY) {
    this.xVal = newX;
    this.yVal = newY;
  }
}