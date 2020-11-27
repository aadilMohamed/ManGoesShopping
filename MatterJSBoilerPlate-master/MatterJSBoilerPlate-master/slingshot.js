class Sling{
    constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.01,
        length:1
    }
    this.pointB = pointB
    this.sling = Constraint.create(options)
    World.add(world,this.sling)
    }
    

    gettingThrown(){
    this.sling.bodyA = null
    }
}