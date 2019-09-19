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

	getSettingsPanel () {
		return "<h3>Click on the button \"set Img\" to change settings </h3>";
	};

	getName () {return "Background";}

	getDescription () {return "Background";}

	getVersion () {return "1.1.0";}

	getAuthor () {return "L7Yuki Gasai";}

	
	//legacy
	load () {
		var fs = require('fs');
	
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
		
		var filepath1 = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'] + "\\AppData\\Roaming\\BetterDiscord\\plugins\\Background.config.json";
		var filepath2 = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'] + "\\AppData\\Roaming\\BetterDiscord\\themes\\BackgroundChanger.theme.css";
		
		//CREATES SETTINGS FILE
		fs.exists(filepath1, function (exists) {
			if(!exists){	
				fs.writeFileSync(filepath1, '{"img":[{"name":"Akali Big","link":"https://i.imgur.com/Wqtx1pJ.jpg"},{"name":"Your Name Small","link":"https://i.imgur.com/PblkDJk.jpg"},{"name":"Your Name Sky","link":"https://images6.alphacoders.com/751/thumb-1920-751215.png"},{"name":"Lux","link":"https://i.imgur.com/6HT547h.jpg"},{"name":"Akali Big","link":"https://i.imgur.com/Wqtx1pJ.jpg"},{"name":"Thresh","link":"https://i.imgur.com/TMKVrls.jpg"},{"name":"Zero Two Sky","link":"https://i.imgur.com/AA0Ld8g.jpg"},{"name":"Akali AMOLED","link":"https://i.imgur.com/656WElf.jpg"},{"name":"02 Dark","link":"https://i.redd.it/cuutei59ixi11.jpg"},{"name":"02 Outside","link":"https://hdqwalls.com/download/zero-two-darling-in-the-franxx-gv-1920x1080.jpg"}],"time":"300","dim":50,"rotate":true}', {flag: 'wx'}, function (err, data){}) 
			}
		});
		
		//CREATES TRANSPARENT THEME FILE JUST FOR FUN
		fs.exists(filepath2, function (exists) {
			if(!exists){
				fs.writeFile(filepath2, '//META {"name":"BackgroundChanger Theme","description":"A very transparent Theme","author":"L7YukiGasai","version":"1.2"}*//\n\
				body{opacity:1!important;background:url(https://i.imgur.com/AA0Ld8g.jpg)}div[class^=typeWindows]{background-color:#0000}.theme-dark,.theme-light{background:rgba(0,0,0,0)!important}.privateChannels-1nO12o{background-color:transparent}.theme-dark .headerBar-UHpsPw{background:rgba(0,0,0,0);box-shadow:0 1px 0 rgba(32,34,37,0),0 0 0 transparent}.theme-dark .circleIconButton-jET_ig{background:rgba(0,0,0,0);color:#2e5bb3;border-color:#2a56ab#2745c5}.wrapper-2lTRaf .homeButton-2Cw51C .da-wrapper .da-homeButton{border-radius:15px;background-color:rgba(0,0,0,0)}.theme-dark .wrapper-2lTRaf{background:#1a4d61;background-color:rgba(114,137,218,0)}.contentSelectedText-3wUhMi,.contentSelectedVoice-1WDIBM{background-color:rgba(71,171,247,.19)}.button-2b6hmh:hover{color:#009fff}.button-2b6hmh{opacity:1}.theme-dark .memberOnline-1CIh-0{color:#b9bbbe}.theme-dark .memberOnline-1CIh-0:hover{color:#521b1b}.theme-dark .member-3W1lQa:hover .content-OzHfo4{background-color:#1787af;color:#fff}.theme-dark .container-3gCOGc{background-color:rgba(54,57,63,0)}.theme-dark .textArea-2Spzkt{color:hsla(0,0%,100%,1)}.theme-dark .inner-zqa7da{background-color:rgba(8,10,10,.36);border:1px solid #0e67e6}.theme-dark .friendsOnline-2JkivW,.theme-light .friendsOnline-2JkivW{color:#3a71c1}.theme-dark .divider-3gKybi:not(.dividerRed-MKoLlr) .dividerContent-2L12VI:after,.theme-dark .divider-3gKybi:not(.dividerRed-MKoLlr) .dividerContent-2L12VI:before{border-color:#fff}.theme-dark .scrollerThemed-2oenus.themedWithTrack-q8E3vB .scroller-2FKFPG::-webkit-scrollbar-track-piece{background-color:rgba(0,0,0,0);border:3px solid rgba(179,179,179,0);border-radius:0}.videoBackground-3AY_fu .da-videoBackground{background:0 0}.homeIcon-tEMBK1{opacity:0;color:#3166b9}.wrapper-2lTRaf .da-wrapper .homeButton-2Cw51C .da-homeButton{border-radius:25px;background-color:rgba(0,0,0,0)}.theme-dark .standardSidebarView-3F1I7i{background:rgba(0,0,0,.01)}.theme-dark .wrapper-29NfPK{background-color:rgba(0,0,0,.2)}.name-uJV0GL{color:#fff}#Box,#app-mount,.channels-Ie2l6A,.container-2lgZY8,.container-PNkimc,.panels-j1Uci_,.scroller-2FKFPG,.theme-dark .activityFeed-1C0EmJ,.theme-dark .applicationStore-1pNvnv,.theme-dark .chat-3bRxxu,.theme-dark .chat-3bRxxu form,.theme-dark .content-yTz4x3,.theme-dark .gameLibrary-TTDw4Y,.theme-dark .members-1998pB,.theme-dark .messagesWrapper-3lZDfY,.theme-dark .wrapper-1Rf91z,.video-1FfuMD{background-color:rgba(0,0,0,0)}.container-1UB9sr,.theme-dark .container-1r6BKw,.theme-dark .container-2Thooq,.theme-dark .contentRegion-3nDuYy,.theme-dark .layer-3QrUeG,.theme-dark .layers-3iHuyZ,.theme-dark .sidebarRegion-VFTUkN,.theme-light .container-2Thooq{background:rgba(0,0,0,0)}.theme-dark .selected-nT-gM3:before,.theme-dark .unread-2OHH1w:before{background:#1680b2}.name-2WpE7M,.theme-dark #bd-settings-sidebar .ui-tab-bar-item,.theme-dark .description-3_Ncsb,.theme-dark .divider-3gKybi:not(.dividerRed-MKoLlr) .dividerContent-2L12VI,.theme-dark .itemDefault-3Jdr52,.theme-dark .itemHover-EnbcjT,.theme-dark .labelDescriptor-1PqHgD,.theme-dark .markup-2BOw-j,.theme-dark .memberOffline-2lN7gt{color:#fff}.theme-dark .friendsTable-133bsv .friendsRow-2yicud .friendsColumnName-1zBOKm,.theme-dark .membersGroup-v9BXpm{color:#fff}.contentColumnDefault-1VQkGM,.sidebar-CFHs9e{background:rgba(0,0,0,.15)}.childWrapper-anI2G9.da-childWrapper,.da-childWrapper.childWrapper-anI2G9:hover:first-child{background:0 0}.wrapper-1BJsBx[aria-label=Home]{color:#fff;background-image:url(https://i.imgur.com/MdCJUZz.png);background-size:contain}.wrapper-1BJsBx.selected-bZ3Lue .childWrapper-anI2G9{background:transparent}', {flag: 'wx'}, function (err, data) {})
				alert("Please select the Background Changer Theme in the Theme settings for the full experience")
			}
		});	
		

	}

	start () {
		var fs = require('fs');
	
		var images;
		var ThemeString = 'body{opacity:1!important;background:url(https://i.imgur.com/AA0Ld8g.jpg)}div[class^=typeWindows]{background-color:#0000}.theme-dark,.theme-light{background:rgba(0,0,0,0)!important}.privateChannels-1nO12o{background-color:transparent}.theme-dark .headerBar-UHpsPw{background:rgba(0,0,0,0);box-shadow:0 1px 0 rgba(32,34,37,0),0 0 0 transparent}.theme-dark .circleIconButton-jET_ig{background:rgba(0,0,0,0);color:#2e5bb3;border-color:#2a56ab#2745c5}.wrapper-2lTRaf .homeButton-2Cw51C .da-wrapper .da-homeButton{border-radius:15px;background-color:rgba(0,0,0,0)}.theme-dark .wrapper-2lTRaf{background:#1a4d61;background-color:rgba(114,137,218,0)}.contentSelectedText-3wUhMi,.contentSelectedVoice-1WDIBM{background-color:rgba(71,171,247,.19)}.button-2b6hmh:hover{color:#009fff}.button-2b6hmh{opacity:1}.theme-dark .memberOnline-1CIh-0{color:#b9bbbe}.theme-dark .memberOnline-1CIh-0:hover{color:#521b1b}.theme-dark .member-3W1lQa:hover .content-OzHfo4{background-color:#1787af;color:#fff}.theme-dark .container-3gCOGc{background-color:rgba(54,57,63,0)}.theme-dark .textArea-2Spzkt{color:hsla(0,0%,100%,1)}.theme-dark .inner-zqa7da{background-color:rgba(8,10,10,.36);border:1px solid #0e67e6}.theme-dark .friendsOnline-2JkivW,.theme-light .friendsOnline-2JkivW{color:#3a71c1}.theme-dark .divider-3gKybi:not(.dividerRed-MKoLlr) .dividerContent-2L12VI:after,.theme-dark .divider-3gKybi:not(.dividerRed-MKoLlr) .dividerContent-2L12VI:before{border-color:#fff}.theme-dark .scrollerThemed-2oenus.themedWithTrack-q8E3vB .scroller-2FKFPG::-webkit-scrollbar-track-piece{background-color:rgba(0,0,0,0);border:3px solid rgba(179,179,179,0);border-radius:0}.videoBackground-3AY_fu .da-videoBackground{background:0 0}.homeIcon-tEMBK1{opacity:0;color:#3166b9}.wrapper-2lTRaf .da-wrapper .homeButton-2Cw51C .da-homeButton{border-radius:25px;background-color:rgba(0,0,0,0)}.theme-dark .standardSidebarView-3F1I7i{background:rgba(0,0,0,.01)}.theme-dark .wrapper-29NfPK{background-color:rgba(0,0,0,.2)}.name-uJV0GL{color:#fff}#Box,#app-mount,.channels-Ie2l6A,.container-2lgZY8,.container-PNkimc,.panels-j1Uci_,.scroller-2FKFPG,.theme-dark .activityFeed-1C0EmJ,.theme-dark .applicationStore-1pNvnv,.theme-dark .chat-3bRxxu,.theme-dark .chat-3bRxxu form,.theme-dark .content-yTz4x3,.theme-dark .gameLibrary-TTDw4Y,.theme-dark .members-1998pB,.theme-dark .messagesWrapper-3lZDfY,.theme-dark .wrapper-1Rf91z,.video-1FfuMD{background-color:rgba(0,0,0,0)}.container-1UB9sr,.theme-dark .container-1r6BKw,.theme-dark .container-2Thooq,.theme-dark .contentRegion-3nDuYy,.theme-dark .layer-3QrUeG,.theme-dark .layers-3iHuyZ,.theme-dark .sidebarRegion-VFTUkN,.theme-light .container-2Thooq{background:rgba(0,0,0,0)}.theme-dark .selected-nT-gM3:before,.theme-dark .unread-2OHH1w:before{background:#1680b2}.name-2WpE7M,.theme-dark #bd-settings-sidebar .ui-tab-bar-item,.theme-dark .description-3_Ncsb,.theme-dark .divider-3gKybi:not(.dividerRed-MKoLlr) .dividerContent-2L12VI,.theme-dark .itemDefault-3Jdr52,.theme-dark .itemHover-EnbcjT,.theme-dark .labelDescriptor-1PqHgD,.theme-dark .markup-2BOw-j,.theme-dark .memberOffline-2lN7gt{color:#fff}.theme-dark .friendsTable-133bsv .friendsRow-2yicud .friendsColumnName-1zBOKm,.theme-dark .membersGroup-v9BXpm{color:#fff}.contentColumnDefault-1VQkGM,.sidebar-CFHs9e{background:rgba(0,0,0,.15)}.childWrapper-anI2G9.da-childWrapper,.da-childWrapper.childWrapper-anI2G9:hover:first-child{background:0 0}.wrapper-1BJsBx[aria-label=Home]{color:#fff;background-image:url(https://i.imgur.com/MdCJUZz.png);background-size:contain}.wrapper-1BJsBx.selected-bZ3Lue .childWrapper-anI2G9{background:transparent}';
		function readTextFile(file, callback) {
			let filepath = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'] + file;
			callback(fs.readFileSync(filepath));	
		};

		function saveTextFile (value, file){
			let filepath = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'] +file;
			fs.writeFileSync(filepath, value, function(err) {
				if (err) console.log(err);
			});
		};

		//Loads the Settings settings calles images because im stupid
		readTextFile("\\AppData\\Roaming\\BetterDiscord\\plugins\\Background.config.json",function(text){
			images = JSON.parse(text);
			console.log("Loaded images");
			console.log(images);
		});

		var secrbool = false;
		var delay = images.time * 1000;
		var keys = [];
		var x = 0;
		var inter;
		var opa = images.dim/100;
		var inde = 0;
		var rotationstatus = images.rotate;
		var Rotationtring;
		var ThemeStatus = images.theme;
		var ThemeStatusString;

		if(rotationstatus){
			Rotationtring = "ON";
		}else{
			Rotationtring = "OFF";
		}

		if(ThemeStatus){
			ThemeStatusString = "ON";
			$('head').append('<style class="TransparentTheme" type="text/css">'+ThemeString+'</style>');
		}else{
			ThemeStatusString = "OFF";
		}

			document.body.style.backgroundposition = 'center';
			document.body.style.backgroundrepeat = 'no-repeat';
			document.body.style.backgroundsize = 'cover';
			document.body.style.height= '100vh' ;

			$("#app-mount").css("background", "rgba(0,0,0," + opa+ ")" );

			function update(){
				x = Math.floor(Math.random() * (11 - 1));
				
				document.body.style.background = `url("${images.img[x].link}")`;			
			}	
		
			update();

		function Pause(){

				if (rotationstatus == false){
			
					rotationstatus = true;
					Rotationtring = "ON";
					inter = setInterval(update,delay);
					
				}else{
					rotationstatus = false;
					Rotationtring = "OFF";
					clearInterval(inter);				
				}
	
		}

		function Theme(){
				if (ThemeStatus == false){
					ThemeStatus = true;
					ThemeStatusString = "ON";
					$('head').append('<style class="TransparentTheme" type="text/css">'+ThemeString+'</style>');
				}else{
					ThemeStatus = false;
					ThemeStatusString = "OFF";
					$(".TransparentTheme").remove();
				}
				$(".BackgroundThemeButton").html("Transparent Theme " +ThemeStatusString);
			}

			document.body.addEventListener("keydown", keysPressed, false);
			document.body.addEventListener("keyup", keysReleased, false);
			document.body.addEventListener("wheel", MouseWheelHandler, false);
			
	function MouseWheelHandler(e) {
		var min = 0;
		var sek = 0;

		if (keys[17] && keys[20]){
			var e = document.body.event || e;
			var dd = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)))* 1000;
			UpdateTime();
		}
		if (keys[17] && keys[16]){
			var e = document.body.event || e;
			var dd = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)))* 60000;
			UpdateTime();
		}	
		function UpdateTime(){
			delay = delay + dd;
			if(delay<1000)delay = 1000;
			min = Math.trunc(delay/60000);
			sek = Math.round((delay/60000 - min )* 60);
			$(".name-3YKhmS").html('' +	min + " : " + sek + '');
			$(".BackgroundDelayInput").val(delay/1000);
			clearInterval(inter);
			inter = setInterval(update,delay);

		}
		return false;
	}
	
	function keysReleased(e){ keys[e.keyCode] = false; }	
	function keysPressed (e){
		keys[e.keyCode] = true;
		
		//CTRL + SHIFT + ^-9 = set das Bild des richtigen Index
	    if (keys[17] && keys[16] && keys[220]){document.body.style.background = `url("${images.img[0].link}")`; x=0 ; inde=0 }
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
		
		//CTRL + SHIFT + Space = Increase Background Opacity
		if (keys[17] && keys[16] && keys[187]){ 
			opa = opa + 0.05;
			if(opa>1)opa=1;
			$("#app-mount").css("background", "rgba(0,0,0," + opa+ ")" );
		}

		//CTRL + SHIFT + Space = Decrease Background Opacity
		if (keys[17] && keys[16] && keys[189]){ 
			opa = opa - 0.05;
			if(opa<0)opa=0.0;
			$("#app-mount").css("background", "rgba(0,0,0," + opa+ ")" );
		}

		//CTRL + SHIFT + Space = Start STOP
		if (keys[17] && keys[16] && keys[32]) Pause();
		
		//Das das schmutzige
		if (keys[17] && keys[16] && keys[190]){ 
			var secr = $('.listItem-2P_4kh.da-listItem').last().prev().prev()
			if(!$(secr).find('.blobContainer-239gwq.da-blobContainer').length){
				 secr= $('.listItem-2P_4kh.da-listItem').last().prev().prev().prev();
			}
			
			if(secr.is(":hidden")){
				secr.show();
				secrbool = true;
			}else{
				secr.hide();
				secrbool = false;
			}
		}
	}


	//HERE STARTS THE SETTINGS PAGE A LOT OF HTML CSS SHIT----------------------------------------------------------------------------------
		
	function WallpaperIO(){
		var cssstyle =  {
			"position": "relative",
			"width":"80%",
			"height":"25px",
			"font-size":"20px",
			"margin":"5px 10%",
			"text-align":"center",
			"transition":"all 1s"
		}

		let setImgbutton = $("<button>", {
			'class': "wrapper-25eVIn circleButtonMask-2VNJsN da-wrapper da-circleButtonMask",
			'id':"bd-pub-button",
			'html' : "Set Img",
			css: {
				"position": "relative",
				"width":"48px",
				"height":"20px",
				"font-size":"10px",
				"margin-left":"11px",
				"margin-bottom":"11px"
			}
		}).insertAfter("#bd-pub-li");
		
		setImgbutton.click(function() {
			if($(".BackgroundSettings").length){
				$(".BackgroundSettings").remove();
			}else{
			var BackgroundSettings = $("<div>", {
				'class': "BackgroundSettings",
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

			$(BackgroundSettings).first().fadeIn("slow");
		
			$(BackgroundSettings).keydown(function(event){
				if(event.which == 27){
					$(BackgroundSettings).remove();
				}
			});

			var BackgroundIndexP = $("<p>", {
				'class': "BackgroundIndexP",
				'html':"Index of Wallpaper",
				css: cssstyle
			}).appendTo($(BackgroundSettings));

			var BackgroundIndexInput = $("<input>", {
				'type':"number",
				'min':0,
				'max':9,
				'class': "BackgroundIndexInput",
				'val': x,
				css: cssstyle
			}).appendTo($(BackgroundSettings));
			
			var BackgroundNameP = $("<p>", {
				'class': "BackgroundNameP",
				'html':"Name of Wallpaper",
				css: cssstyle
			}).appendTo($(BackgroundSettings));

			var BackgroundNameInput = $("<input>", {
				'class': "BackgroundNameInput",
				'val': images.img[x].name,
				css: cssstyle
			}).appendTo($(BackgroundSettings));
			
			var BackgroundUrlP = $("<p>", {
				'class': "BackgroundUrlP",
				'html': "URL of Wallpaper",
				css: cssstyle
			}).appendTo($(BackgroundSettings));

			var BackgroundUrlInput = $("<input>", {
				'class': "BackgroundUrlInput",
				'val':images.img[x].link,
				css: cssstyle
			}).appendTo($(BackgroundSettings));

			var BackgroundDelayP = $("<p>", {
				'class': "BackgroundDelayP",
				'html':"Delay between Wallpapers",
				css: cssstyle
			}).appendTo($(BackgroundSettings));

			var BackgroundDelayInput = $("<input>", {
				'class': "BackgroundDelayInput",
				'val' : delay/1000,
				css: cssstyle
			}).appendTo($(BackgroundSettings));
	
			var BackgroundRotateButton = $("<button>", {
				'class': "BackgroundRotateButton",
				'html' :"Wallpaper Rotation " + Rotationtring,
				css: cssstyle
			}).appendTo($(BackgroundSettings));

			var BackgroundThemeButton = $("<button>", {
				'class': "BackgroundThemeButton",
				'html' :"Transparent Theme " + ThemeStatusString,
				css: cssstyle
			}).appendTo($(BackgroundSettings));

			var BackgroundDimP = $("<p>", {
				'class': "BackgroundDimP",
				'html':"Dimming of Wallpapers " + Math.trunc(opa*100) + "%",
				css: cssstyle
			}).appendTo($(BackgroundSettings));

			var BackgroundDimInput = $("<input>", {
				'class': "BackgroundDimInput",
				'type':"range",
				'min':"0",
				'max':"100",
				'step':"1",
				'val':Math.trunc(opa*100),
				css: cssstyle
			}).appendTo($(BackgroundSettings));

			var BackgroundOkButton = $("<button>", {
				'class': "BackgroundOkButton",
				'html':"Save Settings",
				css: cssstyle
			}).appendTo($(BackgroundSettings));

			$(BackgroundOkButton).hover(
				function(){
					$(this).css({
						"transform":"scaleY(1.1)",
						"background":"grey"
					})
			},
				function(){
					$(this).css({
						"transform":"scaleY(1.0)",
						"background":"rgb(255,255,255)"
					})
				}
			);

			var BackgroundChnageButton = $("<button>", {
				'class': "BackgroundChnageButton",
				'html':"Set Wallpaper (temporaray)",
				css: cssstyle
			}).appendTo($(BackgroundSettings));

			var Helpbutton = $("<button>", {
				'class': "Helpbutton",
				'html': "HELP",
				css: cssstyle
			}).appendTo($(BackgroundSettings));

			var BackgroundSettingsBack = $("<button>",{
				"class":"BackgroundSettingsBack",
				"html":"Back",
				css: cssstyle
			}).appendTo($(BackgroundSettings));
			BackgroundSettingsBack.click(function(){
				$(BackgroundSettings).remove();
			});

			//Event to chnage Background and information when clicking the arrow Keys 
			$(BackgroundIndexInput).bind('input', function () {
				inde = $(".BackgroundIndexInput").val();
				$(".BackgroundNameInput").val(images.img[inde].name);
				$(".BackgroundUrlInput").val(images.img[inde].link);
				x = inde;
				document.body.style.background = `url("${images.img[inde].link}")`;	
			});

			//Turns on off Rotation on Buttonpress 
			BackgroundRotateButton.click(function(){
				if(rotationstatus){		
					Rotationtring = "OFF";
					Pause();
				}else{
					Rotationtring = "ON";
					Pause();
				}
				BackgroundRotateButton.html("Wallpaper Rotation " +Rotationtring);
			});

			BackgroundThemeButton.click(function(){
				
				if(ThemeStatus){		
					
					Theme();
				}else{
					
					Theme();
				}
				
				console.log(ThemeStatusString)
			});

			//Sliderevent to see the dimming in real time
			BackgroundDimInput.change(function(){
				opa = BackgroundDimInput.val()/100;
				$("#app-mount").css("background", "rgba(0,0,0," + opa+ ")" );
				BackgroundDimP.html("Dimming of Wallpapers " + Math.trunc(opa*100) +"%");
			});

			//Changes Background Picture to see if it works for you but doesnt save it to .json file
			BackgroundChnageButton.click(function(){
				x = inde;
				document.body.style.background = `url("${BackgroundUrlInput.val()}")`;	
			});

			//Changes Background Picture + all other settings and saves the values to the .json file
			BackgroundOkButton.click(function(){
				let realindex = $(BackgroundIndexInput).val();
				images.img[realindex].name = $(".BackgroundNameInput").val();
				images.img[realindex].link = $(".BackgroundUrlInput").val();
				
				if(!isNaN($(".BackgroundDelayInput").val())){
					images.time = $(".BackgroundDelayInput").val();
				}
				images.dim = opa*100;
				images.rotate = rotationstatus;
				images.theme = ThemeStatus;
				delay = images.time * 1000;
				var jsonContent  = JSON.stringify(images);
				$(".BackgroundOkButton").css("background","springgreen");
				if(rotationstatus){
					clearInterval(inter);
					inter = setInterval(update,delay);
				}
				saveTextFile(jsonContent,"\\AppData\\Roaming\\BetterDiscord\\plugins\\Background.config.json");
			});

			Helpbutton.click(function(){
				console.log("HELLO");
				var HelpPage = $("<div>", {
					'class': "HelpPage",
					css: {
						"position": "absolute",
						"width":"100%",
						"height":$(BackgroundSettings).height() + "px",
						"top":"0%",
						"left":"0%",
						"font-size":"10px",
						"background-color":"#000000",	
						"background-image":"linear-gradient(147deg, #000000 0%, #2c3e50 74%)",
						"color":"white",
						"border-radius":"50px",
						"padding-top":"10px",
						"padding-bottom":"10px",
						"overflow":"hidden"
					}
				}).appendTo($(BackgroundSettings));

				HelpPage.focus();
				var Helptexth1 = $("<h1>", {
					'class': "Helptexth1",
					'html':"<br>Helppage<br><br>",
					css: {
					"position": "relative",
					"width":"80%",
					"height":"auto",
					"font-size":"40px",
					"margin":"10px 10%",
					"margin-top":"0",
					"text-align":"center",
					}
				}).appendTo($(".HelpPage"));

				var Helptext = $("<pre>", {
					'class': "Helptext",
					'html':"Use Ctrl+Shift+^-9		to switch between your set wallpapers\
						<br>Use Ctrl+Shift+R		to switch between to a random image\
						<br>Use Ctrl+Shift+Space	to switch the Wallpaper rotation on and off\
						<br>Use Ctrl+Shift+Wheel	to in/decrease the delay by minutes\
						<br>Use Ctrl+Shift+Wheel	to in/decrease the delay by seconds\
						<br>Use Ctrl+Shift+ -/+		to in/decrease the background opacity\
						<br><br><br><pre style='text-align:center'> Plugin created by L7Yuki Gasai </pre>",
					css: {
					"position": "relative",
					"width":"80%",
					"height":"auto",
					"font-size":"30px",
					"margin":"10px 10%",
					"margin-top":"0",
					"text-align":"left",
					}
				}).appendTo($(".HelpPage"));

				var HelppageBack = $("<button>",{
					"class":"HelppageBack",
					"html":"Back",
					css:{
						"position": "relative",
						"width":"80%",
						"height":"30px",
						"font-size":"20px",
						"margin":"5px 10%",
						"margin-top":"20px",
						"text-align":"center",
						"background":"white"
					}
				}).appendTo($(".HelpPage"));
				HelppageBack.click(function(){
					$(HelpPage).remove();
				})
			});
			}
		});

		}
		
	WallpaperIO();
	if(rotationstatus) inter = setInterval(update,delay);

	setInterval(()=>{
		if(secrbool == false){
			if($('.listItem-2P_4kh.da-listItem').last().prev().prev().find('.blobContainer-239gwq.da-blobContainer').length){
				$('.listItem-2P_4kh.da-listItem').last().prev().prev().hide();
			}else{
				$('.listItem-2P_4kh.da-listItem').last().prev().prev().prev().hide();
			}
		
		}
	} ,1000);
		
}

	initialize () {}

	stop () {}
	
}
