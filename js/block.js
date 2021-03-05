class Block{
    constructor(x,y,width,height){
        var option= {
            restitution:0.3,
            friction:1,
            density:1
            //isStatic:true
        }

        this.body = Bodies.rectangle(x,y,width,height,option)
        this.width=width
        this.height=height
        this.image = loadImage("polygon.png");
        World.add(world,this.body)
    }

    display(){
        push()
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0,0, this.width, this.height);
        pop()
    }
}