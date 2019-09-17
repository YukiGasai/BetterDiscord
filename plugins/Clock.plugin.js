//META{"name":"Clock"}*//

class Clock {
	constructor () {

	}

	getSettingsPanel () {
		return "<h3>Click on the time to change settings </h3>";
	};

	getName () {return "Clock";}

	getDescription () {return "A little digital clock";}

	getVersion () {return "2.0.0";}

	getAuthor () {return "L7Yuki Gasai";}
	
	//legacy
	load () {}

	start () {
		var fs = require('fs');
		var settings;
		var inter ;
		function readTextFile(file, callback) {
			let filepath = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'] + file;
			callback(fs.readFileSync(filepath));
		};
		
		function saveTextFile (value, file){
			let filepath = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'] + file;
			fs.writeFileSync(filepath, value, function(err) {
				if (err) {
					console.log(err);
				}
			});
		}
	
		readTextFile("\\AppData\\Roaming\\BetterDiscord\\plugins\\Clock.config.json",function(text){
			settings = JSON.parse(text);
			settings.locations.forEach(location => {
				location.offset = parseInt(location.offset ,10)
			});
			settings.wakeTime.sec = parseInt(settings.wakeTime.sec,10);
			settings.wakeTime.min = parseInt(settings.wakeTime.min,10);
			settings.wakeTime.hour = parseInt(settings.wakeTime.hour,10);
		});

		var Anzeige = $(".colorStandard-2KCXvj.size14-e6ZScH.usernameContainer-1fp4nu.da-colorStandard.da-size14.da-usernameContainer > .size14-e6ZScH.title-eS5yk3.da-size14.da-title");
		var Ort = $(".nameTag-3uD-yy.da-nameTag > .size10-tblYdA.subtext-3CDbHg.da-size10.da-subtext");
		var wahl = 1;
		$(Ort).html(settings.locations[wahl].Name);
		function update (){
		
			if($(Anzeige).length && !$(Anzeige).hasClass("added")){
				$(Anzeige).addClass("added");

				let e =	document.getElementsByClassName("added");
				e[0].addEventListener("mousewheel", function(){
			
					var e = window.event || e;
					var dd = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
					wahl = wahl + dd*-1
					
					if(wahl<0)wahl = settings.locations.length-1;
					if(wahl>settings.locations.length-1) wahl = 0;

					$(Ort).html(settings.locations[wahl].Name);
					
					});
				Anzeige.click(function(){
					if($(".ClockSettings").length){
						$(".ClockSettings").remove();
					}else{

						var cssstyle =  {
							"position": "relative",
							"width":"80%",
							"height":"25px",
							"font-size":"20px",
							"margin":"5px 10%",
							"text-align":"center",
							"transition":"all 1s"
						}

						var ClockSettings = $("<div>", {
							'class': "ClockSettings",
							"hidden":"true",
							css: {
								"position": "absolute",
								"width":"50%",
								"height":"auto",
								"top":"20%",
								"left":"25%",
								"font-size":"10px",
								"background-color":"rgba(213, 254, 253,0.5)",
								"background-image":"linear-gradient(315deg, rgba(213, 254, 253,0.8) 0%, #rgba(255, 252, 255,0.8) 74%)",
								"border-radius":"50px",
								"padding-top":"10px",
								"padding-bottom":"10px"		
							}
						}).insertAfter("body");

						$(ClockSettings).first().fadeIn("slow");

						var ClockIndexP = $("<p>", {
							'class': "ClockIndexP",
							'html':"Index of Location",
							css: cssstyle
						}).appendTo($(ClockSettings));
			
						var ClockIndexInput = $("<input>", {
							'type':"number",
							'min':0,
							'max':settings.locations.length,
							'class': "ClockIndexInput",
							'val': wahl,
							css: cssstyle
						}).appendTo($(ClockSettings));

						var ClockNameP = $("<p>", {
							'class': "ClockNameP",
							'html':"Name of Location",
							css: cssstyle
						}).appendTo($(ClockSettings));
			
						var ClockNameInput = $("<input>", {
							'class': "ClockNameInput",
							'val': settings.locations[wahl].Name,
							css: cssstyle
						}).appendTo($(ClockSettings));

						var ClockOffsetP = $("<p>", {
							'class': "ClockOffsetP",
							'html': "Offset to GMT",
							css: cssstyle
						}).appendTo($(ClockSettings));
			
						var ClockOffsetInput = $("<input>", {
							'class': "ClockOffsetInput",
							'val':settings.locations[wahl].offset,
							css: cssstyle
						}).appendTo($(ClockSettings));

						var ClockWakeTimeP = $("<p>", {
							'class': "ClockWakeTimeP",
							'html': "Time to get up",
							css: cssstyle
						}).appendTo($(ClockSettings));

						var ClockHourInput = $("<input>", {
							'type':"number",
							'min':1,
							'max':24,
							'class': "ClockHourInput",
							'val':settings.wakeTime.hour,
							css: {
								"position": "relative",
								"width":"25%",
								"float":"left",
								"height":"25px",
								"font-size":"20px",
								"margin":"5px 0%",
								"text-align":"center",
								"transition":"all 1s",
								"margin-left":"10%"
							}
						}).appendTo($(ClockSettings));

						var ClockMinInput = $("<input>", {
							'type':"number",
							'min':0,
							'max':59,
							'class': "ClockMinInput",
							'val':settings.wakeTime.min,
							css: {
								"position": "relative",
								"width":"25%",
								"float":"left",
								"height":"25px",
								"font-size":"20px",
								"margin":"5px 1.5%",
								"text-align":"center",
								"transition":"all 1s",
							}
							
						}).appendTo($(ClockSettings));

						var ClockSecInput = $("<input>", {
							'type':"number",
							'min':0,
							'max':59,
							'class': "ClockSecInput",
							'val':settings.wakeTime.sec,
							css: {		
								"position": "relative",
								"width":"25%",
								"float":"right",
								"height":"25px",
								"font-size":"20px",
								"margin":"5px 0%",
								"text-align":"center",
								"transition":"all 1s",
								"margin-right":"10%"
							}
						}).appendTo($(ClockSettings));
						
						var ClockOkButton = $("<button>", {
							'class': "ClockOkButton",
							'html':"ADD / SAVE",
							css: cssstyle
						}).appendTo($(ClockSettings));
						
						var ClockSettingsBack = $("<button>",{
							"class":"ClockSettingsBack",
							"html":"Back",
							css: cssstyle
						}).appendTo($(ClockSettings));
						ClockSettingsBack.click(function(){
							$(ClockSettings).remove();
						});

						$(ClockIndexInput).bind('input', function () {
							wahl = $(".ClockIndexInput").val();
							$(".ClockNameInput").val(settings.locations[wahl].Name);
							$(".ClockOffsetInput").val(settings.locations[wahl].offset);
						});

						ClockOkButton.click(function(){
							let realindex = $(ClockIndexInput).val();
							settings.locations[realindex].Name = $(".ClockNameInput").val();
							settings.locations[realindex].offset = parseInt($(".ClockOffsetInput").val(),10);
							settings.wakeTime.sec = parseInt($(".ClockSecInput").val() ,10 );
							settings.wakeTime.min = parseInt($(".ClockMinInput").val() ,10 );
							settings.wakeTime.hour= parseInt($(".ClockHourInput").val(),10 );
							var jsonContent  = JSON.stringify(settings);
							clearInterval(inter);
							inter = setInterval(update,1000)
							$(".ClockOkButton").css("background","springgreen");
							saveTextFile(jsonContent,"\\AppData\\Roaming\\BetterDiscord\\plugins\\Clock.config.json");
						});
					}
				});

			}
		
			if($(Anzeige).length){
				var d = new Date();
					
				if(wahl == 0){
					var h = d.getHours();
					var m = d.getMinutes();
					var s = d.getSeconds();
					var jahr = d.getFullYear();
					var monat = d.getMonth();
					var tag = d.getDate();

					var wh = settings.wakeTime.hour;
					var wm = settings.wakeTime.min;
					var ws = settings.wakeTime.sec;


					if(h<wh){
						var calcdate = new Date(jahr,monat,tag,wh,wm,ws)
					}else{
						var calcdate = new Date(jahr,monat,tag+1,wh,wm,ws)
					}
					var diff = Math.abs(d.getTime() - calcdate.getTime());
					
					console.log(diff)

					 s = Math.trunc((diff / 1000) % 60 );
					 m = Math.trunc(((diff / (1000*60)) % 60));
					 h = Math.trunc(((diff / (1000*60*60)) % 24));
					console.log(h + "  " + m + "  "+ s)
					
					
				}else{
					var offset = settings.locations[wahl].offset;

					var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
				
					var nd = new Date(utc + (3600000*offset));

					var h = nd.getHours();
					var m = nd.getMinutes();
					var s = nd.getSeconds();
				}
				

		


				if(h<10)h = "0" + h;
				if(m<10)m = "0" + m;
				if(s<10)s = "0" + s;

				$(Anzeige).html(h+ ":" + m + ":" + s );
				
			}

		}

		inter = setInterval(update,1000)
		
	}
	
	initialize(){}
	
	stop(){}

	
}