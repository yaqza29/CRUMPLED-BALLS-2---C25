class dustbin{

    constructor(x,y,width,height){
        var options = {
         isStatic: true
         ,'restitution':1
        };
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);

        this.image = loadImage("dustbingreen.png");

    }


    display(){
        var pos = this.body.position;
        //var angle = this.body.angle;

        //this.body.shapeColor = rgb(233, 22, 64);
        
        push();

        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 320, 255, 230, 180);
        //rect(pos.x, pos.y, this.width, this.height);


        pop();
 
        
        }
}