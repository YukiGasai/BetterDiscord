//META{"name":"GoogleSearch"}*//

class GoogleSearch {
	constructor () {

	}

	getName () {return "GoogleSearch";}

	getDescription () {return "GoogleSearch from chat";}

	getVersion () {return "1.1.0";}

	getAuthor () {return "L7Yuki Gasai";}
	
	//legacy
	load () {
		
	}

	start () {
		
		
		
	$(".textArea-2Spzkt, .da-textArea, .textArea-2Spzkt, .da-textArea, .scrollbarGhostHairline-1mSOM1, .scrollbar-3dvm_9, .da-scrollbarGhostHairline, .da-scrollbar").keydown(function(e){
      //CTRL + V keydown combo
      if(e.ctrlKey && e.keyCode == 71){
        var b = $(".textArea-2Spzkt, .da-textArea, .textArea-2Spzkt, .da-textArea, .scrollbarGhostHairline-1mSOM1, .scrollbar-3dvm_9, .da-scrollbarGhostHairline, .da-scrollbar").text();
	alert(b);
		window.open("https://www.google.com/search?q="+b, "_top", "toolbar=yes,top=500,left=500,width=400,height=400"); 
		  
      }
	});

	
	}
	
	initialize(){}
	
	stop(){}

}