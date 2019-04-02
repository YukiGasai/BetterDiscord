//META{"name":"Background"}*//

class Background {
	constructor () {

	}

	getName () {return "Background";}

	getDescription () {return "Background";}

	getVersion () {return "1.1.0";}

	getAuthor () {return "L7Yuki Gasai";}

	
	
	
	//legacy
	load () {}


	start () {
		
		
		var pause = false;
		var pausedelay = 9999999999;
		var delay = 900000;
		var min = 15;
		var sek = 0;
		var s = '';
		var i ;
		var keys = [];

		
			var  box = document.getElementsByClassName("name-3YKhmS");
						
			document.body.style.backgroundposition = 'center';
			document.body.style.backgroundrepeat = 'no-repeat';
			document.body.style.backgroundsize = 'cover';
			document.body.style.height= '100vh' ;

	
		function update(){

			var x = Math.floor(Math.random() * (6 - 1));
			console.log(x);
			switch(x) {
			case 0: document.body.style.background = 'url("https://i.imgur.com/ViX36Mu.jpg")' ;		 break;
			case 1: document.body.style.background = 'url("https://i.imgur.com/PblkDJk.jpg")'; break;
			case 2: document.body.style.background = 'url("https://images6.alphacoders.com/751/thumb-1920-751215.png")'; break;
			case 3: document.body.style.background = 'url("https://i.imgur.com/6HT547h.jpg")'; break;
			case 4: document.body.style.background = 'url("https://i.imgur.com/TMKVrls.jpg")'; break;
			case 5: document.body.style.background = 'url("https://i.imgur.com/TMKVrls.jpg")'; break;
			case 6: document.body.style.background = 'url("")'; break;
			case 7: document.body.style.background = 'url("")'; break;
			case 8: document.body.style.background = 'url("")'; break;
			case 9: document.body.style.background = 'url("")'; break;
			
			//default:document.body.style.background = 'url("https://images2.alphacoders.com/742/thumb-1920-742320.png")';  break;
			} 
		}	
		
		
			window.addEventListener("keydown", keysPressed, false);
			window.addEventListener("keyup", keysReleased, false);
			window.addEventListener("wheel", MouseWheelHandler, false);
			
			
			
			
		function MouseWheelHandler(e) {
			if (keys[17] && keys[18]){
		
				var e = window.event || e;
				var dd = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)))* 1000;
				delay = delay + dd;
				min = Math.trunc(delay/60000);
				sek = Math.round((delay/60000 - min )* 60);
				console.log(min + " : " + sek);
				box[0].innerHTML = '' +	min + " : " + sek + '';
				clearInterval(inter);
				inter = setInterval(update,delay);
			}
			if (keys[17] && keys[20]){
		
				var e = window.event || e;
				var dd = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)))* 10000;
				delay = delay + dd;
				min = Math.trunc(delay/60000);
				sek = Math.round((delay/60000 - min )* 60);
				console.log(min + " : " + sek);
				box[0].innerHTML = '' +	min + " : " + sek + '';
				clearInterval(inter);
				inter = setInterval(update,delay);
			}
				if (keys[17] && keys[16]){
		
				var e = window.event || e;
				var dd = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)))* 60000;
				delay = delay + dd;
				min = Math.trunc(delay/60000);
				sek = Math.round((delay/60000 - min )* 60);
				console.log(min + " : " + sek);
				box[0].innerHTML = '' +	min + " : " + sek + '';
				clearInterval(inter);
				inter = setInterval(update,delay);
			}
			
				
			return false;
		}
		
	function keysPressed(e) {

		keys[e.keyCode] = true;
		if (keys[17] && keys[16] && keys[220])document.body.style.background ='url("https://i.imgur.com/ViX36Mu.jpg")';
		if (keys[17] && keys[16] && keys[49])document.body.style.background = 'url("https://i.imgur.com/PblkDJk.jpg")';
		if (keys[17] && keys[16] && keys[50])document.body.style.background = 'url("https://images6.alphacoders.com/751/thumb-1920-751215.png")';
		if (keys[17] && keys[16] && keys[51])document.body.style.background = 'url("https://i.imgur.com/6HT547h.jpg")';
		if (keys[17] && keys[16] && keys[52])document.body.style.background = 'url("https://i.imgur.com/TMKVrls.jpg")';
		if (keys[17] && keys[16] && keys[53])document.body.style.background = 'url("https://i.imgur.com/ViX36Mu.jpg")';
		if (keys[17] && keys[16] && keys[54])document.body.style.background = 'url("https://i.imgur.com/ViX36Mu.jpg")';
		if (keys[17] && keys[16] && keys[55])document.body.style.background = 'url("https://i.imgur.com/ViX36Mu.jpg")';
		if (keys[17] && keys[16] && keys[56])document.body.style.background = 'url("https://i.imgur.com/ViX36Mu.jpg")';
		if (keys[17] && keys[16] && keys[57])document.body.style.background = 'url("https://i.imgur.com/ViX36Mu.jpg")';
		
		
		//CTRL + SHIFT + R = Neues Random Bild
		if (keys[17] && keys[16] && keys[82]) update();
		
		
		//CTRL + SHIFT + Space = Start STOP
		if (keys[17] && keys[16] && keys[32]){  
		if (pause == false){
		
			pause = true;
			clearInterval(inter);
			inter = setInterval(update,pausedelay);
			console.log("PAUSE");
		}else{
			
			pause = false;
			clearInterval(inter);
			inter = setInterval(update,delay);
			console.log("KEINE PAUSE");
		}
		}
     
			if (keys[17] && keys[70])e.preventDefault(); 
			
		}
 
		function keysReleased(e){ keys[e.keyCode] = false; }
		
		update();
		var inter = setInterval(update,delay);
			
	}

	initialize () {}

	stop () {alert('BEyBEy');}
	
}
