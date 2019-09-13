//META{"name":"Clock"}*//

class Clock {
	constructor () {

	}

	getName () {return "Clock";}

	getDescription () {return "A little digital clock";}

	getVersion () {return "1.1.0";}

	getAuthor () {return "L7Yuki Gasai";}
	
	//legacy
	load () {}

	start () {
		create();
		
		function create(){
	
			var keys = [];
			var wakeuptime = 7;
			var rgb = false;
			var box  = document.getElementsByClassName("size14-e6ZScH title-eS5yk3 da-size14 da-title");
			var box2  = document.getElementsByClassName("size10-tblYdA subtext-3CDbHg da-subtext");
			var clock = 0; //STANDARTZEIT BERLIN
		
			if(box.length){
				
				box2[0].innerHTML = "Berliner Zeit";
				box[0].addEventListener("keydown", function(e) {
					
					keys[e.keyCode] = true;
					
					if (keys[46]) {
						if(rgb){
							rgb=false;
						}else{
							rgb=true;
						}
					}	
				
					if (keys[38]){ 
						wakeuptime++;
						box[0].innerHTML = '' +wakeuptime;
					}
						
					if (keys[40]){
						wakeuptime--;
						box[0].innerHTML = '' +wakeuptime;
					}
				
				});
			
				box[0].addEventListener("keydown", function(e) {
					keys[e.keyCode] = false;
				});
			
		
				box[0].addEventListener("mousewheel", function(){
			
				var e = window.event || e;
				var dd = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
				clock = clock + dd*-1
				if (clock > 3){ clock = 0;}
				if (clock < 0){ clock = 3;}
			
				
				});
			
		
				var run = 0;
				var d = new Date();
				var sek = d.getSeconds();
				var min = d.getMinutes();
				var stu = d.getHours();
		
				var r = 255;
				var g = 0;
				var b = 0;
				var Phase= 0;
		
				box[0].innerHTML ='12:59:59';
				box[0].style.color = 'rgb(255, 0, 0)';
				box[0].style.fontSize = "17px";
		
		
				function Update(){
			
				var d = new Date();
				var sek = d.getSeconds();
				var min = d.getMinutes();
				var stu = d.getHours();

				if(clock == 0){
					box2[0].innerHTML = "Berliner Zeit";
				}

					if(clock == 1){
						box2[0].innerHTML = "Texsas Zeit";
						stu = stu - 7;
						if(stu < 0){
							stu = stu+24;
						}
					}	
					if(clock == 2){ 
						box2[0].innerHTML = "Tokio Zeit";
						stu = stu + 7;
						if(stu > 23){
							stu = stu-24;
						}
					}
				
					if(clock == 3){
						box2[0].innerHTML = "Zeit bis zum Aufstehen";
						sek = 59 - sek;
						min = 59 - min;
						if(stu > wakeuptime ){
							stu = 24 - stu;
							stu = stu + wakeuptime-1;
						}else{
							stu = wakeuptime-1 - stu;
					
						}
					}
				
					sek = sek + "";
					min = min + "";
					stu = stu + "";
				
					if(sek.length < 2)sek = "0" + sek;
					if(min.length < 2)min = "0" + min;
					if(stu.length < 2)stu = "0" + stu;
				
			
					box[0].innerHTML = ''+ stu + ':' + min + ':' + sek +'';	
		
					if(rgb){
			
						if(Phase == 0){
							b++;
							if(b == 255) Phase = 1;
						}
				
						if(Phase == 1){
							r--;
							if(r == 0) Phase = 2;
						}
			
						if(Phase == 2){
							g++;
							if(g == 255) Phase = 3;
						}
			
						if(Phase == 3){
							b--;
							if(b == 0) Phase = 4;
						}
			
						if(Phase == 4){
							r++;
							if(r == 255) Phase = 5;
						}		

						if(Phase == 5){
							g--;
							if(g == 0) Phase = 0;
						}	

						
			
					run++;
			
			
					box[0].style.color = 'rgb(' + r + ',' + g + ',' + b + ')';
					
					}else{
						box[0].style.color = 'rgb(255,255,255)';	
					}			
					
				}		
				
			

				Update();
				setInterval(Update,1000);
			
			}else{	
				setTimeout(create,1000);
			}
		}
	}
	
	initialize(){}
	
	stop(){}

	
}