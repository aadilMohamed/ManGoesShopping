class Boy{
    constructor(x,y,width,height){
    var options= {
        isStatic : true
    }
    this.image = loadImage("sprites/boy.png")
    this.width = width;
    this.height = height;
    this.body = Matter.Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body)
    }
    display(){
      push();
      translate(this.body.position.x,this.body.position.y);
      rotate(this.body.angle);
      image(this.image,0,0,this.width,this.height)
      pop();  
    }
    }