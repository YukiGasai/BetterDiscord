//META{"name":"CleanUp","version":"1.6.0"}*//

class CleanUp{
	constructor () {}

	getName () {return "CleanUp";}

	getDescription () {return "CleanUp";}

	getVersion () {return "1.6.0";}

	getAuthor () {return "Yuki Gasai";}
	
	//legacy
    load(){
        var fs = require('fs');
        const request = require('request');
	var filepath1 = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'] + "\\AppData\\Roaming\\BetterDiscord\\plugins\\CleanUp.config.json";
        var jspath    = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'] + "\\AppData\\Roaming\\BetterDiscord\\plugins\\CleanUp.plugin.js";

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
		request("https://raw.githubusercontent.com/YukiGasai/BetterDiscord/master/plugins/CleanUp.plugin.js",(err, res, body)=>{
			var searchstring = `"version":"`;
			var startindex = body.indexOf(searchstring)+ searchstring.length;
			var stopindex = body.indexOf(`"`,startindex);
			var version = body.substring(startindex,stopindex);
			console.log(this.getName() + "---  New Version:" + version+ "\nCurrentVersion:" +this.getVersion());
			if(isNewerVersion(this.getVersion(),version)){
				fs.writeFileSync(jspath,body,{encoding:'utf8',flag:'w'})
			}
		});




        fs.exists(filepath1, function (exists) {
			if(!exists){	
				fs.writeFileSync(filepath1, '{"Servers":[]}', {flag: 'wx'}, function (err, data){}) 
			}
		});
    }
    
    start(){
        var fs = require('fs');
        var settings;
        var serverlist = $(".scroller-2FKFPG.firefoxFixScrollFlex-cnI2ix.systemPad-3UxEGl.scroller-2TZvBN.da-scroller.da-firefoxFixScrollFlex.da-systemPad");
        var servers = $(".listItem-2P_4kh.da-listItem");
        var keys = [];
        var secbool = true;
        function readTextFile(file, callback) {
			let filepath = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'] + file;
			callback(fs.readFileSync(filepath));
		};
		
		function saveTextFile (value, file){
			let filepath = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'] + file;
			fs.writeFileSync(filepath, value, function(err) {
				if (err) {
					console.log(err);
				}
			});
		}
	
		readTextFile("\\AppData\\Roaming\\BetterDiscord\\plugins\\CleanUp.config.json",function(text){
			settings = JSON.parse(text);
			settings.Servers.forEach(Server => {
             
			});
		});


    function erstellen (){
       
        if(serverlist.length && !serverlist.hasClass("added")){
            serverlist.addClass("added");
            document.body.addEventListener("keydown",function(e){
                keys[e.keyCode] = true; 
                if (keys[17] && keys[16] && keys[190]) {
                    if(secbool)secbool=false;
                    else secbool = true;
                }
                
            });
            document.body.addEventListener("keyup",function(e){keys[e.keyCode] = false;});
         
                
            servers.each(function(index){
                        
                $(this).mousedown(function(){
                    var Name =  $(this).find(".wrapper-1BJsBx.da-wrapper").attr("aria-label");
                    var found = false;
                    for(var i = 0; i < settings.Servers.length; i++) {
                        if (settings.Servers[i].Name == Name) {
                            found = true;
                            break;
                        }
                    }
                    if(keys[46]){               
                       if(found == false){
                            console.log(Name + " wurde hinzugefügt")
                            settings.Servers.push({
                                "Name": Name
                            });
                            var jsonObj = JSON.stringify(settings);
                            saveTextFile(jsonObj,"\\AppData\\Roaming\\BetterDiscord\\plugins\\CleanUp.config.json")
                       }
                    }
                    if(keys[27]){
                 
                       if(found){
                        console.log(Name + " wurde entfernt")
                            var index = settings.Servers.indexOf({"Name": Name});
                            settings.Servers.splice(index,1);
                            var jsonObj = JSON.stringify(settings);
                            saveTextFile(jsonObj,"\\AppData\\Roaming\\BetterDiscord\\plugins\\CleanUp.config.json")
                       }
                    }
                });

            });
        }
       
        if(secbool){
            for(var i = 0; i < settings.Servers.length; i++){
                if(!$("[aria-label*='"+settings.Servers[i].Name+"']").parent().parent().parent().parent().parent().is(":hidden"))
                $("[aria-label*='"+settings.Servers[i].Name+"']").parent().parent().parent().parent().parent().hide();
            }
        }else{
            for(var i = 0; i < settings.Servers.length; i++){
                if($("[aria-label*='"+settings.Servers[i].Name+"']").parent().parent().parent().parent().parent().is(":hidden"))
                $("[aria-label*='"+settings.Servers[i].Name+"']").parent().parent().parent().parent().parent().show();
            }
        }

        var d =  $('.membersGroup-v9BXpm.da-membersGroup').last().html();
        if($('.membersGroup-v9BXpm.da-membersGroup').last().nextAll().is(":visible") && d.indexOf("Offline") >= 0){
            $('.membersGroup-v9BXpm.da-membersGroup').last().nextAll().hide();
        }

        var ServerError =  $('.anchor-3Z-8Bb.anchorUnderlineOnHover-2ESHQB.guildsError-b7zR5H.da-anchor.da-anchorUnderlineOnHover.da-guildsError');
        if($(ServerError).is(":visible")){
            $(ServerError).hide();
            console.log("Hide Server Error")
        } 


    }


        setInterval(erstellen,1000);

    }

    stop(){}
}
