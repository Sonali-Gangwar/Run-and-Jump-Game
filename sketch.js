let train=[]
function preload(){
  uimg=createImg("run.gif","image")
  simg=loadImage("object.jpg");
  bimg=loadImage("background.jpg");
  oimg=loadImage("gameover.jpg")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  unicorn =new Unicorn();
  image(simg, 0, 0);
}


function keyPressed()
{
  if(this.key==' ')
  {
    unicorn.jump();
  }
}

function draw() {
 
  if(random(1)<0.005)
  {
    train.push(new Train());
  }
  
  background(bimg);
  
  for(let t of train)
  {
    t.move();
    t.show();
    if(unicorn.hits(t)){
      console.log("game over");
      background(oimg);
      uimg.remove();
      noLoop();
      
    }
  }
  unicorn.show();
  unicorn.move();
}