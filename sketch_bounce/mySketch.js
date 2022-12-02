// JavaScript Document

// example from Coding Train
//Nature of Code for p5
// by Daniel Shiffman

	

let angle=0;
let angulo=0;
let walker1;
let radiuses=[0,100,150,250];
let period=40;

function setup() {
	createCanvas(windowWidth, windowHeight);
	walker1= new Walker(0,0,2); 
	walker2= new Walker(0,0,4);
}
function draw() {

	myFirstCircle();
  if (mouseX>(width/4)-width/2 && mouseX<(width/4)*3){
		walkers();
	}	
	cover();
	
}




	function myFirstCircle(){
	
		push();
		translate(width/2,height/2);

		m=map(mouseX,0,width,10,255);
		background(m+10,m+20,m+30,10);
		strokeWeight(2);
		noFill();
		stroke(150);
		let r=150;
		
		//little circles around
		ellipse(r+100,0,12,12);
		ellipse(0,r,12,12);
		ellipse(0,-r,12,12);
		ellipse(-r,0,12,12);
		
		//pulsating big red circle
		fill(220,100,100,90);
		noStroke();

		let radius1= map(sin(angulo),-1,1,0,200);
		circle(0,0,radius1*2);
		let incremento= 360/6;
		
		angulo= angulo+incremento;
		//pulsating little blue circle
		
		fill(100,100,200);
		strokeWeight(2);
		stroke(150);

		let y= map(sin(angulo),-1,1,-200,200);
		line(0,0,0,y);
		circle(0,y,32);
		//let incremento= 360/6;
		
		angulo= angulo+incremento;
    console.log(frameRate());
		pop();
	}


	

	function walkers(){

		if (mouseIsPressed){
		let wind = createVector(0.1,0);
		walker1.applyForce(wind);
		walker2.applyForce(wind);
		}
		let gravity = createVector(0,0.2);
		//walker1.applyForce(gravity);
		//walker2.applyForce(gravity);

		let weightA = p5.Vector.mult(gravity, walker1.mass);
		let weightB = p5.Vector.mult(gravity, walker2.mass);
		walker1.applyForce(weightA);
		walker2.applyForce(weightB);

		walker1.friction();
		walker1.update();
		walker1.edges();
		walker1.show();
		
		walker2.friction();
		walker2.update();
		walker2.edges();
		walker2.show();
}



function cover(){
	let numbers1= ((frameCount/period)*360)*100;
	let numbers2= sin(((frameCount/period)*360)*100);
	let pendulum= floor(sin((frameCount/period)*360)*100);
	//visuals 
	noStroke();
  fill(180);
	textAlign(LEFT);
	textSize(14);
	//textos
	text(numbers1,width/10,50);
	text(numbers2,width/10,75);
	text((frameCount % period)*100,width/10,100);
	textSize(64);
	text(pendulum,width/10,150);
	textSize(12);
	text("exercise designed by Daniel Shiffman, of the Coding Train,made with loops, if statements as well as use of sine and cosine functions from different global variables, these have been combined and recombined, as you will see in the code",width/10,175,300,300);
	
	noStroke();
	fill(200);
	textSize(123);
	text("08",width/10,height-(height/20));
	
	noStroke();
  fill(180)
	rect(width/10,(height/8)*6,20,50);
	rect(width/10+30,(height/8)*6,10,50);
	rect(width/10+50,(height/8)*6,50,50);
	
	strokeWeight(2);
	stroke(113);
	line(width/10,20,width-100,20);
	line(width/10,150,width/10 + 200,150);
	line(width/10,height-20,width-100,height-20);
}
      

