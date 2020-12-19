class Drops{
	constructor(x,y){
		this.body = Bodies.circle(x,y,10);
		this.r=1.2;
		World.add(world,this.body);
	}
	
	update(){
		Matter.Body.setPosition(this.body,{x : random(0,400),y:0})
	}

	display(){
		push();
		var pos = this.body.position;
		noStroke();
		fill("blue");
		ellipseMode(RADIUS);
		ellipse(pos.x,pos.y,this.r,this.r);
		pop();
	}
}