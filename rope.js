class Rope{
    constructor(bodyA,pointB){
var options={
    bodyA:bodyA,
pointB:pointB,
stiffness:1.2,
length:400
}
this.body=Matter.Constraint.create(options)
World.add(myWorld,this.body)
this.pointB=pointB
    }
    display(){
        strokeWeight(3)
        stroke("blue")
    line(this.pointB.x,this.pointB.y,this.body.bodyA.position.x,this.body.bodyA.position.y)
    }
}