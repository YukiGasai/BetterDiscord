//META{"name":"Twitter"}*//

class Twitter{
	constructor () {}

	getName () {return "Twitter";}

	getDescription () {return "A Button for Tweets";}

	getVersion () {return "1.1.0";}

	getAuthor () {return "L7Yuki Gasai";}

	//legacy
	load(){}
	
	start(){
		var  box = document.getElementsByClassName("scroller-2FKFPG members-1998pB");
		var Child1 = document.getElementsByClassName("membersGroup-v9BXpm");

				function erstellen(){


					if ($("#Twitterbtn").length ) {
		
						
					}else if($(".scroller-2FKFPG.members-1998pB").length && $(".membersGroup-v9BXpm").length ){
						
					
				


			
				var	btn = document.createElement("button");
					btn.onclick = function() {window.open("https://twitter.com/"); };			
					btn.id = "Twitterbtn";
					btn.style.zIndex = 10;
					btn.style.position = 'relative';
					btn.style.opacity = '0.5';
					btn.style.width = '50px';
					btn.style.height = '50px';
					btn.style.borderRadius = '50%';
					btn.style.backgroundsize = 'cover';
					btn.style.marginLeft = '12px';
					btn.style.marginRight = '5px';
					btn.style.marginTop = '5px';
					btn.style.background = 'url("https://www.yoyochinese.com/images/webpage/front/footer/Twitter-ICON.svg")';
					btn.style.transition= "all 0.4s ease-in-out "
					box[0].appendChild(btn);

					box[0].insertBefore(btn,Child1[0]);

					$(btn).hover(
						function () {
							$(this).css({
								"opacity":"1",
								"transform":"scale(1.1)"
							});
						 }, 		  
						 function () {
							$(this).css({
								"opacity":"0.5",
								"transform":"scale(1.0)"
							});
					});
						
				var	btn2 = document.createElement("button");
					btn2.onclick = function() {window.open("https://www.youtube.com/?hl=de&gl=DE"); };			
					btn2.id = "Youtubebtn";
					btn2.style.zIndex = 10;
					btn2.style.position = 'relative';
					btn2.style.opacity = '0.5';
					btn2.style.width = '50px';
					btn2.style.height = '50px';
					btn2.style.marginRight = '5px';
					btn2.style.borderRadius = '50%';
					btn2.style.marginTop = '5px';
					btn2.style.backgroundsize = 'cover';
					btn2.style.transition= "all 0.4s ease-in-out "
					btn2.style.background = 'url("https://static.getjar.com/icon-50x50/ae/853366_thm.png")';
					//box[1].appendChild(btn);
					box[0].appendChild(btn2);
					box[0].insertBefore(btn2,Child1[0]);

					$(btn2).hover(
						function () {
							$(this).css({
								"opacity":"1",
								"transform":"scale(1.1)"
							});
						 }, 		  
						 function () {
							$(this).css({
								"opacity":"0.5",
								"transform":"scale(1.0)"
							});
					});
						
				var	btn3 = document.createElement("button");
					btn3.onclick = function() {window.open("https://web.whatsapp.com/"); };			
					btn3.id = "WhatsappButton";
					btn3.style.zIndex = 10;
					btn3.style.position = 'relative';
					btn3.style.opacity = '0.5';
					btn3.style.marginRight = '5px';
					btn3.style.width = '50px';
					btn3.style.height = '50px';
					btn3.style.borderRadius = '50%';
					btn3.style.backgroundsize = 'cover';
					btn3.style.marginTop = '5px';
					btn3.style.transition= "all 0.4s ease-in-out "
					btn3.style.background = 'url("https://static.getjar.com/icon-50x50/b9/847775_thm.png")';
					//box[1].appendChild(btn);
					box[0].appendChild(btn3);
					box[0].insertBefore(btn3,Child1[0]);

					$(btn3).hover(
						function () {
							$(this).css({
								"opacity":"1",
								"transform":"scale(1.1)"
							});
						 }, 		  
						 function () {
							$(this).css({
								"opacity":"0.5",
								"transform":"scale(1.0)"
							});
					});
									
				var	btn4 = document.createElement("button");
					btn4.onclick = function() {window.open("https://www.twitch.tv/"); };			
					btn4.id = "Twitchbutton";
					btn4.style.zIndex = 10;
					btn4.style.position = 'relative';
					btn4.style.opacity = '0.5';
					btn4.style.width = '50px';
					btn4.style.marginRight = '5px';
					btn4.style.height = '50px';
					btn4.style.borderRadius = '50%';
					btn4.style.marginTop = '5px';
					btn4.style.backgroundsize = 'cover';
					btn4.style.transition= "all 0.4s ease-in-out "
					btn4.style.background = 'url("https://static.getjar.com/icon-50x50/e7/861632_thm.jpg")';
					//box[1].appendChild(btn);
					box[0].appendChild(btn4);
					box[0].insertBefore(btn4,Child1[0]);
					
					$(btn4).hover(
						function () {
							$(this).css({
								"opacity":"1",
								"transform":"scale(1.1)"
							});
						 }, 		  
						 function () {
							$(this).css({
								"opacity":"0.5",
								"transform":"scale(1.0)"
							});
					});


		
					}
				}
				
		
				setInterval(erstellen,1000);
		
		
	}
	
	initialize(){}
	
	stop(){}
	
}
