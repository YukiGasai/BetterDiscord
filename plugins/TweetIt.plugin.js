//META{"name":"TweetIt","version":"1.1.0"}*//

class TweetIt {
	constructor () {

	}

	getName () {return "TweetIt";}

	getDescription () {return "TweetIt and Google from chat Ctrl + X/Y";}

	getVersion () {return "1.1.0";}

	getAuthor () {return "L7Yuki Gasai";}
	
	//legacy
	load () {
		var fs = require('fs');
        const request = require('request');

        var jspath    = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'] + "\\AppData\\Roaming\\BetterDiscord\\plugins\\TweetIt.plugin.js";
        
        function isNewerVersion (oldVer, newVer) {
            const oldParts = oldVer.split('.')
            const newParts = newVer.split('.')
            for (var i = 0; i < newParts.length; i++) {
                const a = parseInt(newParts[i]) || 0
                const b = parseInt(oldParts[i]) || 0
                if (a > b) return true
                if (a < b) return false
            }
		return false
		}
		//UPDATE SCRIPT
		request("https://raw.githubusercontent.com/YukiGasai/MyPublicBetterDiscord/master/TweetIt.plugin.js",(err, res, body)=>{
			var searchstring = `"version":"`;
			var startindex = body.indexOf(searchstring)+ searchstring.length;
			var stopindex = body.indexOf(`"`,startindex);
			var version = body.substring(startindex,stopindex);
			console.log(this.getName() + "---  New Version:" + version+ "\nCurrentVersion:" +this.getVersion());
			if(isNewerVersion(this.getVersion(),version)){
				fs.writeFileSync(jspath,body,{encoding:'utf8',flag:'w'})
			}
		});
	}

	start () {
		
		var chatbox = $(".buttons-205you.da-buttons");

		function createButtonT(){

			if($(".buttons-205you.da-buttons").length&& !$("#TwitterButtonOutside").length){

			var TwitterButtonOutside = $("<div>", {
				'id':"TwitterButtonOutside",
				'class':  "buttonWrapper-1ZmCpA da-buttonWrapper button-38aScr da-button lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN da-grow",
				css: {
					"position": "relative",
					"width":"40px",
					"height":"44px",
					"font-size":"20px",
			
					
					"text-align":"center"
					
				}
			}).appendTo($(".buttons-205you.da-buttons"));

			var TwitterButtonInside = $("<div>", {
				'id':"TwitterButtonInside",
				'class':  "buttonWrapper-1ZmCpA da-buttonWrapper button-38aScr da-button lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN da-grow",
				css: {
					"position": "relative",
					"width":"32px",
					"height":"32px",
			
					
					
					"text-align":"center"
					
				}
			}).appendTo($("#TwitterButtonOutside"));

			var TwitterSVG = $("<img>", {
				'src':"https://upload.wikimedia.org/wikipedia/de/9/9f/Twitter_bird_logo_2012.svg",
				'id':"TwitterSVG",
				'viewBox':"0 0 24 24",
				'class':  "icon-3D60ES da-icon",
				'aria-hidden':"false",
				css: {
					"position": "relative",
					"width":"24px",
					"height":"24px",
					"filter":"grayscale(100%)",
					"transition":"all 0.5s ease-in-out "
					
				}
			}).appendTo($("#TwitterButtonInside"));
		
		TwitterSVG.hover(
			function () {
				$(this).css({
					"filter":"grayscale(0%)",
					"transform":"scale(2.0)"
				});

			 }, 
			  
			 function () {
				$(this).css({
					"filter":"grayscale(100%)",
					"transform":"scale(1.0)"
				});
		
			 }
		);

		TwitterSVG.click(TAction);

		}
	}

	function createButtonG(){

		if($(".buttons-205you.da-buttons").length && !$("#GoogleButtonOutside").length){

		var GoogleButtonOutside = $("<div>", {
			'id':"GoogleButtonOutside",
			'class':  "buttonWrapper-1ZmCpA da-buttonWrapper button-38aScr da-button lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN da-grow",
			css: {
				"position": "relative",
				"width":"40px",
				"height":"44px",
				"font-size":"20px",
		
				
				"text-align":"center"
				
			}
		}).appendTo($(".buttons-205you.da-buttons"));

		var GoogleButtonInside = $("<div>", {
			'id':"GoogleButtonInside",
			'class':  "buttonWrapper-1ZmCpA da-buttonWrapper button-38aScr da-button lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN da-grow",
			css: {
				"position": "relative",
				"width":"32px",
				"height":"32px",
		
				
				
				"text-align":"center"
				
			}
		}).appendTo($("#GoogleButtonOutside"));

		var GoogleSVG = $("<img>", {
			'src':"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
			'id':"TwitterSVG",
			'viewBox':"0 0 24 24",
			'class':  "icon-3D60ES da-icon",
			'aria-hidden':"false",
			css: {
				"position": "relative",
				"width":"24px",
				"height":"24px",
				"filter":"grayscale(100%)",
				"transition":"all 0.5s ease-in-out "
				
			}
		}).appendTo($("#GoogleButtonInside"));
	
		GoogleSVG.hover(
		function () {
			$(this).css({
				"filter":"grayscale(0%)",
				"transform":"scale(2.0)"
			});

		 }, 
		  
		 function () {
			$(this).css({
				"filter":"grayscale(100%)",
				"transform":"scale(1.0)"
			});
	
		 }
	);

	GoogleSVG.click(GAction);
	
	$(".da-channelTextArea").keydown(function(event){

		if(event.ctrlKey && event.keyCode == 89){
			GAction();
		}
		if(event.ctrlKey && event.keyCode == 88){
			TAction();
		}
	});


	}

}

	function TAction(){
	var b = $(".textArea-2Spzkt.da-textArea.textArea-2Spzkt.da-textArea.scrollbarGhostHairline-1mSOM1.scrollbar-3dvm_9.da-scrollbarGhostHairline.da-scrollbar").text();
	b = b.replace(/#/g,"%23");
	window.open("https://twitter.com/intent/tweet?text=" + b);	
   }

	function GAction(){
		var b = $(".textArea-2Spzkt.da-textArea.textArea-2Spzkt.da-textArea.scrollbarGhostHairline-1mSOM1.scrollbar-3dvm_9.da-scrollbarGhostHairline.da-scrollbar").text();
		b = b.replace(/#/g,"%23");
		window.open("https://www.google.com/search?q="+b); 
	}

	setInterval(createButtonT,1000);
	setInterval(createButtonG,1000);
	}
	
	initialize(){}
	
	stop(){}

}
