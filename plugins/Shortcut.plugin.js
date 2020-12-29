/**
 * @name Shortcut
 * @authorId 262613777357209601
 * @source https://github.com/YukiGasai/BetterDiscord/blob/master/plugins/Shortcut.plugin.js
 */
var Programs;

function createShortcuts()
{
    const fs = require('fs')
    var exec = require('child_process').execFile;
    function startexe(filepath) {
        exec(filepath, function (err, data) {
            console.log(err)
            console.log(data.toString());
        });
    }

    var Main = document.querySelector(".members-1998pB.da-members.thin-1ybCId.scrollerBase-289Jih.fade-2kXiP2");
    var Container = document.getElementById("ShortcutContainer");
    if (!Container && Main) {
    
        const cssText = `
            .ShortcutButton{
                z-index : 10;
                position : relative;
                opacity : 0.5;
                width : 50px;
                height : 50px;
                border-radius : 50%;
                margin-right : 5px;
                margin-top : 5px;
                background-size: cover;
                transition : all 0.4s ease-in-out;
            }
            .ShortcutButton:hover{
                opacity : 1;
                transform : scale(1.1);
            }
        `;
        BdApi.injectCSS("ShortcutStyle", cssText);
        
        var ShortcutContainer = document.createElement("div");
        ShortcutContainer.id = "ShortcutContainer";
        Main.insertBefore(ShortcutContainer, Main.firstChild);
        for (var i = 0; i < Programs.length; i++) {
            var Link = document.createElement("button");
            Link.id = i;
            Link.className = "ShortcutButton";
            Link.style.backgroundImage = 'url("' + Programs[i].Icon + '")';
        
            Link.addEventListener("click", function (event) {
                var index = event.target.id;
                index = parseInt(index, 10);
                var exepath = Programs[index].Path;
                exepath = exepath.replace("\"","");
                if (exepath.includes("http")) {
                    window.open(exepath);
                } else {
                    fs.exists(exepath, function (exists) {
                        if (exists) {
                            startexe(exepath);
                        }else{
                            console.log(exepath)
                            BdApi.alert("Shortcut",`The selected Path *${Programs[index].Path}* for  **${Programs[index].Name}** is not valid`)
                        }
                    })
                }
            });
            ShortcutContainer.appendChild(Link);  
        }
    }
}


module.exports = class Shortcut {


    getSettingsPanel () {
        const fs = require('fs'); 
        const path = require('path');
		let html = fs.readFileSync( path.join(BdApi.Plugins.folder,'Shortcut.settings.html'),'utf8');
        return html;
    };


    getName() { return "Shortcut"; }

    getDescription() { return "Creates Shortcuts to start Programs"; }

    getVersion() { return "1.0.7"; }

    getAuthor() { return "L7Yuki Gasai"; }

    //legacy
    load() {}

    start() {
        //CREATES SETTINGS FILE
        Programs = BdApi.loadData("Shortcut","Programs");
        if(Programs == undefined)BdApi.saveData("Shortcut","Programs",[{"Id":1,"Name":"Osu!","Path":"C:\\\\Users\\\\Richard\\\\AppData\\\\Local\\\\osu!\\\\osu!.exe","Icon":"https://upload.wikimedia.org/wikipedia/commons/6/65/Osu%21Logo_%282015%29.svg"},{"Id":2,"Name":"Rocket League","Path":"E:\\\\Games\\\\SteamLibrary\\\\steamapps\\\\common\\\\rocketleague\\\\Binaries\\\\Win32\\\\RocketLeague.exe","Icon":"https://i.dlpng.com/static/png/4988652_thumb.png"},{"Id":3,"Name":"Twitter","Path":"https://twitter.com/home?lang=de","Icon":"https://www.yoyochinese.com/images/webpage/front/footer/Twitter-ICON.svg"},{"Id":4,"Name":"YouTube","Path":"https://www.youtube.com/?hl=de&gl=DE","Icon":"https://static.getjar.com/icon-50x50/ae/853366_thm.png"},{"Id":5,"Name":"Whats App","Path":"https://web.whatsapp.com/","Icon":"https://static.getjar.com/icon-50x50/b9/847775_thm.png"},{"Id":6,"Name":"Twitch","Path":"https://www.twitch.tv/","Icon":"https://static.getjar.com/icon-50x50/e7/861632_thm.jpg"}]);
        Programs = BdApi.loadData("Shortcut","Programs");

        createShortcuts();

    }

    onSwitch(){ 
        createShortcuts();
    }
    
    stop() { 

        BdApi.clearCSS("ShortcutStyle");
        let Container = document.getElementById("ShortcutContainer");
        if(Container)
        {
            Container.remove();
        }

    }
    observer() {}
}
