class Drops{
	constructor(x,y){
		this.body = Bodies.circle(x,y,10);
		this.r=10;
		World.add(world,this.body);
	}
	
	update(){
		this.body.position.y = 0;
	}

	display(){
		push();
		var pos = this.body.position;
		fill("cyan");
		ellipseMode(RADIUS);
		ellipse(pos.x,pos.y,this.r,this.r);
		pop();
	}
}