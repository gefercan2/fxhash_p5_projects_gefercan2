
	//use lerp(lerpcolor) done
	//use curves
	//use Bezier
  //use forloop done
  //use sin and cosin
	//use radial coordinates done

	//create global variables
	let cv;
	let fxmap_width;
	let fxmap_height;
	let fxmap_colour;
	let period;
	let amplitude;
	let angle;
	let radius;
  let colors;

/*
	class leaf{
		leaf_constructor(){
			this.x;
			this.y;
		}
	}

	class stroke{
		stroke_constructor(){
			this.x;
			this.y;
		}
	}

	class lines{
			line_constructor(){
			this.x;
			this.y;
		}
	}
*/

	//preloading 
	function preload(){
	//not used here
	}

function setup() {
	print ("look , I can code!");
	//set angle mode
	angleMode(DEGREES);
	//create canvas
	cv = createCanvas(windowWidth, windowHeight);
	//mapping
	fxmap_width = map(fxrand(),max(fxrand()),min(fxrand()),-200,200,true);
	fxmap_height = map(fxrand(),max(fxrand()),min(fxrand()),-200,200,true);
	fxmap_colour = map(fxrand(),max(fxrand()*500),min(fxrand()*1000),40,230,true);
	//colours palette
	colors= {	uno:color(fxmap_colour,150,100),
						dos:color(fxmap_colour,250,100),
						tres:color(fxmap_colour,220,100),
						cuatro:[fxmap_colour,220,100],
					 	cinco:[fxmap_colour,110,250,10]
								};
	//calling functions
	
	
	
	
	



	

	}

function draw() {
	if(frameCount<(fxrand()*40)){
	push();
		franjasCielo(colors.dos,colors.tres);
		rotate(12);

		franjasFloor(colors.uno,colors.cuatro);rotate(12);
		background(fxrand()*200,20);
		translate(-width/(fxrand()*200),-height/(fxrand()*200));
		background(fxrand()*500,20);
		radial_coordinates();
		translate(fxrand()*200,-height/(fxrand()*200));
		background(fxrand()*600,20);
		text1();
	pop();

	}
	else {
		fxpreview();
	}
	
	}
	

	//functions called
	//upper background
function franjasCielo(a,b){
		push();
		noFill();
		for(i=10;i<width;i=i+130){
			 stroke(b);
			 arc(width/2,height/2,i+45,height/2,fxrand()*i,fxrand()*1000,i+45,height/2);
			 rotate(fxrand()*10);
			 arc(width/2,height/2,width,(fxrand()*1000),30,90);
			 i=i+45;
			}
		pop();

	}

//lower background
function franjasFloor(a,b){
	push();
	//loop for creation of elements, wider origin and end because of skew
	for(x=-width/4;x<width+width/2;x=x+width/20){
		//looping diagonal rectangles
			stroke(a);
			strokeWeight(fxrand());
			noFill();
			arc(width/2, height/2, (x-width/2)-fxrand()*5, (x-width/2)-fxrand()*5,(x-width/2)-fxrand()*5, (x-width/2)+fxrand()*100);
		
			}
	pop();
	}


function radial_coordinates(){
	push();
	translate(width/2, height/2);
	angleMode(DEGREES);

	for(angle=0; angle<359;angle=angle+5){
		//calculate polar coordinates
		radius = fxrand()*width/4 ;
		let x = radius * cos(angle);
		let y = radius * sin(angle);
		
		//execute functions and create elements
		rotate(angle+fxrand()*50);
		leaf2(0,0,x,y,fxrand()*20+angle,y,fxmap_colour+angle,fxmap_colour-angle);
		movingArc(x,y);
	
	
		}
	pop();
	
}

//random curves
function movingArc(x,y){
	//color of curves
		noFill();
		strokeWeight(fxrand()*2);
		stroke(fxrand()*50,fxrand()*32);
	//loop for curves
	for (x1=0;x1<50;x1=x1+10){
		ellipse(x,y, fxrand()*100);
		arc(fxrand()*50, fxrand()*100,   x,y,   x1,x);
		arc(x,y,   x1,x,   fxrand()*200,fxrand()*100);
		arc(fxrand()*50,  fxrand()*300,   x,y,   x1,x );
		arc(x,y,   x1,x,   fxrand()*400,fxrand()*200, );
	}
	
}

//a text
function text1(){
	push();
	noStroke();
  fill(15,35);
	textSize(25);
	text(fxrand()*1000 + " " + frameCount,100,200);
	pop();
}

//a leaf
function leaf2(transX, transY,x,y,a,b,color1,color2){
	push();
	translate(transX,transY);
	strokeWeight((fxrand()*5));
	stroke(color1,(fxrand()*5));
	noFill();
	line (x-a-b, y, x,y,  x,y-b);
	line (x,y-b, x-a-b,y-b);
	line (x+a+b, y-(fxrand()*5), x,y, x,y-b);
	line (x, y, x,y-b, x+a+b,y-b);
	pop();
}



//END







