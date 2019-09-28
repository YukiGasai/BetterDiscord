//META{"name":"Radio","version":"1.1.1"}*//

class Radio {
	constructor() {
	}

	getName() { return "Radio"; }

	getDescription() { return "Radio"; }

	getVersion() { return "1.1.1"; }

	getAuthor() { return "L7Yuki Gasai"; }

	//legacy
    load() { 
        var fs = require('fs');
	var request = require('request');
        var filepath1 = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'] + "\\AppData\\Roaming\\BetterDiscord\\plugins\\Radio.config.json";
        var jspath    = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'] + "\\AppData\\Roaming\\BetterDiscord\\plugins\\Radio.plugin.js";
        function isNewerVersion (oldVer, newVer) {
            const oldParts = oldVer.split('.')
            const newParts = newVer.split('.')
            for (var i = 0; i < newParts.length; i++) {
                const a = parseInt(newParts[i]) || 0
                const b = parseInt(oldParts[i]) || 0
                if (a > b) return true
                if (a < b) return false
            }
        return false
        }

		//UPDATE SCRIPT
		request("https://raw.githubusercontent.com/YukiGasai/MyPublicBetterDiscord/master/Radio.plugin.js",(err, res, body)=>{
			var searchstring = `"version":"`;
			var startindex = body.indexOf(searchstring)+ searchstring.length;
			var stopindex = body.indexOf(`"`,startindex);
			var version = body.substring(startindex,stopindex);
            console.log("New Version:" + version+ "\nCurrentVersion:" +this.getVersion());
            
			if(isNewerVersion(this.getVersion(),version)){
				fs.writeFileSync(jspath,body,{encoding:'utf8',flag:'w'})
			}
		});


        fs.exists(filepath1, function (exists) {
			if (!exists) {
				fs.writeFileSync(filepath1,'{"Radios":[{"Name":"MDR Info","Url":"https://mdr-dg-mdr-https-fra-dtag-cdn.sslcast.addradio.de/mdr/aktuell/live/mp3/128/stream.mp3"},{"Name":"MDR Thüringen","Path":"https://mdr-dg-mdr-https-fra-dtag-cdn.sslcast.addradio.de/mdr/aktuell/live/mp3/128/stream.mp3","Url":"https://mdr-dg-mdr-https-fra-dtag-cdn.sslcast.addradio.de/mdr/mdrthueringen/live/mp3/128/stream.mp3"},{"Name":"Landeswelle Thüringen","Path":"http://landeswelle-de-hz-fal-stream07-cluster01.radiohost.de/lwdemp3-192","Url":"http://landeswelle-de-hz-fal-stream06-cluster01.radiohost.de/lwtmp3-192"},{"Name":"Landes Oldie Welle","Path":"http://landeswelle-de-hz-fal-stream05-cluster01.radiohost.de/lwro_mp3-192","Url":"http://landeswelle-de-hz-fal-stream01-cluster01.radiohost.de/lwol_mp3-192"},{"Name":"Landes Rock Welle","Path":"http://landeswelle-de-hz-fal-stream05-cluster01.radiohost.de/lwro_mp3-192","Url":"http://landeswelle-de-hz-fal-stream05-cluster01.radiohost.de/lwro_mp3-192"},{"Name":"Deutsche Welle","Url":"http://landeswelle-de-hz-fal-stream09-cluster01.radiohost.de/lwdemp3-192"},{"Name":"Grill Welle","Url":"http://landeswelle-de-hz-fal-stream06-cluster01.radiohost.de/lwgrmp3-128"}],"Volume":0.01}', { flag: 'wx' }, function (err, data) { })
			}
		});
    }

    start(){
        var fs = require('fs');
        var Sender = [];
        var index = 0;
        var aPlayer;
        var currentProgram = 0;
        var addbool = true;
       
		function readTextFile(file, callback) {
			let filepath = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'] + file;
			callback(fs.readFileSync(filepath));
        };
        
        function saveTextFile(value, file) {
			let filepath = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'] + file;
			fs.writeFileSync(filepath, value, function (err) {
				if (err) {
					console.log(err);
				}
			});
        }

        function addHover(requestElement, Color){
            $(requestElement).hover(function(){
                    $(this).css({"transform": "scaleY(1.1)","background": "#"+ Color})
                },
                function(){
                    $(this).css({"transform": "scaleY(1.0)","background": "white"})
            });
        }

        readTextFile("\\AppData\\Roaming\\BetterDiscord\\plugins\\Radio.config.json", (text)=>{
            settings = JSON.parse(text);
            settings.Radios.forEach(Radio => {
                Sender.push(Radio);
            });
        });

        setInterval(erstellen,1000);
      
        function erstellen (){
            if($(".toolbar-1t6TWx.da-toolbar").length && !$("#Radio").length){
        var wrapper = $("<div>", {
            "tabindex":"0",
            "id":"Radio",
            "class":"iconWrapper-2OrFZ1 clickable-3rdHwn da-iconWrapper da-clickable",    
            "playing":false,
            "role":"button",
            "aria-label":Sender[index].Name,
     
        }).insertBefore($(".toolbar-1t6TWx.da-toolbar"));
        
        var svg = $("<svg>", {
            "html":"📻",
            "x":"0",
            "y":"0",
            "name":"Radio",
            "class":"icon-22AiRD da-icon",
            "aria-hidden":"false",
            "width":"24",
            "height":"24",
            "viewBox":"0 0 24 24",
            css:{
                "opcity":"0.2",
                "font-size":"24px",
                "color":"#dcddde"
            }
        }).appendTo(wrapper);


        $(wrapper).mousedown(function(event){
            if(event.which==1){
                if($(wrapper).prop("playing")==false){
                    $(wrapper).prop("playing",true);

                    aPlayer = new Audio(Sender[index].Url);
                    aPlayer.volume  = settings.Volume;
                    aPlayer.play();
                    console.log("PLAY")

                }else{
                    $(wrapper).prop("playing",false);
                
                    aPlayer.pause();
                    aPlayer.src = "";
             
                    console.log("PAUSE")
                }
            }
            
            if(event.which==2){
                console.log(index);
                index++;
                if(index > Sender.length-1)index = 0;

                $(".title-29uC1r.da-title.base-1x0h_U.da-base.size16-1P40sf").html(settings.Radios[index].Name);

                if($(wrapper).prop("playing")==true){  
                    aPlayer.pause();
                    aPlayer.src = ""; 
                    aPlayer = new Audio(Sender[index].Url);
                    aPlayer.volume  = settings.Volume;
                    aPlayer.play();
                }
            }

            if(event.which==3){
                if ($(".RadioSettings").length) {
                    $(".RadioSettings").remove();

                }else{
                var cssstyle = {
                    "position": "relative",
                    "width": "80%",
                    "height": "25px",
                    "font-size": "20px",
                    "margin": "5px 10%",
                    "text-align": "center",
                    "transition": "all 1s",
                }
               
                console.log("CREATE")
                        var RadioSettings = $("<div>", {
                            'class': "RadioSettings",
                            "hidden": "true",
                            css: {
                                "position": "absolute",
                                "width": "50%",
                                "height": "auto",
                                "top": "20%",
                                "left": "25%",
                                "font-size": "10px",
                                "background-color": "rgba(213, 254, 253,0.5)",
                                "background-image": "linear-gradient(315deg, rgba(213, 254, 253,0.8) 0%, #rgba(255, 252, 255,0.8) 74%)",
                                "border-radius": "50px",
                                "padding-top": "10px",
                                "z-index":"10",
                                "padding-bottom": "10px"                              
                            }
                        }).insertAfter("body");

                        $(RadioSettings).first().fadeIn("slow");

                        $(RadioSettings).keydown(function (e) {
                            if (e.which == 27) $(RadioSettings).remove();

                        });

                        var RadioIndexP = $("<p>", {
                            'class': "RadioIndexP",
                            'html': "Index of Radiostation",
                            css: cssstyle
                        }).appendTo(RadioSettings);

                        var RadioIndexInput = $("<input>", {
                            'type': "number",
                            'min': 0,
                            'max': settings.Radios.length - 1,
                            'val': 0,
                            'class': "RadioIndexInput",
                            css: cssstyle
                        }).appendTo(RadioSettings);

                        var RadioNameP = $("<p>", {
                            'class': "RadioNameP",
                            'html': "Name of Radio",
                            css: cssstyle
                        }).appendTo(RadioSettings);

                        var RadioNameInput = $("<input>", {
                            'class': "RadioNameInput",
                            'val': settings.Radios[currentProgram].Name,
                            css: cssstyle
                        }).appendTo(RadioSettings);

                        var RadioPathP = $("<p>", {
                            'class': "RadioPathP",
                            'html': "URL of Radio Stream",
                            css: cssstyle
                        }).appendTo(RadioSettings);

                        var RadioPathInput = $("<input>", {
                            'class': "RadioPathInput",
                            'val': settings.Radios[currentProgram].Url,
                            css: cssstyle
                        }).appendTo(RadioSettings);

                        var RadioDeleteButton = $("<button>", {
                            'html': "DELETE",
                            'class': "RadioDeleteButton",
                            css: cssstyle
                        }).appendTo(RadioSettings);

                        addHover(RadioDeleteButton,"ff6347");

                        var RadioAddButton = $("<button>", {
                            'html': "Add",
                            'class': "RadioAddButton",
                            css: cssstyle
                        }).appendTo(RadioSettings);

                        addHover(RadioAddButton,"90ee90");

                        var RadioSaveButton = $("<button>", {
                            'html': "Change",
                            'class': "RadioSaveButton",
                            css: cssstyle
                        }).appendTo(RadioSettings);

                        addHover(RadioSaveButton,"90ee90");

                        var RadioBackButton = $("<button>", {
                            'html':"Back",
                            'class':"RadioBackButton",
                            css: cssstyle
                        }).appendTo(RadioSettings);

                        addHover(RadioBackButton,"7ff7ff");

                        $(RadioIndexInput).bind('input', function () {
                            currentProgram = $(".RadioIndexInput").val();
                            $(".RadioNameInput").val(settings.Radios[currentProgram].Name);
                            $(".RadioPathInput").val(settings.Radios[currentProgram].Url);
                        });

                        $(RadioDeleteButton).click(function () {
                            settings.Radios.splice(currentProgram, 1);
                            $(this).html("DELETE ✔");
                            var Jsontext = JSON.stringify(settings);
                            saveTextFile(Jsontext, "\\AppData\\Roaming\\BetterDiscord\\plugins\\Radio.config.json");
                            Sender = null;
                            Sender = [];
                            settings.Radios.forEach(Radio => {
                                Sender.push(Radio);
                            });
                            $(RadioSettings).remove();
                           
                            currentProgram = 0;
                        });

                        $(RadioAddButton).click(function () {
                            
                            if (addbool) {
                                
                                $(".RadioIndexInput").val(settings.Radios.length);
                                $(".RadioAddButton").html("Click again to save");
                                $(".RadioNameInput").val("");
                                $(".RadioPathInput").val("");
                                $(".RadioIconInput").val("");
                                addbool = false;
                                $(RadioDeleteButton).attr("disabled",true);
                                $(RadioSaveButton).attr("disabled",true);
                             

                            } else {
                                $(this).html("SAVED ✔");
                                settings.Radios.push({
                                    "Name": $(".RadioNameInput").val(),
                                    "Url": $(".RadioPathInput").val(),

                                })
                                Sender = null;
                                Sender = [];
                                settings.Radios.forEach(Radio => {
                                    Sender.push(Radio);
                                });

                                addbool = true;
                                var Jsontext = JSON.stringify(settings);
                                saveTextFile(Jsontext, "\\AppData\\Roaming\\BetterDiscord\\plugins\\Radio.config.json");
                            }
                        });

                        $(RadioSaveButton).click(function () {
                            settings.Radios[currentProgram].Name = $(".RadioNameInput").val();
                            settings.Radios[currentProgram].Url = $(".RadioPathInput").val();
                            $(this).html("CHANGED ✔");
                            Sender = null;
                            Sender = [];
                            settings.Radios.forEach(Radio => {
                                Sender.push(Radio);
                            });
                            var Jsontext = JSON.stringify(settings);
                            saveTextFile(Jsontext, "\\AppData\\Roaming\\BetterDiscord\\plugins\\Radio.config.json");
                            currentProgram = 0;
                        });

                        $(RadioBackButton).click(function(){
                            RadioSettings.remove();
                        });
                    }
            }

        });
        document.getElementById("Radio").addEventListener("wheel", MouseWheelHandler, false);
		function MouseWheelHandler(e) {		
				var e = document.body.event || e;
                var dd = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))) /  100;
           
                settings.Volume = settings.Volume + dd;
                if(settings.Volume<0)settings.Volume=0;
                if(settings.Volume>1)settings.Volume=1;
                console.log(settings.Volume)
                aPlayer.volume  = settings.Volume;
                let jsonsettings = JSON.stringify(settings);
                saveTextFile(jsonsettings,"\\AppData\\Roaming\\BetterDiscord\\plugins\\Radio.config.json");
			return false;
		}
    }
    }    
}
    stop(){

    }
}
