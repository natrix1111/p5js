let zdjecie;
let bg;
let hub;
let muzyka;
let coss;

let hubert; 
let mon = [];
let punkty = 0;

function preload(){
  muzyka= loadSound("muzyka.mp3");
}

function setup() {
  createCanvas(540, 360);
  bg = loadImage("laka.jpg");
  hubert = new bohater(100,300);
  hub = loadImage("hubert.png");
  zdjecie=loadImage("doge.png");
  coss = setInterval(() => {mon.push(new money(540, random(20, 260)));},1000); 
}

function draw() {
  if(muzyka.isPlaying() == false){
    muzyka.play();
  }
  background(bg);
  rect(0, height*0.90, width, height*0.10);
  if(keyIsPressed && keyCode==32){
    hubert.up()
  }
  else {
    hubert.down()
  }
    hubert.draw();
  for (var i = 0; i < mon.length; i++) {
        mon[i].draw();
        hubert.czydotyka(mon[i])
        mon [i].x -= 1;
    }
  text("Punkty:"+ punkty, 10,10)
  if(punkty==20){
    textSize(30);
    text("Wygrałeś",210,200)
    textSize(10);
    mon = [];
    clearInterval(coss);
  }
  
}
