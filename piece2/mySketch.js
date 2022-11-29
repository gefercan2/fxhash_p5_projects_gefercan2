
	//use lerp
	//use curves
	//use Bezier
  //use forloop
  //use sin and cosin
	//use radial coordinates
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

	//preloading 
	function preload(){
	
	}

function setup() {
	
	//set angle mode
	angleMode(DEGREES);
	//create canvas
	cv = createCanvas(windowWidth, windowHeight);
	//mapping
	fxmap_width = map(fxrand(),max(fxrand()),min(fxrand()),-200,200,true);
	fxmap_height = map(fxrand(),max(fxrand()),min(fxrand()),-200,200,true);
	fxmap_colour = map(fxrand(),max(fxrand()*1000),min(fxrand()*1000),80,240,true);
	//colours palette
	colors= {	uno:color(fxmap_colour,150,100),
						dos:color(fxmap_colour,250,100),
						tres:color(fxmap_colour,110,100),
						cuatro:[fxmap_colour,120,100],
					 	cinco:[fxmap_colour,110,250]
								};
	//calling functions
	franjasCielo(colors.uno,colors.tres);
	franjasFloor(colors.dos,colors.cuatro);
	text1();
	
	radial_coordinates();
	stroke1();
	scale(1.5);
	translate(fxmap_width,fxmap_height);
	radial_coordinates();

	}

function draw() {
	//calling functions

	}
	

	//functions called
	//upper background
function franjasCielo(a,b){
		let c = lerpColor(a, b, 0.2);
		let d = lerpColor(a, b, 0.4);
		let e = lerpColor(a, b, 0.6);
		let f = lerpColor(a, b, 0.8);
		noStroke();
		fill(a);
		rect(0,0,width,height/2);
		fill(c);
		rect(0,0,width,height/3-fxrand()*100);
		fill(b);
		rect(0,0,width,height/7-fxrand()*100);
		fill(d);
		rect(0,0,width,height/4-fxrand()*100);
		fill(e);
		rect(0,0,width,height/5-fxrand()*100);
		fill(f);
		rect(0,0,width,height/6-fxrand()*100);
		fill(b);
		rect(0,0,width,height/7-fxrand()*100);
}

//lower background
function franjasFloor(a,b){
	push();
	fill(a);
	rect(0,height/2,width,height/2);
	//defines tones
	noStroke();
	fill(b);
	//skew 45 degrees
	shearX(45);
	//loop for creation of elements, wider origin and end because of skew
	for(x=-width/2;x<width+width/2;x=x+width/20){
		//looping diagonal rectangles
			rect(x-width/2,height/2,width/50,height/2);
		}
	pop();
	}


function radial_coordinates(){
	push();
	translate(width/2, height/2);
	stroke(colors.uno,100,10,30);
	strokeWeight(0.5);
	angleMode(DEGREES);

	for(angle=0; angle<359;angle=angle+5){
		
		//calculate polar coordinates
		radius = fxrand()*width/4 ;
		let x = radius * cos(angle);
		let y = radius * sin(angle);
		
		//execute functions and create elements
		curve(fxrand()*100,fxrand()*1000,  	x, y,   y,x,  fxrand()*2000,y+angle);
		curve(fxrand()*100,fxrand()*2000,    x,y,    y,x, x+angle,fxrand()*1000);
		rotate(angle+fxrand()*100);
		leaf2(0,0,x,y,fxrand()*1000+angle,y,fxmap_colour+angle,fxmap_colour-angle);
		movingArc(x,y);
	
		}
	pop();
	
}

//random curves
function movingArc(x,y){
	//color of curves
		noFill();
		strokeWeight(0.7);
		stroke(120,60);
	//loop for curves
	for (x1=0;x1<50;x1=x1+10){
		ellipse(x,y, fxrand()*1000);
		curve(fxrand()*1000, fxrand()*1000,   x,y,   x1,x,   fxrand()*2000,fxrand()*1000);
		curve(fxrand()*500,  fxrand()*2000,   x,y,   x1,x,   fxrand()*2000,fxrand()*1000, );
		curve(fxrand()*2000, fxrand()*4000, 	x,y,   x1,y,   fxrand()*2000,fxrand()*1000 );
	}
	
}

//a text
function text1(){
	noStroke();
  fill(colors.dos);
	textSize(32);
	text(
		"the obviousness of intentions "+ fxrand()*1000 +
		"and the non sense articulation,"+ fxrand()*2000/2 +
		" places this in a weird, "+ fxrand()*2000/2 +"meaningless place,"
		+"as you will see in the code"+" the author shoudl have noticed" ,0,width/2,600,1500);
}

//a leaf
function leaf2(transX, transY,x,y,a,b,color1,color2){
	push();
	translate(transX,transY);
	fill(color1,50);
	curve (x+a+b,y,  x,y,  x,y-b, x+a+b,y-b);
	fill(color2,40);
	curve (x-a-b,y,  x,y,  x,y-b, x-a-b,y-b);
	pop();
}

//a black dash
function stroke1() {
	push();
	noFill();
	strokeWeight(1);
	stroke(fxmap_colour);
	translate(width/4,height/2);
	radius = fxrand()*1000;
	angle= fxrand()*5000;;
		for (x=0;x<50; x=x+1){
			for (y=0;y<50; y=y+1){
				curve(angle-x,
							radius+x,
							radius-y,
							y*sin(angle),
							x* cos(angle), 
							x*y/y,
							x/y, 
							x/5);
			}	
		}
	angle += 0.5;
	radius = radius - 0.1;
	pop();
}




