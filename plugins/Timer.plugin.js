//META{"name":"Timer"}*//

class Timer {
	constructor () {

	}

	getName () {return "Timer";}

	getDescription () {return "A little Timer";}

	getVersion () {return "1.1.0";}

	getAuthor () {return "L7Yuki Gasai";}

	
	
	
	//legacy
	load () {}


	start () {

		var Startzeitmin = 5;
		var Startzeitsek = 0;
		var running = false;
		var first = true;
		var pressTimer;
		var keys = [];
		var box = document.getElementsByClassName("container-PNkimc da-container");
		var child = document.getElementsByClassName("container-2Thooq");
		
		
		
		
		
		var cont = document.createElement("div");
		cont.id = 'BOX';
		cont.style.width = '240px';
		cont.style.height = '30px';
		cont.style.position = 'relativ';
		box[0].appendChild(cont);
		box[0].insertBefore(cont,child[0]);


		var downbutt = document.createElement("button");
		downbutt.id = 'BOX';
		downbutt.style.width = '50px';
		downbutt.style.height = '25px';
		downbutt.style.position = 'relativ';
		downbutt.style.fontSize= '20px';
		downbutt.style.color = 'white';
		downbutt.style.backgroundColor = 'rgba(0,0,0,0.0)';
		downbutt.innerHTML = '⯆';
		downbutt.onclick = function(){
			
			if(Startzeitsek>0){
			Startzeitsek = Startzeitsek - 1;
			}else{
				Startzeitmin = Startzeitmin - 1;
				Startzeitsek = 59;
			}
			
			playbutt.innerHTML = ''+ Startzeitmin +':'+ Startzeitsek+'';
			
		};

		
		downbutt.addEventListener('mouseup', function(e) {			
			clearTimeout(pressTimer);
		});
		
		downbutt.addEventListener('mousedown', function(e) {
		pressTimer = window.setTimeout(function() {		
			Startzeitmin--;
			Startzeitsek++;
			playbutt.innerHTML = ''+ Startzeitmin +':'+ Startzeitsek+'';
			},500);	
		});
		
		cont.appendChild(downbutt);
		
		
		
		
		
		var playbutt = document.createElement("button");
		playbutt.id = 'BOX';
		playbutt.style.width = '140px';
		playbutt.style.height = '25px';
		playbutt.style.position = 'relativ';
		playbutt.style.fontSize= '22px';
		playbutt.style.color = 'white';
		playbutt.style.backgroundColor = 'rgba(0,0,0,0.0)';
		playbutt.innerHTML = 'START';
		playbutt.onclick = function(){
			
			if(first){
				var inter = setInterval(Time,1000);
				first = false;
				running = true;
			}
			
			if(running == false){
				running = true;
			}else{
				running=false;
			}
		};
		
		
			playbutt.addEventListener('mouseup', function(e) {
				
				clearTimeout(pressTimer);
			});
		
		playbutt.addEventListener('mousedown', function(e) {
		 pressTimer = window.setTimeout(function() {		
			Startzeitmin=5;
			Startzeitsek=0;
			running=true;
			playbutt.style.color='white';
			playbutt.innerHTML = ''+ Startzeitmin +':'+ Startzeitsek+'';	
			},500);	
		});
		
		playbutt.addEventListener("mouseover", Keytest);
		
		cont.appendChild(playbutt);
		
		
		
		
		
		
		
		
		var upbutt = document.createElement("button");
		upbutt.id = 'BOX';
		upbutt.style.width = '50px';
		upbutt.style.height = '25px';
		upbutt.style.position = 'relativ';
		upbutt.style.fontSize= '20px';
		upbutt.style.color = 'white';
		upbutt.style.backgroundColor = 'rgba(0,0,0,0.0)';
		upbutt.innerHTML = '⯅';
		upbutt.onclick = function(){
			
			if(Startzeitsek<59){
			Startzeitsek = Startzeitsek + 1;
			}else{
				Startzeitmin = Startzeitmin + 1;
				Startzeitsek = 0;
			}			
				playbutt.innerHTML = ''+ Startzeitmin +':'+ Startzeitsek+'';		
		};	
				
			upbutt.addEventListener('mouseup', function(e) {			
				clearTimeout(pressTimer);
			});
		
		upbutt.addEventListener('mousedown', function(e) {
		pressTimer = window.setTimeout(function() {		
			Startzeitmin++;
			Startzeitsek--;
			playbutt.innerHTML = ''+ Startzeitmin +':'+ Startzeitsek+'';
			},500);	
		});

		cont.appendChild(upbutt);
	
		
		function Time(){

			if(running){
		
			if(Startzeitsek>0){
			Startzeitsek = Startzeitsek - 1;
			}else{
				Startzeitmin = Startzeitmin - 1;
				Startzeitsek = 59;
			}
			
		}
		if((Startzeitmin == 0 )&&( Startzeitsek == 0)){
			
				running=false;
				playbutt.style.color='red';
		}
		playbutt.innerHTML = ''+ Startzeitmin +':'+ Startzeitsek+'';
		}
		
		function Keytest(){
				console.log('MOUSE OVER');
				playbutt.addEventListener("keydown", function(e) {
					
					keys[e.keyCode] = true;
					
					if (keys[38]) {
						Startzeitmin++;
						playbutt.innerHTML = ''+ Startzeitmin +':'+ Startzeitsek+'';
					}	
				
					if (keys[40]){ 
						Startzeitmin--;
						playbutt.innerHTML = ''+ Startzeitmin +':'+ Startzeitsek+'';
					}
						
					if (keys[32]){
						if(running){
							running=false;
						}else{
							running=true;
						}
					}
				
				});
			
		}
		
	}
		
	initialize(){}
	
	stop(){}
	
}