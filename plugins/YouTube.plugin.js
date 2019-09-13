//META{"name":"YouTube"}*//

class YouTube {
	constructor () {

	}

	getName () {return "YouTube";}

	getDescription () {return "A little YouTubeWindow";}

	getVersion () {return "1.1.0";}

	getAuthor () {return "L7Yuki Gasai";}

	
	
	
	//legacy
	load () {}


	start () {
		$('<div id="ytThumbs" style="position:absolute; top:5%; left:45%; width: 768; height: 432"></div>').appendTo('body');
		
		
		
		
		
	$("body").keydown(function(e){
		if(e.ctrlKey && e.keyCode == 81){

			var b = $(".textArea-2Spzkt.da-textArea.textArea-2Spzkt.da-textArea.scrollbarGhostHairline-1mSOM1.scrollbar-3dvm_9.da-scrollbarGhostHairline.da-scrollbar").text();
			console.log(b);
			
			$.getScript( "https://yvoschaap.com/ytpage/ytembed.js", function() {
				ytEmbed.init({"block":"ytThumbs","q": b,"type":"search","results":1,"player":"embed","layout":"thumbnails","height":432,"width":768});
			});
		
			
			
		}
		
		if(e.ctrlKey && e.keyCode == 68){
			$("#ytThumbs").empty();
			$("#ytThumbs").remove();
		console.log("remove");
	
		focus("body");
		}
		
	});
	
	
	}
		
	initialize(){}
	
	stop(){}
	
}