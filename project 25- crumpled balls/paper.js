class Paper
{

	constructor(x,y,r)
	{
		this.x=x;
		this.y=y;
		this.radius=r
		var options={
			isStatic:false,
			restitution:0.3,
			friction: 0,
			density:1.2
	
		}
		//this.object=Bodies.circle(x,y,r,options)

		
		this.body=Bodies.circle(this.x, this.y, (this.radius-20)/2, options)
		World.add(world, this.body);
		this.a=loadImage("paper.png")
		
		
	}
	display()
	{
		//eliipseMode(RADIUS)
		image (this.a,this.body.position.x,this.body.position.y,this.radius,this.radius)
		 

		
}

}
    
