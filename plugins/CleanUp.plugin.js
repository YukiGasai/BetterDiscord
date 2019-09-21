//META{"name":"CleanUp"}*//

class CleanUp{
	constructor () {}

	getName () {return "CleanUp";}

	getDescription () {return "CleanUp";}

	getVersion () {return "1.5.0";}

	getAuthor () {return "Yuki Gasai";}
	
	//legacy
	load(){}
	start(){
		var secrbool = false;
		var keys = []
		$("body").keydown(function(e){
			keys[e.keyCode] = true;
			if (keys[17] && keys[16] && keys[190]) {
				var secr = $('.listItem-2P_4kh.da-listItem').last().prev().prev()
				if (!$(secr).find('.blobContainer-239gwq.da-blobContainer').length) {
					secr = $('.listItem-2P_4kh.da-listItem').last().prev().prev().prev();
				}
				if (secr.is(":hidden")) {
					secr.show();
					secrbool = true;
				} else {
					secr.hide();
					secrbool = false;
				}
			}
		})
		$("body").keyup(function(e){keys[e.keyCode] = false;});

		function ru (){
			var d =  $('.membersGroup-v9BXpm.da-membersGroup').last().html();
			if($('.membersGroup-v9BXpm.da-membersGroup').last().nextAll().is(":visible") && d.indexOf("Offline") >= 0){
				$('.membersGroup-v9BXpm.da-membersGroup').last().nextAll().hide();
			}

			var ServerError =  $('.anchor-3Z-8Bb.anchorUnderlineOnHover-2ESHQB.guildsError-b7zR5H.da-anchor.da-anchorUnderlineOnHover.da-guildsError');
			if($(ServerError).is(":visible")){
				$(ServerError).hide();
				console.log("Hide Server Error")
			} 
			

			if (secrbool == false) {
				if ($('.listItem-2P_4kh.da-listItem').last().prev().prev().find('.blobContainer-239gwq.da-blobContainer').length) {
					$('.listItem-2P_4kh.da-listItem').last().prev().prev().hide();
				} else {
					$('.listItem-2P_4kh.da-listItem').last().prev().prev().prev().hide();
				}
		
			}
        }

        setInterval(ru,1000);
	}
	initialize(){}
	stop(){}
}