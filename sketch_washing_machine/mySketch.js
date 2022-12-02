

  //loadimage
	function preload(){
	img=loadImage("1.png");
	img1=img;
	img2=img;
	imgMask=loadImage("1.png");
	}

function setup() {
	
  // Sets the screen
  createCanvas(innerWidth, innerHeight);
	//variables
	angleMode(DEGREES);
	let fxwidthmap = map(fxrand(),max(fxrand()),min(fxrand()),width/3,width-(width/3),true);
	let fxheightmap = map(fxrand(),max(fxrand()),min(fxrand()),height/3,height-(height/3),true);
	let fxcolourmap = map(fxrand(),max(fxrand()),min(fxrand()),60,240,true);
  ///canvas color
  background(fxcolourmap-20,fxcolourmap+190,floor(fxrand()+120));

	fill(fxcolourmap-50,fxcolourmap+210,fxcolourmap+140);
	noStroke();
	rect(width/30, height/30, width-(width/30*2), height-(height/30*2));
	
	push();
	rotate(45);
	translate(10,-500);
	fill(fxcolourmap+20,fxcolourmap+50,fxcolourmap+10);
	rect(-10, (fxrand()*1000), width+500, (fxrand()*height/2));
	rect(-10, (fxrand()*500), width+500, (fxrand()*height/4));
	rect(-10, (fxrand()*300), width+500, (fxrand()*height/6));
	pop();
	

  //call image
	image1();
	//call functions
 	circlesinthemiddle();
	loop1();
	randomShapes1();
	text1();
	

  }

	function image1(){
	 		push();
	 		translate(width/2,height/2);
	 		angleMode(degrees);
	 
	  
  		tint(floor(fxrand()*120),30,230,100);
	 		rotate(fxrand()*500);
	 		image(img,0,0,width/3,width/2);
	 		
			tint(100,floor(fxrand(120)),230,100);
	 		rotate(fxrand()*800);
	 		image(img2,2,2,width/3,width/2);
	 
	  	//img.loadPixels();
	 		tint(100,floor(fxrand()*550),230,100);
			rotate(fxrand()*1500);
	  	image(img2,2,2,width/2.8,width/1.8);
	  
			pop();
	 
 		}
  
	  function circlesinthemiddle(){
	
		noStroke();
		fill(floor(fxrand()*200),120,230,50);
  	circle(width/2,height/2,fxrand()*2000);	
		fill(floor(fxrand()*350),200,200,50);
  	circle(width/2,height/2,fxrand()*1500);
  	fill(floor(fxrand()*300),50);
  	circle(width/2,height/2,fxrand()*1000);
  	fill(floor(fxrand()*400),50);
  	circle(width/2,height/2,fxrand()*500);
		console.log(fxrand()*1000);
		console.log(fxrand()*500);
		console.log(fxrand(width)*1000);
  	fill(100);
  	circle(fxrand()+(width/2),fxrand()+(height/2),width/10);

	}

	/// random shapes
    function randomShapes1(){
		//set up colors
		noFill();
		stroke(fxrand()*1300, 80);
		//shapes
    	quad(width/2, height/2, fxrand()*height/3, (fxrand()*height/2), 216, (fxrand()*width), (fxrand()*1000));
			quad(width/2, height/2, fxrand()*width/2, (fxrand()*width/3), 216, (fxrand()*height), (fxrand()*height/2),(fxrand()*2000));
			quad(width/2, height/2, fxrand()*height, (fxrand()*height/4), 246, (fxrand()*width/3), (fxrand()*3000,600));
			quad(width/2, height/2, fxrand()*(height*5), fxrand()*6000, 276, fxrand()*width/10, fxrand()*3000,500);
			quad(width/2, height/2, fxrand()*(height/10), fxrand()*3000, 266, fxrand()*width/30, fxrand()*3000,fxrand()*3400);
	}


  ///circles grid
	function loop1(){
		for(x=100; x<(width-100);x++){
			for(y=50; y<(height-50);x++){
				fill(fxrand()*600,100,fxrand()*300,50);
				noStroke();
				push();
				rotate(45);
				translate(width/4,-height/1.5);
				circle(width/2,y,floor(fxrand()*120));
				circle(x,width/2,floor(fxrand()*y));
				pop();
				y=y+200;
			}
		x=x+200;
		}
		
	}
	
	

	
	// radial circles
	function Stars1(){
		
		///color settings
		strokeWeight(22);
		stroke((fxrand()*5),fxrand(256)/2,fxrand(256)/2);
		/// set AngleMode for x and y
		angleMode(DEGREES);
		/// for loops for x and y
		for(r1=250;r1<width;r1++){
			 for(angle1=0; angle1<=440; angle1++){
		 			///generates circle coordinates
       			let x=r1*cos(angle1);
						let y=r1*sin(angle1);
					///ellipses set up
						push();
						translate(width/2,height/2);
						noStroke();
						fill(fxrand(256)-10,fxrand(256),fxrand(256)-20,19);
						circle(x,y,floor(fxrand()*r1/14));
						noFill();
						stroke(fxrand()/156,12);
						circle(x,y,floor(fxrand()*x-y));
						noStroke();
						fill(50,50,200,12);
						circle(x,y,floor(fxrand()*x/y));}
						angle1= angle1+200;
				
						pop();}
					
				/// set up increments
				r1=r1 +10;
				

		}
	
	function text1(){
				let array1=["termino1","404error","ARMATOST3_ficticio","I/WILL//WASH YOU///",
										"FIXING_MACHIN3**ALLORS///","h0mV5//hom1n1//lupus","ars longa_10011",
										"carpe diem_010","vascodagama goa ltd.","001_washing machine","vita brevis 0010","ceylan",
										"4XAxaXAs_ml0 v10l3t","4s4n1s1m4s4//t3rs3","ARTiF1ci0","art3fact0","art1mana_111",
										"senatum p0pulusque romanum","panaca","apus//ffgdfgdfsg","tH3_g3st4ltVng_101","dam3r0//d3//p1zarr0"];
				let fxmap_text = map(fxrand(),max(fxrand(100)),min(fxrand(1000)),2,20,true);
				stroke(fxrand()*1000,180,190,230);
				strokeWeight(3);
				noFill();
				textSize(100);
				text(floor(fxrand()*1000),width- width/5,height-width/10);
				push();
				blendMode(MULTIPLY);
				rotate(45);
				translate(-width/10,-300);
				textWrap(CHAR);
				textLeading(100);
				textSize(49);
				text(array1[floor(fxmap_text)]+"**" +"///"+ floor(fxrand()*1000),width/2 - width/3,height/12,700,800);
				pop();
	}




