//META{"name":"Background"}*//


/*
To Delete Blocked Message
.messageGroupBlockedBtn-1PBBh-{
    display:none;
}
*/

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

		var images;

		function readTextFile(file, callback) {
			var filepath = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'] + "\\AppData\\Roaming\\BetterDiscord\\plugins\\"+file;
			var fs = require('fs');
			callback(fs.readFileSync(filepath));
			
		};

		function saveTextFile (value, file){
			var filepath = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'] + "\\AppData\\Roaming\\BetterDiscord\\plugins\\"+file;
			var fs = require('fs');
			fs.writeFileSync(filepath, value, function(err) {
				if (err) {
					console.log(err);
				}
			});
		}
		
		readTextFile("Background.config.json",function(text){
			images = JSON.parse(text);
					console.log(images);
			});

		 $('.container-2td-dC.da-container').last().hide();		
		var secrbool = false;
		var pause = false;
		var pausedelay = 9999999999;
		var delay = images.time * 1000;
		var min = 15;
		var sek = 0;
		var s = '';
		var i ;
		var keys = [];
		var x;
		var opa = images.dim/100;
		var inde;
			var  box = document.getElementsByClassName("name-3YKhmS");
						
			document.body.style.backgroundposition = 'center';
			document.body.style.backgroundrepeat = 'no-repeat';
			document.body.style.backgroundsize = 'cover';
			document.body.style.height= '100vh' ;

			$("#app-mount").css("background", "rgba(0,0,0," + opa+ ")" );

			function update(){

				x = Math.floor(Math.random() * (11 - 1));
				console.log(x);
				console.log(delay);
				inde = x;
				document.body.style.background = `url("${images.img[x].link}")`;			
			}	
		
			document.body.addEventListener("keydown", keysPressed, false);
			document.body.addEventListener("keyup", keysReleased, false);
			window.addEventListener("wheel", MouseWheelHandler, false);
			
		function MouseWheelHandler(e) {

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
		
	   if (keys[17] && keys[16] && keys[220]){ document.body.style.background = `url("${images.img[0].link}")`; x=0 ; inde=0 }
		if (keys[17] && keys[16] && keys[49]){ document.body.style.background = `url("${images.img[1].link}")`; x=1 ; inde=1 } 
		if (keys[17] && keys[16] && keys[50]){ document.body.style.background = `url("${images.img[2].link}")`; x=2 ; inde=2 }
		if (keys[17] && keys[16] && keys[51]){ document.body.style.background = `url("${images.img[3].link}")`; x=3 ; inde=3 }
		if (keys[17] && keys[16] && keys[52]){ document.body.style.background = `url("${images.img[4].link}")`; x=4 ; inde=4 }
		if (keys[17] && keys[16] && keys[53]){ document.body.style.background = `url("${images.img[5].link}")`; x=5 ; inde=5 }
 		if (keys[17] && keys[16] && keys[54]){ document.body.style.background = `url("${images.img[6].link}")`; x=6 ; inde=6 }
 		if (keys[17] && keys[16] && keys[55]){ document.body.style.background = `url("${images.img[7].link}")`; x=7 ; inde=7 }
 		if (keys[17] && keys[16] && keys[56]){ document.body.style.background = `url("${images.img[8].link}")`; x=8 ; inde=8 }
 		if (keys[17] && keys[16] && keys[57]){ document.body.style.background = `url("${images.img[9].link}")`; x=9 ; inde=9 }
 		
		
		//CTRL + SHIFT + R = Neues Random Bild
		if (keys[17] && keys[16] && keys[82]) update();
		
	

		if (keys[17] && keys[16] && keys[187]){ 
			opa = opa + 0.05;
			if(opa>1)opa=1;
			$("#app-mount").css("background", "rgba(0,0,0," + opa+ ")" );
		}

		if (keys[17] && keys[16] && keys[189]){ 
			opa = opa - 0.05;
			if(opa<0)opa=0.0;
			$("#app-mount").css("background", "rgba(0,0,0," + opa+ ")" );
		}

		
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
     
		
		
			
		if (keys[17] && keys[16] && keys[190]){ 
		
			var secr = $('.listItem-2P_4kh.da-listItem').last().prev().prev();
			if(secr.is(":hidden")){
				secr.show();
				secrbool = true;
			}else{
				secr.hide();
				secrbool = false;
			}
		}
		
		}
		

		var b = $("<button>", {
			'class': "childWrapper-anI2G9 da-childWrapper acronym-2mOFsV da-acronym RANbutton",
			css: {
				"position": "relative",
				"width":"48px",
				"height":"20px",
				"font-size":"10px",
				"margin-left":"11px",
				"margin-bottom":"11px"
			}
		}).html('Set Img').insertAfter("#bd-pub-li");
		
		b.click(function() {
			if ( $( ".BackgroundSettings" ).length ) {
				$(".BackgroundSettings").remove();
			}else{
			var BackgroundSettings = $("<div>", {
				'class': "BackgroundSettings",
				css: {
					"position": "absolute",
					"width":"50%",
					"height":"50%",
					"top":"25%",
					"left":"25%",
					"font-size":"10px",
					"background":"gray",
					"padding-top":"20px"
				}
			}).insertAfter("body");
			BackgroundSettings.focus();
			BackgroundSettings.keypress(function(event){
				if ( event.which == 27 ) {
				
					$(".BackgroundSettings").remove();
				 }
			})

			var BackgroundIndexP = $("<p>", {
				'class': "BackgroundIndexP",
				css: {
					"position": "relative",
					"width":"80%",
					"height":"25px",
					"font-size":"20px",
					"margin":"5px 10%",
				
					"text-align":"center"
					
				}
			}).html("Index of Wallpaper").appendTo($( ".BackgroundSettings" ));

			var BackgroundIndexInput = $("<input>", {
				'type':"number",
				'min':0,
				'max':9,
				'class': "BackgroundIndexInput",
				css: {
					"position": "relative",
					"width":"80%",
					"height":"25px",
					"font-size":"20px",
					"margin":"5px 10%",
				
					"text-align":"center"
					
				}
			}).val(inde).appendTo($( ".BackgroundSettings" ));

			BackgroundIndexInput.change(function(){
				 inde = $(".BackgroundIndexInput").val();
				 $(".BackgroundNameInput").val(images.img[inde].name);
				 $(".BackgroundUrlInput").val(images.img[inde].link);
				 x = inde;
				 document.body.style.background = `url("${images.img[x].link}")`;	
	
			})

			var BackgroundNameP = $("<p>", {
				'class': "BackgroundNameP",
				css: {
					"position": "relative",
					"width":"80%",
					"height":"25px",
					"font-size":"20px",
					"margin":"5px 10%",
				
					"text-align":"center"
					
				}
			}).html("Name of Wallpaper").appendTo($( ".BackgroundSettings" ));

			var BackgroundNameInput = $("<input>", {
				'class': "BackgroundNameInput",
				css: {
					"position": "relative",
					"width":"80%",
					"height":"25px",
					"font-size":"20px",
					"margin":"5px 10%",
					"text-align":"center"
					
				}
			}).val(images.img[inde].name).appendTo($( ".BackgroundSettings" ));
			
			var BackgroundUrlP = $("<p>", {
				'class': "BackgroundUrlP",
				css: {
					"position": "relative",
					"width":"80%",
					"height":"25px",
					"font-size":"20px",
					"margin":"5px 10%",
				
					"text-align":"center"
					
				}
			}).html("URL of Wallpaper").appendTo($( ".BackgroundSettings" ));

			var BackgroundUrlInput = $("<input>", {
				'class': "BackgroundUrlInput",
				css: {
					"position": "relative",
					"width":"80%",
					"height":"25px",
					"font-size":"20px",
					"margin":"5px 10%",
					"text-align":"center"
					
				}
			}).val(images.img[inde].link).appendTo($( ".BackgroundSettings" ));

			var BackgroundDelayP = $("<p>", {
				'class': "BackgroundDelayP",
				css: {
					"position": "relative",
					"width":"80%",
					"height":"25px",
					"font-size":"20px",
					"margin":"5px 10%",
				
					"text-align":"center"
					
				}
			}).html("Delay between Wallpapers").appendTo($( ".BackgroundSettings" ));

			var BackgroundDelayInput = $("<input>", {
				'class': "BackgroundDelayInput",
				'type':"number",
				css: {
					"position": "relative",
					"width":"80%",
					"height":"25px",
					"font-size":"20px",
					"margin":"5px 10%",
					"text-align":"center"
					
				}
			}).val(delay/1000).appendTo($( ".BackgroundSettings" ));

			var BackgroundDimP = $("<p>", {
				'class': "BackgroundDimP",
				css: {
					"position": "relative",
					"width":"80%",
					"height":"25px",
					"font-size":"20px",
					"margin":"5px 10%",
				
					"text-align":"center"
					
				}
			}).html("Dimming of Wallpapers " + Math.trunc(opa*100) + "%").appendTo($( ".BackgroundSettings" ));

			var BackgroundDimInput = $("<input>", {
				'class': "BackgroundDimInput",
				'type':"range",
				'min':"0",
				'max':"100",
				'step':"1",
				css: {
					"position": "relative",
					"width":"80%",
					"height":"25px",
					"font-size":"20px",
					"margin":"5px 10%",
					"text-align":"center"
					
				}
			}).val(Math.trunc(opa*100)).appendTo($( ".BackgroundSettings" ));

			BackgroundDimInput.change(function(){
				opa = BackgroundDimInput.val()/100;
				$("#app-mount").css("background", "rgba(0,0,0," + opa+ ")" );
				BackgroundDimP.html("Dimming of Wallpapers " + opa*100 +"%");
			});

			var BackgroundChnageButton = $("<button>", {
				'class': "BackgroundChnageButton",
				css: {
					"position": "relative",
					"width":"80%",
					"height":"30px",
					"font-size":"20px",
					"margin":"10px 10%",
					"text-align":"center"
					
				}
			}).html("Set Wallpaper (temporaray)").appendTo($( ".BackgroundSettings" ));

			BackgroundChnageButton.click(function(){

				x = inde;
				document.body.style.background = `url("${BackgroundUrlInput.val()}")`;	
				delay = $(".BackgroundDelayInput").val() *1000;
				opa = BackgroundDimInput.val()/100;
				$("#app-mount").css("background", "rgba(0,0,0," + opa+ ")" );
			});

			var BackgroundOkButton = $("<button>", {
				'class': "BackgroundOkButton",
				css: {
					"position": "relative",
					"width":"80%",
					"height":"30px",
					"font-size":"20px",
					"margin":"10px 10%",
					"text-align":"center"
					
				}
			}).html("Save Settings").appendTo($( ".BackgroundSettings" ));


			BackgroundOkButton.click(function(){
				images.img[inde].name = $(".BackgroundNameInput").val();
				images.img[inde].link = $(".BackgroundUrlInput").val();
				images.time = $(".BackgroundDelayInput").val();
				images.dim = opa*100;
				delay = images.time * 1000;
				var jsonContent  = JSON.stringify(images);
				$(".BackgroundOkButton").css("background","green");
				clearInterval(inter);
				inter = setInterval(update,delay);

				saveTextFile(jsonContent,"Background.config.json");
			})

			}
		});




		function keysReleased(e){ keys[e.keyCode] = false; }
		
		update();
		var inter = setInterval(update,delay);
			
			
		setInterval(function(){ 	if(secrbool == false){$('.listItem-2P_4kh.da-listItem').last().prev().prev().hide(); }},1000);

	}

	initialize () {}

	stop () {}
	
}
