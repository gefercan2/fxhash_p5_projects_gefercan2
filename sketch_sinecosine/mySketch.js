// JavaScript Document

// variations from Coding Train
// by Daniel Shiffman
//and work of Kevin Siwoff
//also:https://montana-media-arts.github.io/creative-coding-1/modules/week-7/more-mouse-events/
//will need to recheck loadImage, loadAnimation and the video pixels example


//CLASS DEFINITION
//variables needed for the class
let ball1;
let balls_array=[];

//definition of class
class Particle {
	//creates black ball
	constructor(pos){
		this.name="ball";
		this.color=(250,10,10,50);
		this.speed=1;
		this.lifespan=255;
		//p5.Vector
		this.pos= pos;
		}
	//set up action for the black ball
	bounce(){
		if (this.pos.y>= height|| this.pos.y <0){
			this.speed= this.speed * -1;
			print("border");
			}
		this.pos.y += this.speed;
	
		if (this.lifespan > 0){
			this.lifespan--;
			}
		}
 }
//END OF CLASS DEFINITION

//------------------------

//global variables
	
let angle1=0.0;
let angle2=0.0;
let angle3=0.0;
let angle4=0.0;
let angle5=0.0;
let period=1280;
let period1=125;
let period2=90;
let dotCount=0;
let amplitude1=300;
let gray_val=120;
let incremento;

//set up done once at the start
function setup() {
	//creates resizable canvas
	let cx= createCanvas(windowWidth, windowHeight);
	//put name to canvas
	cx.id=("myCanvas34");
	//initial background color
	background(120);
	//calls function
	mousePressed();
	//creates radio
	radio2=createRadio();
	//set radio variables
	radio2.option(1,'7.1');
	radio2.option(2,"7.2");
	radio2.option(3,"7.3");
	radio2.option(4,"7.4");
	radio2.option(5,"7.5");
	//position the radio box
	radio2.position(width/10,height/4 + (height/6));
	noStroke();
	fill(255,220,0);
	}


// rendered continuously
function draw() {

	//list of executing functions
	fondo();
	texticles();

	//class object
	newObject();
	
	//move everything to the center
	translate(width/2,height/2);
	
	//call functions
	//set up function to be called
	  switch (radio2.value()) {
    //radio value is always a string
    case "1":
      Stars();
      break;
    case "2":
      pulsatingBigRedCircle();
			pulsatingLittleBlueCircle();
				twoAxes();
      break;
    case "3":
			LissajeousCurve();
			break;
		case "4":
			sineCosineSquare();
				sineBall();
		  break;
		case "5":
			sineCosineBall();
			Shape1();
			
      break;
				
		}
	//creates an ellipse in the center
	fill(255);
	ellipse(0,0,100);
}


function mousePressed(){
	//creates new black ball when mouse clicked
	balls_array.push(new Particle(createVector( random(width),random(height/4))));
}

function newObject(){
		for(i=0;i<balls_array.length;i++){

		fill(balls_array[i].color,60);
		noStroke();

		ellipse(balls_array[i].pos.x,balls_array[i].pos.y,50,50);	
		balls_array[i].bounce();

		fill(255);
		noStroke();
		textSize(12);
		text(balls_array[i].name, balls_array[i].pos.x ,balls_array[i].pos.y);
		}
	}



function sineBall(){
	
	//oscillating ball
	let amplitude=height/4;
	angle1 +=0.05;
	let x=sin(degrees(angle1))* amplitude;
	let y=sin(degrees(angle1))* amplitude;
	fill(200);
	ellipse(x,y,100,100);
}

function sineCosineBall(){
	let amplitude=height/4;
	angle2 +=0.05;
	let x=cos(degrees(angle2))* amplitude;
	let y=sin(degrees(angle2))* amplitude;
	fill(200);
	ellipse(x,y,100,100);
}

function sineCosineSquare(){
	let amplitude=width/4;
	let angle= frameCount/period*1260;
	x=cos(angle)*amplitude;
	fill(233);
	rect(x,0,40,40);
}


function Shape1(){
	angleMode(DEGREES);
		beginShape();
		for(i=0;i<dotCount;i++){
			angle3= i/period1 * 360;
			x=sin(angle3)*amplitude1;
			angle3= i/period2 * 360;
			y=sin(angle3)*amplitude1;
			vertex(x,y);
		}
		dotCount=dotCount+0.5;
		endShape();
}




function LissajeousCurve(){
		stroke(200);
		noFill();

		if (dotCount<900)
		{ 
			Shape1();
				}
		else if(dotCount>=900){

			dotCount=-100;
			dotCount=dotCount+1;
			Shape1();
		}

}
 
//changes color of the background 
function fondo(){
	background(gray_val,20);
	gray_val=gray_val+0.5;
	gray_val=gray_val%180;
}

function texticles(){
	//local variables
	let numbers1= ((frameCount/period)*360)*100;
	let numbers2= sin(((frameCount/period)*360)*100);
	let pendulum= floor(sin((frameCount/period)*360)*100);
	//styles
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
	//textbox at the top
	text("exercise made with loops, if statements" +
			 " as well as use of sine and cosine functions" +
			 " from different global variables, these have been " +
			 "combined and recombined, as you will see in the code",width/10,175,300,400);
	//bignumber
	noStroke();
	fill(200);
	textSize(123);
	text("03",width/10,height-(height/20));
	//
	if(pendulum === 0){
			textSize(100);
			textAlign(CENTER);
			text("hola",width/2,height/2);
	}
	//rectangles
	noStroke();
  fill(180)
	rect(width/10,400,20,50);
	rect(width/10+30,400,10,50);
	rect(width/10+50,400,random(50),50);
	//lines
	strokeWeight(2);
	stroke(113);
	line(width/10,20,width-100,20);
	line(width/10,150,width/10 + 200,150);
	line(width/10,250,width/10 + 200,250);
	line(width/10,390,width/10 + 200,390);
	line(width/10,height-20,width-100,height-20);
	
	textSize(20);
	text("since loading,the frame count is: " + floor(frameCount )+
			 " while playing, the frame rate has been: " + floor(frameRate())+
			 " and the time spentseeing this: " + floor (millis()/1000)+ " seconds" +
			 " the numbers of balls after clicking the mouse is: " + balls_array.length,width/10,height/1.5,300,500);

	}



function twoAxes(){
	let ampx=(0.9*width)/2;
	let ampy=(0.9*height)/2;
	let x=map(cos(angle4),-1,1,-ampx,ampx);
	let y=map(cos(angle5),-1,1,-ampy,ampy);
	strokeWeight(2);
	line(0,0,x,y);
	circle(x,y,32);
	angle4 = angle4 + 0.5;
	angle5 = angle5 + 0.9;
}



function example1(){
var x= mouseX;
	var y= mouseY;
	var unoz = x >=160 && y >=160 ;
	var dosz = x <=400 && y <=400;
	var tresz = unoz && dosz;
	
	if (tresz){
	ellipse(x, y, 80,80);}
}


//create radial circles
	function Stars(){
			noStroke();
			
			for(r1=200;r1<width; r1++){
				for(angle2=50; angle2<370; angle2++){
						let x =r1*cos(angle2);
						let y =r1*sin(angle2);
					
						if(mouseX<width/2){
							//push();
							//translate(0,10);
		 					//rotate(mouseX-100);
							fill(110,100,200,30);
							ellipse(x,y,width/(r1/4),width/(r1/4));
							//pop();
						}
						else if(mouseX>width/2){
			
							push();
							translate(0,0);
							rotate(mouseY-50);
							fill(100,100,200,20);
							ellipse(x,y,x/10,x/10);
							pop();
						}
						angle2= angle2+30;
					}
				r1=r1+100;
			}
		}


	function pulsatingBigRedCircle(){
		//pulsating big red circle
		let angle=0;
		let angulo=0;
		let circulo;
		let radiuses=[0,100,150,250];
		let r=150;
		let radius1= map(sin(angulo),-1,1,0,200);	
		let incremento= 360/6;
		fill(220,100,100,90);
		noStroke();
		circle(0,0,radius1*2);
		angulo= angulo+incremento+1;
    console.log(frameRate());
		}



	function pulsatingLittleBlueCircle(){
	
		//pulsating little blue circle
		let angle=0;
		let angulo=0;
		let circulo;
		let radiuses=[0,100,150,250];
		let r=150;
		let y= map(sin(angulo),-1,1,-200,200);
		let incremento= 360/6;
		fill(100,100,200);
		strokeWeight(2);
		stroke(150);
		line(0,0,0,y);
		circle(0,y,32);
		//let incremento= 360/6;
		angulo= angulo+incremento;
    console.log(frameRate());
		}

  	


  
