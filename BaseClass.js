class BaseClass{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':1,
            'density':1.0
            }
            this.body = Bodies.rectangle(x,y,width,height,options)
            this.width = width
            this.height = height
            this.image = loadImage("sprites/base.png");
            World.add(world, this.body)
    }

    display(){
        push ()
        var pos = this.body.position
        var angle = this.body.angle
        translate(pos.x,pos.y)
        fill ("red")
        rotate(angle)
        //rect(0,0,this.width,this.height)
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop ()
    }
}