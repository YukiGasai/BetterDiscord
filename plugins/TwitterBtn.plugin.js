//META{"name":"Twitter"}*//

class Twitter{
	constructor () {}

	getName () {return "Twitter";}

	getDescription () {return "A Button for Tweets";}

	getVersion () {return "1.1.0";}

	getAuthor () {return "Richard";}

	//legacy
	load(){}
	
	start(){
		
				function erstellen(){

					console.log("TRY");


						
					if ($("#Twitterbtn").length) {
					
						console.log('Bereits da mach nichts');
						
					}else{


				
					var  box = document.getElementsByClassName("scroller-2FKFPG members-1998pB");
					var Child1 = document.getElementsByClassName("membersGroup-v9BXpm");

			
				var	btn = document.createElement("button");
					btn.onclick = function() {window.open("https://twitter.com/intent/tweet", "_top", "toolbar=yes,top=500,left=500,width=400,height=400"); };			
					btn.id = "Twitterbtn";
					btn.style.zIndex = 10;
					btn.style.position = 'relative';
					btn.style.opacity = '0.5';
					btn.style.width = '50px';
					btn.style.height = '50px';
					btn.style.borderRadius = '50%';
					btn.style.backgroundsize = 'cover';
					btn.style.background = 'url("https://www.yoyochinese.com/images/webpage/front/footer/Twitter-ICON.svg")';
	
					box[0].appendChild(btn);

					box[0].insertBefore(btn,Child1[0]);

						
				var	btn2 = document.createElement("button");
					btn2.onclick = function() {window.open("https://www.youtube.com/?hl=de&gl=DE", "_top", "toolbar=yes,top=500,left=500,width=400,height=400"); };			
					btn2.id = "Youtubebtn";
					btn2.style.zIndex = 10;
					btn2.style.position = 'relative';
					btn2.style.opacity = '0.5';
					btn2.style.width = '50px';
					btn2.style.height = '50px';
					btn2.style.borderRadius = '50%';
					btn2.style.backgroundsize = 'cover';
					btn2.style.background = 'url("https://static.getjar.com/icon-50x50/ae/853366_thm.png")';
					//box[1].appendChild(btn);
					box[0].appendChild(btn2);
					box[0].insertBefore(btn2,Child1[0]);
						
				var	btn3 = document.createElement("button");
					btn3.onclick = function() {window.open("https://web.whatsapp.com/", "_top", "toolbar=yes,top=500,left=500,width=400,height=400"); };			
					btn3.id = "WhatsappButton";
					btn3.style.zIndex = 10;
					btn3.style.position = 'relative';
					btn3.style.opacity = '0.5';
					btn3.style.width = '50px';
					btn3.style.height = '50px';
					btn3.style.borderRadius = '50%';
					btn3.style.backgroundsize = 'cover';
					btn3.style.background = 'url("https://static.getjar.com/icon-50x50/b9/847775_thm.png")';
					//box[1].appendChild(btn);
					box[0].appendChild(btn3);
					box[0].insertBefore(btn3,Child1[0]);
									
				var	btn4 = document.createElement("button");
					btn4.onclick = function() {window.open("https://www.twitch.tv/", "_top", "toolbar=yes,top=500,left=500,width=400,height=400"); };			
					btn4.id = "Twitchbutton";
					btn4.style.zIndex = 10;
					btn4.style.position = 'relative';
					btn4.style.opacity = '0.5';
					btn4.style.width = '50px';
					btn4.style.height = '50px';
					btn4.style.borderRadius = '50%';
					btn4.style.backgroundsize = 'cover';
					btn4.style.background = 'url("https://static.getjar.com/icon-50x50/e7/861632_thm.jpg")';
					//box[1].appendChild(btn);
					box[0].appendChild(btn4);
					box[0].insertBefore(btn4,Child1[0]);
					
				


		
					}
				}
				
		
				$('.membersWrap-2h-GB4.da-membersWrap').bind("DOMSubtreeModified", erstellen);
		
		
	}
	
	initialize(){}
	
	stop(){}
	
}
