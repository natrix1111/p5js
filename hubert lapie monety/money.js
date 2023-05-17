class money{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  draw() {
    push()
    fill("gold");
    rectMode(CENTER);
    image(zdjecie,this.x, this.y, 40, 40);
    pop()
  }
}