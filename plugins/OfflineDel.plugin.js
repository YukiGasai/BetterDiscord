//META{"name":"OfflineDel"}*//

class OfflineDel{
	constructor () {}

	getName () {return "OfflineDel";}

	getDescription () {return "OfflineDel";}

	getVersion () {return "1.1.0";}

	getAuthor () {return "Richard";}
	
	//legacy
	load(){}
	
	start(){

        $('.membersWrap-2h-GB4.da-membersWrap').bind("DOMSubtreeModified",function(){
		   
			
            var d =  $('.membersGroup-v9BXpm.da-membersGroup').last().html();

            if($('.membersGroup-v9BXpm.da-membersGroup').last().nextAll().is(":visible") && d.indexOf("Offline") >= 0){

                
            $('.membersGroup-v9BXpm.da-membersGroup').last().nextAll().not("#TwitterBtn").hide();
        }
    });




	}
	
	initialize(){}
	
	stop(){}
	
}