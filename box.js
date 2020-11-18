class Box{
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            friction:1.0,
            density:0.4
        }
this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width
this.height=height
World.add(myWorld,this.body)
    }
    display(){
        var angle=this.body.angle
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
       rectMode(CENTER) 
       fill("red")
       strokeWeight(3)
       stroke("blue")
       rect(0,0,this.width,this.height)
    pop()
    }
}