// variations from Coding Train
// by Daniel Shiffman

let array1=["hola","como","estas","dijo","lentamente","el campo","desaparece","la noche","2021","23/7",];
let index=0;
let z=0;
let period=40;

//----this notation allows to use many canvaases in one HTML page
//----first canvas
var canvas_01_p5=function(p){
						p.setup=function() {
							const canvas=p.createCanvas(p.windowWidth,p.windowHeight);
							canvas.parent="canvas";
							//creating rectangles from the cnetr to outside;
							p.rectMode(p.CENTER);
							p.print("start");
						}

						p.draw=function() {
							//defining the variables
								let x=p.windowWidth/2;
								let y=p.windowHeight/2;
							//calling the functions
								basicLoops(x,y);
								basicShapes(x,y);
								basicCursor(x,y);
								basicText(x,y);
								movingBall();
								cover();
						}


						function basicCursor(x,y){
							//mapping the color
							let col1=p.map(p.mouseX, p.width-p.width, p.width ,50 ,210);
							let col2=p.map(p.mouseX, p.width-p.width, p.width ,50 ,100);
							p.fill(col1,col2,col1,col2);
							//placing the circles
							let x1=p.ellipse(x - p.mouseX + (x/10),x- p.mouseY+(x/10), x/4, x/4);
							let x2=p.ellipse(x + p.mouseX - (x/10),x+ p.mouseY-(x/10), x/8, x/8);
							let x3=p.ellipse(y + p.mouseX/2,x- p.mouseY+120, x/8, x/8);
							let x4=p.ellipse(y + p.mouseX - 120,y- p.mouseY+120, x/4, x/4);
							let x5=p.ellipse(p.mouseX - 120,p.mouseY+120, x/24, x/24);
						}

					 function movingBall(){
						 p.ellipse(z,200,100,100);
								 if(z>p.width){
									 p.print("off")
								 }
							z = z +3;
						}

						function basicShapes(x,y){
								//ESSENTIAL SHAPES

							p.fill(123);
							p.rect(x,y,x/2,x/2 ); 
							p.noStroke();
							p.fill(150,13,14,80);
							//circle
							p.ellipse(x,y,y/2,y/2);
							//rectangulo
							p.fill(100,23,34,70);
							p.rect(x,y,y/2,y/2);
							//triangulo
							p.fill(p.width/2,23,p.height/2,80);
							p.triangle(x,y, x+50,y+(x/4),x-50,y+(x/4));
							//trapezoide
							p.quad (p.mouseX,p.height-p.height,x+ p.width,p.height-p.height,x+ p.width,p.height/2, p.mouseY+x,p.height/2);
							p.quad (p.mouseX,p.height/2,x-p.width,p.height/2,x-p.width,p.height,p.mouseY+y,p.height);
							p.fill(100,40,100,20);
							p.quad (p.mouseX,p.height-p.height,x+p.width,p.height-p.height,x+p.width,p.height, p.mouseY+x,p.height);
							p.arc(x,y,y/2,y/2,p.PI,p.PI*2);

						 //conditional loop
							if(p.mouseX < x+200 && p.mouseX > x-200 ){
								p.fill(p.random(250),13,p.random(200),90);
							}
							else{
								p.fill(p.random(140,200),p.random(140,200),p.random(140,200),100);
							}
							//arco
	
							p.fill(200,0,0,100);
							p.ellipse(x,y,50,50);
							col3 = p.map(p.mouseX,0,p.width,x-(x/4),x+(x/4));

							p.fill(0,50,100,40);
							p.beginShape();
							p.vertex(x-(x/4),y-(x/4));
							p.vertex(col3,y);
							p.vertex(x+(x/4),y-(x/4));
							p.vertex(x+(x/4),y+(x/4));
							p.vertex(col3,y);
							p.vertex(x-(x/4),y+(x/4));
							p.endShape(p.CLOSE);
						}

							function basicText(x,y){
								p.fill(255,80);
								p.textSize(x/5);
								p.textAlign(p.CENTER);
								p.text(array1[8],x,y);
								p.text(array1[9],x,y+(x/4));
								p.textSize(x/10);
								p.text(array1[index],x,y+(x/10));
							}

							function mousePressed(){
									index=index+1;
								if (index>7){
									index=0;
									}
								}

							function basicLoops(x,y){
									p.background(x,90,80);
								//BASIC LOOPS
								//using for loop to create regularly separated squares

								for(i=0;i< p.width;i++){

									if( p.mouseX < x+200 && p.mouseX > x-200){
										p.fill(p.mouseX/10,p.width/40,p.mouseY/2,p.height/20);
										p.rect(i,p.height-p.height,p.mouseX/120,p.height);
									}
									else if ( p.mouseY < y+200 && p.mouseY > y-200){
										p.fill(x/(x-y),x/(x*2),x/(x+y),p.random(100));
										p.rect(i-10,x/2,x/50,x/8);
									}
								 i=i+x/20;
								}
	

								for(x=100;x<p.width-100;x++){
										for(y=200;y<p.height-100;y++){
												p.noStroke();
												p.fill(p.width/2,y,p.height/2,y/4);
												p.ellipse(x,y,20,20);
												y = y+50;
										}
									x = x+50;
								}
							}


function cover(){
	//textos en el costado
	let numbers1= ((p.frameCount/period)*360)*100;
	let numbers2= p.sin(((p.frameCount/period)*360)*100);
	let pendulum= p.floor(p.sin((p.frameCount/period)*360)*100);
	
	p.noStroke();
  p.fill(180);
	p.textAlign(p.LEFT);
	p.textSize(14);
	p.text(numbers1,p.width/10,50);
	p.text(numbers2,p.width/10,75);
	p.text((p.frameCount % period)*100,p.width/10,100);
	p.textSize(64);
	p.text(pendulum,p.width/10,150);
	p.textSize(12);
	p.text("exercise made with loops, at a very basic level,if statements as well as other"
			 +"functions from different global variables, these have been combined and "
			 +"recombined, as you will see in the code",p.width/6.5,500,200,600);
	
	p.noStroke();
	p.fill(200);
	p.textSize(123);
	p.text("05",p.width/10,p.height-(p.height/20));
	
	p.noStroke();
  p.fill(180)
	p.rect(p.width/6.5,400,20,50);
	p.rect(p.width/10+30,400,10,50);
	p.rect(p.width/10+50,400,50,50);
	
	p.strokeWeight(2);
	p.stroke(113);
	p.line(p.width/10,20,p.width-100,20);
	p.line(p.width/10,150,p.width/10 + 200,150);
	p.line(p.width/10,350,p.width/10 + 200,350);
	p.line(p.width/10,p.height-20,p.width-100,p.height-20);
}
	
}

var myNewp5 = new p5(canvas_01_p5);
