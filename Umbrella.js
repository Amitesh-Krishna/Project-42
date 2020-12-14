class Umbrella{
	constructor(x,y){
		var options = {
			isStatic : true
		}
		this.body = Bodies.circle(x,y,100);
		World.add(world,this.body);
		this.image = loadImage("images/Walking Frame/walking_1.png");
	}

	display(){
		var pos = this.body.position;
		//image(this.image,pos.x,pos.y);
		push();
		fill("Green");
		ellipse(pos.x,pos.y,100,100);
		pop();
	}
}