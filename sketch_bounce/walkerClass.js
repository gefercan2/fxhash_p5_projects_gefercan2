// JavaScript Document

// variations from Coding Train
// by Daniel Shiffman

	


class Walker {

	constructor(x,y,m){
		//creating the object variables and parameters
		this.pos=createVector(x,y);
		this.vel=createVector(x,y);
		this.acc=createVector(x,y);
		this.mass=m;
		this.r=sqrt(this.mass)*20;

		//this.vel=p5.Vector.random2D();
		//this.vel.mult(random(2));
	
	}
		
	friction(){
		let diff=height-(this.pos.y + this.r);
		if(diff<1){
			console.log("friction");
			//direction of friction;
			let friction=this.vel.copy();
			friction.normalize();
			friction.mult(-1);

			//magnitude of friction
			let mu=0.1;
			let normal=this.mass;
          		friction.setMag(mu*normal);
          		this.applyForce(friction);

		}		
	}


	applyForce(force){
		let f=p5.Vector.div(force,this.mass);
		this.acc.add(f);
	}

	edges(){
		if(this.pos.y >= height-this.r){
			this.pos.y=height-this.r;
			this.vel.y *= -1;
		}

		if(this.pos.x >= width-this.r){
			this.pos.x=width-this.r;
			this.vel.x *= -1;
		}

		else if(this.pos.x <= 0-this.r){
			this.pos.x=this.r;
			this.vel.x *= -1;
		}
	}


	update(){
     	//let mouse=createVector(mouseX,mouseY);
     	//this.acc=p5.Vector.sub(mouse, this.pos);
		//this.acc.setMag(0.1);

		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.set(0,0);
	}
	
	show(){
		fill(122);
		stroke(255,100);
		strokeWeight(12);
		point(this.pos.x,this.pos.y);
		ellipse(this.pos.x, this.pos.y,this.r*2);
	}
}