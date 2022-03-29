class Paper{
constructor(x,y,r)
{  
var options= {
    'restitution':0.3,
    'friction':0,
    'density':1.2
}    
this.x=x;
this.y=y;
this.r=r;

this.image=loadImage("paper.png")
this.papel=Bodies.circle(this.x, this.y, this.r, options);



World.add(world, this.papel);


}
display()
{    
var positionpapel=this.papel.position;


			push()
			translate(positionpapel.x, positionpapel.y+10);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r,this.r);
			//rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
			
	}

}


















