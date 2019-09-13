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

        setInterval(1000,()=>{
            console.log("YEE");
        });


       

       
      
    
        /*$('.membersWrap-2h-GB4.da-membersWrap').bind("DOMSubtreeModified",function(){
                   
                    
                    var d =  $('.membersGroup-v9BXpm.da-membersGroup').last().html();
        
                    if($('.membersGroup-v9BXpm.da-membersGroup').last().nextAll().is(":visible") && d.indexOf("Offline") >= 0){
        
                        
                    $('.membersGroup-v9BXpm.da-membersGroup').last().nextAll().hide();
                    }
                 });
                 */




	}
	
	initialize(){}
	
	stop(){}
	
}