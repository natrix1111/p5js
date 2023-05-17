class bohater {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.patyki = 0;
  }
  draw() {
    this.y = constrain(this.y,  0, height-50);
    fill("brown");      
    image(hub,this.x,this.y,50,50);
  }
  up() {
    this.y -= 5;
  }
  down() {
    this.y += 5;
  }
  czydotyka(patyk) {
    if (dist(this.x,this.y,patyk.x,patyk.y)<25) 
        {
          patyk.y = -400;
          punkty++;
        }
  }
}