//META{"name":"AccountChanger","version":"1.1.0"}*//

class AccountChanger {
	constructor() {
	}

	getName() { return "AccountChanger"; }

	getDescription() { return "AccountChanger"; }

	getVersion() { return "1.1.0"; }

	getAuthor() { return "L7Yuki Gasai"; }

	//legacy
    load() { 
        var fs = require('fs');
        const request = require('request');

        var jspath    = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'] + "\\AppData\\Roaming\\BetterDiscord\\plugins\\AccountChanger.plugin.js";
        var filepath1 = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'] + "\\AppData\\Roaming\\BetterDiscord\\plugins\\AccountChanger.config.json";
        
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
		request("https://raw.githubusercontent.com/YukiGasai/BetterDiscord/master/plugins/AccountChanger.plugin.js",(err, res, body)=>{
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
			if (!exists) {
				fs.writeFileSync(filepath1,'{"Accounts":[{"Name":"User1","Token":""},{"Name":"User2","Token":""}]}', { flag: 'wx' }, function (err, data) { })
			}
		});
   
    }
    
    start(){
        var fs = require('fs');
        var settings;
        var Tokens = [];
        var currToken;
        var nextToken;

        function readTextFile(file, callback) {
			let filepath = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'] + file;
			callback(fs.readFileSync(filepath));
        };
        //SOURCE https://pastebin.com/yPWZGzGB
        function login(token) {
            setInterval(() => {
            document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`
            }, 50);
            setTimeout(() => {
            location.reload();
            }, 2500);
            }
        
        var iframe = document.createElement('iframe');
        iframe.onload = function(){
            var ifrLocalStorage = iframe.contentWindow.localStorage;
            currToken = ifrLocalStorage.getItem('token').replace("\"","").replace("\"","");
        };
        iframe.src = 'about:blank';
        document.body.appendChild(iframe);
        
        readTextFile("\\AppData\\Roaming\\BetterDiscord\\plugins\\AccountChanger.config.json", (text)=>{
            settings = JSON.parse(text);
            settings.Accounts.forEach(Account => {
                Tokens.push(Account.Token);
            });
        });

        for(let i = 0; i < Tokens.length; i++){
            if(Tokens[i]==currToken){
                console.log(i)
                let index = i + 1;
                if(index > Tokens.length-1)index = 0;
                nextToken = Tokens[index];
            }
        }
    
        function addContextPoint(){
      
            if($(".menu-Sp6bN1.da-menu").length && !$(".menu-Sp6bN1.da-menu").hasClass("added")){
                var contextMenu = $(".menu-Sp6bN1.da-menu");
                $(contextMenu).addClass("added");
                
                var seperator = $("<div", {
                   "class":"separator-2zcjq8 da-separator"
                }).appendTo(contextMenu);

                var contextPoint = $("<div>",{
                    "tabindex":0,                    
                    "class":"statusItem-2uzPIV itemBase-1Qj4z6 da-statusItem da-itemBase",
                    "role":"button"
                }).appendTo(contextMenu);

                var contextPointText = $("<div>",{
                    "class":"statusIconText-3b4TkH da-statusIconText",
                }).appendTo(contextPoint);

                var contextPointSvg = $("<svg>",{
                    "width":"10",
                    "height":"10",
                    "class":"mask-1qbNWk da-mask status-3Kz6VS da-status",
                    "viewBox":"0 0 10 10"
                }).appendTo(contextPointText);

                var contextPointDiv = $("<div>",{
                    "html":"Change Account"
                }).appendTo(contextPointText);

                contextPoint.click(function(){
                    $(contextPointDiv).html("--Restarting--")
                    login(nextToken);
                });

            }

        }
        setInterval(()=>addContextPoint(),100);
    }

    stop(){}
}
