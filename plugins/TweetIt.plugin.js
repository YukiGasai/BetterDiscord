//META{"name":"TweetIt"}*//

class TweetIt {
	constructor () {

	}

	getName () {return "TweetIt";}

	getDescription () {return "TweetIt from chat";}

	getVersion () {return "1.1.0";}

	getAuthor () {return "L7Yuki Gasai";}
	
	//legacy
	load () {
		
	}

	start () {
		
		
		
	$(".textArea-2Spzkt, .da-textArea, .textArea-2Spzkt, .da-textArea, .scrollbarGhostHairline-1mSOM1, .scrollbar-3dvm_9, .da-scrollbarGhostHairline, .da-scrollbar").keydown(function(e){
      if(e.ctrlKey && e.key == 'd'){
        var b = $(".textArea-2Spzkt, .da-textArea, .textArea-2Spzkt, .da-textArea, .scrollbarGhostHairline-1mSOM1, .scrollbar-3dvm_9, .da-scrollbarGhostHairline, .da-scrollbar").text();
		console.log(b);
		
		b = b.replace(/#/g,"%23");
		
		window.open("https://twitter.com/intent/tweet?text=" + b);	
	  }
	});

	
	}
	
	initialize(){}
	
	stop(){}

}