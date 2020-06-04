class Train{
   constructor(){
     this.r=60
     this.x=width;
     this.y=height-this.r;
   }
  
  move(){
    this.x -= 12;
  }
  
  show(){
    image(simg,this.x,this.y,this.r,this.r)
  }
}