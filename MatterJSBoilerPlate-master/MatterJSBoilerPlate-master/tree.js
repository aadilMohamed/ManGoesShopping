class Tree{
    constructor(x,y,width,height){
    var options= {
        isStatic : true
    }
    this.image = loadImage("sprites/tree.png")
    this.width = width;
    this.height = height;
    this.body = Matter.Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body)
    }
    display(){
      push();
      rectMode(CENTER);
      translate(this.body.position.x,this.body.position.y);
      rotate(this.body.angle);
      image(this.image,0,0,this.width,this.height)
      pop();  
    }
    }