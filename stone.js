class stone{
constructor (x,y,r)

{
var options = {
isStatic:false,
restituition:0,
friction:1,
density:1.2

}
this.x=x;
this.y=y;
this.r=r
this.image=loadImage("stone.png")
this.body=Bodies.circle (this.x, this.y, this.r, options);
World.add(world, this.body);

}



display()
{

var stonePosition=this.body.position;
push()
translate(stonePosition.x, stonePosition.y);
imageMode(CENTER);
ellipseMode(CENTER);
image(this.image, 0,0,this.r*2, this.r*2)
pop()





}

}