//META{"name":"Hiddenchats"}*//

class Hiddenchats {
	constructor () {

	}

	getName () {return "Hiddenchats";}

	getDescription () {return "A Hiddenchat";}

	getVersion () {return "1.1.0";}

	getAuthor () {return "L7Yuki Gasai";}
	
	//legacy
	load () {}

	start () {
		
		
		function erstellen(){
		if($(".contextMenu-HLZMGh .da-contextMenu .theme-dark").length){
		console.log($(".contextMenu-HLZMGh .da-contextMenu .theme-dark").html());
		}else{
			$('<a>TEST</a>').appendTo('.contextMenu-HLZMGh .da-contextMenu .theme-dark');
			
			
		}
		
		
		}
			erstellen();
			setInterval(erstellen, 1000);
		
	}
	
	initialize(){}
	
	stop(){}

	
}