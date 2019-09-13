//META{"name":"Offline"}*//

class Offline{
	constructor () {}

	getName () {return "Offline";}

	getDescription () {return "Offline";}

	getVersion () {return "1.1.0";}

	getAuthor () {return "Richard";}
	
	//legacy
	load(){}
	start(){

		function ru (){
			var d =  $('.membersGroup-v9BXpm.da-membersGroup').last().html();
			if($('.membersGroup-v9BXpm.da-membersGroup').last().nextAll().is(":visible") && d.indexOf("Offline") >= 0){
			$('.membersGroup-v9BXpm.da-membersGroup').last().nextAll().hide();
			}
        }

        setInterval(ru,1000);
	}
	initialize(){}
	stop(){}
}