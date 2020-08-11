/**
 * @name Background Plugin
 * @authorId 262613777357209601
 * @source https://github.com/YukiGasai/BetterDiscord/blob/master/plugins/Background.plugin.js
 */

const { settings } = require('cluster');


var ThemeSettings = {
	Images : [],
	Time : 1000,
	Dim : 50,
	Transparancy : false,
	Rotation : true,
	ThemeStatus : true
 }

module.exports = class Background {
	constructor() {
	}
	getSettingsPanel() {
		return `<div>
		<button>TEST</button>
		<h3>Click on the button \"set Img\" to CHANGE settings </h3>
		
		</div>`;
	};

	getName() { return "Background"; }

	getDescription() { return "Background"; }

	getVersion() { return "1.5.7"; }

	getAuthor() { return "L7Yuki Gasai"; }

	//legacy
	load() {
	}
	start() {

		//Check if Theme exists else download and use it
		async function CheckIfThemeExists(){
			if(BdApi.Themes.get("BackgroundChanger Theme") == null)
			{
				fetch("https://raw.githubusercontent.com/YukiGasai/BetterDiscord/master/themes/BackgroundChanger.theme.css")
				.then(response=>response.text())
				.then(text=>
					{		
						(async () => await require('fs').promises.writeFile(BdApi.Themes.folder + "/BackgroundChanger.theme.css", text))();	

    	            })
				.catch(err=> console.log(err));
			}	
			return;
		}
		//Check if Theme is enabled else enable it
		async function EnableTheme(){
				await CheckIfThemeExists();
				setTimeout(()=>{
				if(!BdApi.Themes.isEnabled("BackgroundChanger Theme")){
					BdApi.Themes.enable("BackgroundChanger Theme");
				}
			}, 100);	
		};

EnableTheme();

			function UpdateSettingsSmart(Key,Value)
			{
				ThemeSettings[Key] = BdApi.loadData("Background",Key);
				if(ThemeSettings[Key] == undefined)BdApi.saveData("Background",Key,  JSON.parse(Value));
				ThemeSettings[Key] = BdApi.loadData("Background",Key);
			}


			UpdateSettingsSmart("Images", '[{"name":"Akali Big","link":"https://i.imgur.com/Wqtx1pJ.jpg"},{"name":"Your Name Small","link":"https://i.imgur.com/PblkDJk.jpg"},{"name":"Your Name Sky","link":"https://i.imgur.com/PblkDJk.jpg"},{"name":"Kat","link":"https://images.alphacoders.com/876/thumb-1920-876868.jpg"},{"name":"totoro","link":"https://images6.alphacoders.com/896/thumb-1920-896802.jpg"},{"name":"Thresh","link":"https://i.imgur.com/TMKVrls.jpg"},{"name":"Zero Two Sky","link":"https://i.imgur.com/AA0Ld8g.jpg"},{"name":"Akali AMOLED","link":"https://i.imgur.com/656WElf.jpg"},{"name":"02 Dark","link":"https://i.redd.it/cuutei59ixi11.jpg"},{"name":"02 Outside","link":"https://i.imgur.com/lvpEwPA.jpg"}]');
			UpdateSettingsSmart("Time"  , "1000");
			UpdateSettingsSmart("Dim"   , "50");
			UpdateSettingsSmart("Transparancy", "false");
			UpdateSettingsSmart("Rotation", "true");
			UpdateSettingsSmart("ThemeStatus", "true");


			function SaveAllSettings(){
				for (var key in ThemeSettings) {
					if (ThemeSettings.hasOwnProperty(key)) {
						BdApi.saveData("Background",""+key, ThemeSettings[key]);
					}
				}
			}
	

		function addHover(requestElement, Color){
            $(requestElement).hover(function(){
                    $(this).css({"transform": "scaleY(1.1)","background": "#"+ Color})
                },
                function(){
                    $(this).css({"transform": "scaleY(1.0)","background": "white"})
            });
		}
		
	/*
		var iframe = document.createElement('iframe');
		iframe.onload = function(){ 
    	var ifrLocalStorage = iframe.contentWindow.localStorage;
    	var text = ifrLocalStorage.getItem('UserSettingsStore');
		text = JSON.parse(text);
		if(text.theme == `light`)alert("Please use dark mode for the Background Plugin to work.\n Thank you <3");
		};
		iframe.src = 'about:blank';
		document.body.appendChild(iframe);
	*/


		var delay = ThemeSettings.Time * 1000;
		var keys = [];
		var x = 0;
		var inter;
		var opa = ThemeSettings.Dim / 100;
		var inde = 0;

		function GetRotationstring()
		{
			if (ThemeSettings.Rotation) {
				return "ON";
			} else {
				return "OFF";
			}
		}


		if(BdApi.Themes.get("BackgroundChanger Theme") != null){
			if (ThemeSettings.ThemeStatus) {
				BdApi.Themes.enable("BackgroundChanger Theme");
			} else {
				BdApi.Themes.disable("BackgroundChanger Theme");
			}
		}

		
		document.body.style.backgroundPosition = 'center';
		document.body.style.backgroundRepeat = 'no-repeat';
		document.body.style.backgroundSize = 'cover';

		$("#app-mount").css("background", "rgba(0,0,0," + opa + ")");

		function update() {
			if(!ThemeSettings.Transparancy){
			x = Math.floor(Math.random() * 10);
			document.body.style.background = `url("${ThemeSettings.Images[x].link}")  no-repeat center center fixed`;
			document.body.style.backgroundSize = 'cover';
			}
		}
		update();
		function Pause() {
				if (ThemeSettings.Rotation == false) {
					ThemeSettings.Rotation = true;
					inter = setInterval(update, ThemeSettings.Time * 1000);
				} else {
					ThemeSettings.Rotation = false;
					clearInterval(inter);
				}	
			BdApi.saveData("Background","Rotation", ThemeSettings.Rotation);
		}
		document.body.addEventListener("keydown", keysPressed, false);
		document.body.addEventListener("keyup", keysReleased, false);
		/*
			if (keys[17] && keys[20]) {
				var e = document.body.event || e;
				dd = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
				UpdateTime();
			}
			if (keys[17] && keys[16]) {
				var e = document.body.event || e;
				dd = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))) * 60;
				UpdateTime();
			}
*/
			document.body.addEventListener('wheel', function(e){
				if(settings.Rotation){
				let increase = 0

				if (keys[17] && keys[20]) increase = 1;

				else if (keys[17] && keys[16])  increase = 60;

				if(increase == 0) return;

					let wDelta = e.wheelDelta < 0 ? -1 : 1;
					ThemeSettings.Time = 	parseInt(ThemeSettings.Time) + parseInt(wDelta) * increase;
					if (ThemeSettings.Time < 1) ThemeSettings.Time = 1;
					let min = Math.trunc(ThemeSettings.Time/60);
					let sec =  ThemeSettings.Time - min*60;
					$(".name-3YKhmS").html('' + min + " : " + sec + '');
					$(".BackgroundDelayInput").val(ThemeSettings.Time);
					clearInterval(inter);
					inter = setInterval(update, ThemeSettings.Time*1000);
				}
			});

			

		function keysReleased(e) { keys[e.keyCode] = false; }
		function keysPressed(e) {
			keys[e.keyCode] = true;
			//CTRL + SHIFT + ^-9 = set das Bild des richtigen Index
			if (keys[17] && keys[16] && keys[220]) { document.body.style.background = `url("${ThemeSettings.Images[0].link}")`; x = 0; inde = 0 }
			if (keys[17] && keys[16] && keys[49])  { document.body.style.background = `url("${ThemeSettings.Images[1].link}")`; x = 1; inde = 1 }
			if (keys[17] && keys[16] && keys[50])  { document.body.style.background = `url("${ThemeSettings.Images[2].link}")`; x = 2; inde = 2 }
			if (keys[17] && keys[16] && keys[51])  { document.body.style.background = `url("${ThemeSettings.Images[3].link}")`; x = 3; inde = 3 }
			if (keys[17] && keys[16] && keys[52])  { document.body.style.background = `url("${ThemeSettings.Images[4].link}")`; x = 4; inde = 4 }
			if (keys[17] && keys[16] && keys[53])  { document.body.style.background = `url("${ThemeSettings.Images[5].link}")`; x = 5; inde = 5 }
			if (keys[17] && keys[16] && keys[54])  { document.body.style.background = `url("${ThemeSettings.Images[6].link}")`; x = 6; inde = 6 }
			if (keys[17] && keys[16] && keys[55])  { document.body.style.background = `url("${ThemeSettings.Images[7].link}")`; x = 7; inde = 7 }
			if (keys[17] && keys[16] && keys[56])  { document.body.style.background = `url("${ThemeSettings.Images[8].link}")`; x = 8; inde = 8 }
			if (keys[17] && keys[16] && keys[57])  { document.body.style.background = `url("${ThemeSettings.Images[9].link}")`; x = 9; inde = 9 }
			//CTRL + SHIFT + R = Neues Random Bild
			document.body.style.backgroundSize = 'cover';
			if (keys[17] && keys[16] && keys[82]) update();
			//CTRL + SHIFT + Space = Increase Background Opacity
			if (keys[17] && keys[16] && keys[187]) {
				opa = opa + 0.05;
				if (opa > 1) opa = 1;
				$("#app-mount").css("background", "rgba(0,0,0," + opa + ")");
			}
			//CTRL + SHIFT + Space = Decrease Background Opacity
			if (keys[17] && keys[16] && keys[189]) {
				opa = opa - 0.05;
				if (opa < 0) opa = 0.0;
				$("#app-mount").css("background", "rgba(0,0,0," + opa + ")");
			}
			//CTRL + SHIFT + Space = Start STOP
			if (keys[17] && keys[16] && keys[32]) Pause();
		}
		//HERE STARTS THE SETTINGS PAGE A LOT OF HTML CSS SHIT----------------------------------------------------------------------------------
		function WallpaperIO() {
			var cssstyle = {
				"position": "relative",
				"width": "80%",
				"height": "25px",
				"font-size": "20px",
				"margin": "5px 10%",
				"text-align": "center",
				"transition": "all 1s",
			}
			let setImgbutton = $("<button>", {
				'class': "wrapper-25eVIn circleButtonMask-2VNJsN da-wrapper da-circleButtonMask",
				'id': "bd-pub-button",
				'html': "Set Img",
				css: {
					"position": "relative",
					"width": "48px",
					"height": "20px",
					"font-size": "10px",
					"margin-left": "11px",
					"margin-bottom": "11px"
				}
			}).insertAfter("#bd-pub-li");
			setImgbutton.click(function () {
				if ($(".BackgroundSettings").length) {
					$(".BackgroundSettings").remove();
				} else {
					var BackgroundSettings = $("<div>", {
						'class': "BackgroundSettings",
						"hidden": "true",
						css: {
							"position": "absolute",
							"width": "50%",
							"height": "auto",
							"top": "20%",
							"left": "25%",
							"font-size": "10px",
							"background-color": "rgba(213, 254, 253,0.5)",
							"background-image": "linear-gradient(315deg, rgba(213, 254, 253,0.8) 0%, #rgba(255, 252, 255,0.8) 74%)",
							"border-radius": "50px",
							"padding-top": "10px",
							"padding-bottom": "10px",
							"z-index":"10"
					
						}
					}).insertAfter("body");
					$(BackgroundSettings).first().fadeIn("slow");
					$(BackgroundSettings).keydown(function (event) {
						if (event.which == 27) {
							$(BackgroundSettings).remove();
						}
					});
					var BackgroundIndexP = $("<p>", {
						'class': "BackgroundIndexP",
						'html': "Index of Wallpaper",
						css: cssstyle
					}).appendTo($(BackgroundSettings));

					var BackgroundIndexInput = $("<input>", {
						'type': "number",
						'min': 0,
						'max': 9,
						'class': "BackgroundIndexInput",
						'val': x,
						css: cssstyle
					}).appendTo($(BackgroundSettings));

					var BackgroundNameP = $("<p>", {
						'class': "BackgroundNameP",
						'html': "Name of Wallpaper",
						css: cssstyle
					}).appendTo($(BackgroundSettings));

					var BackgroundNameInput = $("<input>", {
						'class': "BackgroundNameInput",
						'val': ThemeSettings.Images[x].name,
						css: cssstyle
					}).appendTo($(BackgroundSettings));

					var BackgroundUrlP = $("<p>", {
						'class': "BackgroundUrlP",
						'html': "URL of Wallpaper",
						css: cssstyle
					}).appendTo($(BackgroundSettings));

					var BackgroundUrlInput = $("<input>", {
						'class': "BackgroundUrlInput",
						'val': ThemeSettings.Images[x].link,
						css: cssstyle
					}).appendTo($(BackgroundSettings));

					var BackgroundDelayP = $("<p>", {
						'class': "BackgroundDelayP",
						'html': "Delay between Wallpapers",
						css: cssstyle
					}).appendTo($(BackgroundSettings));

					var BackgroundDelayInput = $("<input>", {
						'class': "BackgroundDelayInput",
						'val': ThemeSettings.Time,
						css: cssstyle
					}).appendTo($(BackgroundSettings));

					var BackgroundDimP = $("<p>", {
						'class': "BackgroundDimP",
						'html': "Dimming of Wallpapers " + Math.trunc(opa * 100) + "%",
						css: cssstyle
					}).appendTo($(BackgroundSettings));

					var BackgroundDimInput = $("<input>", {
						'class': "BackgroundDimInput",
						'type': "range",
						'min': "0",
						'max': "100",
						'step': "1",
						'val': Math.trunc(opa * 100),
						css: cssstyle
					}).appendTo($(BackgroundSettings));

					var BackgroundRotateButton = $("<button>", {
						'class': "BackgroundRotateButton",
						'html': "Wallpaper Rotation " + GetRotationstring(),
						css: cssstyle
					}).appendTo($(BackgroundSettings));
					addHover(BackgroundRotateButton, "FFA500");

					var BackgroundTransparancyButton = $("<button>", {
						'class': "BackgroundTransparancyButton",
						'html': "Wallpaper Transparancy ",
						css: cssstyle
					}).appendTo($(BackgroundSettings));
					addHover(BackgroundTransparancyButton, "FFA500");

					var BackgroundThemeButton = $("<button>", {
						'class': "BackgroundThemeButton",
						'html': "Transparent Theme " + BdApi.Themes.isEnabled("BackgroundChanger Theme") ? 'ON' : 'OFF' ,
						css: cssstyle
					}).appendTo($(BackgroundSettings));
					addHover(BackgroundThemeButton, "FFA500");
					var BackgroundOkButton = $("<button>", {
						'class': "BackgroundOkButton",
						'html': "Save Settings",
						css: cssstyle
					}).appendTo($(BackgroundSettings));
					addHover(BackgroundOkButton,"90ee90");
					var BackgroundChnageButton = $("<button>", {
						'class': "BackgroundChnageButton",
						'html': "Test Wallpaper",
						css: cssstyle
					}).appendTo($(BackgroundSettings));
					addHover(BackgroundChnageButton,"90ee90");
					var Helpbutton = $("<button>", {
						'class': "Helpbutton",
						'html': "HELP",
						css: cssstyle
					}).appendTo($(BackgroundSettings));
					addHover(Helpbutton,"7ff7ff");
					var BackgroundSettingsBack = $("<button>", {
						"class": "BackgroundSettingsBack",
						"html": "Back",
						css: cssstyle
					}).appendTo($(BackgroundSettings));
					addHover(BackgroundSettingsBack,"7ff7ff");
					BackgroundSettingsBack.click(function () {
						$(BackgroundSettings).remove();
					});
					//Event to chnage Background and information when clicking the arrow Keys 
					$(BackgroundIndexInput).bind('input', function () {
						if(!ThemeSettings.Transparancy){
							inde = $(".BackgroundIndexInput").val();
							$(BackgroundChnageButton).html("Test Wallpaper");
							$(BackgroundOkButton).html("Save Settings");
							$(".BackgroundNameInput").val(ThemeSettings.Images[inde].name);
							$(".BackgroundUrlInput").val(ThemeSettings.Images[inde].link);
							x = inde;
							document.body.style.background = `url("${ThemeSettings.Images[inde].link}")`;
						}
					});
					$(BackgroundDelayInput).bind('input', function () {
						
						if (!isNaN($(".BackgroundDelayInput").val())) {
							ThemeSettings.Time = $(".BackgroundDelayInput").val();
						}
					});
					
					//Turns on off Rotation on Buttonpress 
					BackgroundRotateButton.click(function () {
						Pause();	
						BackgroundRotateButton.html("Wallpaper Rotation " + GetRotationstring());
						
					});
					BackgroundTransparancyButton.click(function(){
						if(ThemeSettings.Transparancy){
							ThemeSettings.Transparancy = false;
							inde = $(".BackgroundIndexInput").val();
							document.body.style.background = `url("${ThemeSettings.Images[inde].link}")`;
						}else{
							ThemeSettings.Transparancy = true;
							document.body.style.background = `url()`;
						}
	
						BdApi.saveData("background","Rotation", ThemeSettings.Rotation);
						BdApi.saveData("background","ThemeStatus", ThemeSettings.Transparancy);
						BackgroundRotateButton.html("Wallpaper Rotation " + GetRotationstring());
					})
					BackgroundThemeButton.click(function () {
						ThemeSettings.ThemeStatus = !ThemeSettings.ThemeStatus
						BdApi.Themes.toggle("BackgroundChanger Theme");
						$(".BackgroundThemeButton").html("Transparent Theme " + BdApi.Themes.isEnabled("BackgroundChanger Theme") ? 'ON' : 'OFF' );
						BdApi.saveData("background","ThemeStatus", ThemeSettings.ThemeStatus);
					});
					//Sliderevent to see the dimming in real time
					BackgroundDimInput.change(function () {
						opa = BackgroundDimInput.val() / 100;
						$("#app-mount").css("background", "rgba(0,0,0," + opa + ")");
						BackgroundDimP.html("Dimming of Wallpapers " + Math.trunc(opa * 100) + "%");
						BdApi.saveData("background","Dim", ThemeSettings.Dim);
					});
					//Changes Background Picture to see if it works for you but doesnt save it to .json file
					BackgroundChnageButton.click(function () {
						$(this).html("Test Wallpaper ✓");
						x = inde;
						document.body.style.background = `url("${BackgroundUrlInput.val()}")`;
					});
					//Changes Background Picture + all other settings and saves the values to the .json file
					BackgroundOkButton.click(function () {
						$(this).html("Save Settings ✓");
						let realindex = $(BackgroundIndexInput).val();
						ThemeSettings.Images[realindex].name = $(".BackgroundNameInput").val();
						ThemeSettings.Images[realindex].link = $(".BackgroundUrlInput").val();
						if (!isNaN($(".BackgroundDelayInput").val())) {
							ThemeSettings.Time = $(".BackgroundDelayInput").val();
						}
						
						
						$(".BackgroundOkButton").css("background", "springgreen");
						if (ThemeSettings.Rotation) {
							clearInterval(inter);
							inter = setInterval(update, ThemeSettings.Time * 1000);
						}
						console.log(ThemeSettings);
						SaveAllSettings();
					});
					Helpbutton.click(function () {
						var HelpPage = $("<div>", {
							'class': "HelpPage",
							css: {
								"position": "absolute",
								"width": "100%",
								"height": $(BackgroundSettings).height() + "px",
								"top": "0%",
								"left": "0%",
								"font-size": "10px",
								"background-color": "#000000",
								"background-image": "linear-gradient(147deg, #000000 0%, #2c3e50 74%)",
								"color": "white",
								"border-radius": "50px",
								"padding-top": "10px",
								"padding-bottom": "10px",
								"overflow": "hidden"
							}
						}).appendTo($(BackgroundSettings));
						HelpPage.focus();
						var Helptexth1 = $("<h1>", {
							'class': "Helptexth1",
							'html': "<br>Helppage<br><br>",
							css: {
								"position": "relative",
								"width": "80%",
								"height": "auto",
								"font-size": "40px",
								"margin": "10px 10%",
								"margin-top": "0",
								"text-align": "center",
							}
						}).appendTo($(".HelpPage"));
						var Helptext = $("<pre>", {
							'class': "Helptext",
							'html': "Use Ctrl+Shift+^-9		to switch between your set wallpapers\
						<br>Use Ctrl+Shift+R		to switch between to a random image\
						<br>Use Ctrl+Shift+Space	to switch the Wallpaper rotation on and off\
						<br>Use Ctrl+Shift+Wheel	to in/decrease the delay by minutes\
						<br>Use Ctrl+Shift+Wheel	to in/decrease the delay by seconds\
						<br>Use Ctrl+Shift+ -/+		to in/decrease the background opacity\
						<br><br><br><pre style='text-align:center'> Plugin created by L7Yuki Gasai </pre>",
							css: {
								"position": "relative",
								"width": "80%",
								"height": "auto",
								"font-size": "30px",
								"margin": "10px 10%",
								"margin-top": "0",
								"text-align": "left",
							}
						}).appendTo($(".HelpPage"));
						var HelppageBack = $("<button>", {
							"class": "HelppageBack",
							"html": "Back",
							css: {
								"position": "relative",
								"width": "80%",
								"height": "30px",
								"font-size": "20px",
								"margin": "5px 10%",
								"margin-top": "20px",
								"text-align": "center",
								"background": "white"
							}
						}).appendTo($(".HelpPage"));
						HelppageBack.click(function () {
							$(HelpPage).remove();
						})
					});
				}
			});
		}
		WallpaperIO();
		if (ThemeSettings.Rotation) inter = setInterval(update, ThemeSettings.Time * 1000);

	}
	initialize() { }
	stop() { }
}
