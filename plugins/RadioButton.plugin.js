/**
 * @name RadioButton
 * @authorId 262613777357209601
 * @source https://github.com/YukiGasai/BetterDiscord/blob/master/plugins/RadioButton.plugin.js
 */

var RadioSettingsConfig = {
    Radios : [],
    Volume : 0
}
var index = 0;
var Playing = false;
var aPlayer;
module.exports = class RadioButton {

    getSettingsPanel () {
        const fs = require('fs'); 
        const path = require('path');
		let html = fs.readFileSync( path.join(BdApi.Plugins.folder,'RadioButton.settings.html'),'utf8');
        return html;
    };

	getName() { return "RadioButton"; }

	getDescription() { return "RadioButton"; }

	getVersion() { return "1.1.1"; }

	getAuthor() { return "L7Yuki Gasai"; }

	//legacy
    load() { 	
    }

    start(){

        RadioSettingsConfig.Radios = BdApi.loadData("RadioButton", "Radios");
        if(RadioSettingsConfig.Radios == undefined)
            BdApi.saveData("RadioButton", "Radios", {"Radios":[{"Id":1,"Name":"MDR Info","Url":"https:\/\/mdr-edge-205e-fra-lg-cdn.cast.addradio.de\/mdr\/aktuell\/live\/mp3\/128\/stream.mp3?_art=dj0yJmlwPTkxLjEzNy42My4xNDgmaWQ9aWNzY3hsLWd5NHQyeGFuYiZ0PTE1OTc1MzY0NzMmcz03ODY2ZjI5YyM4ZjVjNDU4NTFmMTk0ZTIxNjdiOGI2NGYzN2QyM2I4MA"},{"Id":2,"Name":"MDR Th\u00fcringen","Url":"https:\/\/mdr-edge-2060-fra-lg-cdn.cast.addradio.de\/mdr\/mdrthueringen\/live\/mp3\/128\/stream.mp3?_art=dj0yJmlwPTkxLjEzNy42My4xNDgmaWQ9aWNzY3hsLWdjMjYzcWJuYiZ0PTE1OTc1MzY1OTMmcz03ODY2ZjI5YyM2ZjM1Y2MzMzMzOWU1ZWI4MWM0ODY2NmNkYWJhOTFhZA"},{"Id":3,"Name":"Landeswelle Th\u00fcringen","Url":"http:\/\/landeswelle-de-hz-fal-stream06-cluster01.radiohost.de\/lwtmp3-192"},{"Id":4,"Name":"Landes Oldie Welle","Url":"http:\/\/landeswelle-de-hz-fal-stream01-cluster01.radiohost.de\/lwol_mp3-192"},{"Id":5,"Name":"Landes Rock Welle","Url":"http:\/\/landeswelle-de-hz-fal-stream05-cluster01.radiohost.de\/lwro_mp3-192"},{"Id":6,"Name":"Deutsche Welle","Url":"http:\/\/landeswelle-de-hz-fal-stream09-cluster01.radiohost.de\/lwdemp3-192"},{"Id":7,"Name":"Grill Welle","Url":"http:\/\/landeswelle-de-hz-fal-stream06-cluster01.radiohost.de\/lwgrmp3-128"}],"Volume":0.5});
        RadioSettingsConfig.Radios = BdApi.loadData("RadioButton", "Radios");
         
            RadioSettingsConfig.Volume = BdApi.loadData("RadioButton", "Volume");
        if(RadioSettingsConfig.Volume == undefined)
            BdApi.saveData("RadioButton", "Volume", 0.5);
        RadioSettingsConfig.Volume = BdApi.loadData("RadioButton", "Volume"); 
      
    }

    onSwitch()
    {
        var RadioCheck = document.getElementById("Radio");
        if(!RadioCheck){

            var Main = document.querySelector(".toolbar-1t6TWx.da-toolbar");

            var RadioWrapper = document.createElement("div");
                RadioWrapper.tabIndex = 0;
                RadioWrapper.id = "Radio";
                RadioWrapper.clas = "iconWrapper-2OrFZ1 clickable-3rdHwn da-iconWrapper da-clickable";

            Main.insertBefore(RadioWrapper, Main.firstChild);

            var RadioName = document.createElement("span");
                RadioName.innerText = RadioSettingsConfig.Radios[index].Name;
                RadioName.style.color = "#fff";
                if(Playing) RadioName.style.fontWeight = "bold";    
            RadioWrapper.appendChild(RadioName);

            var RadioImage = document.createElement("span");
                RadioImage.innerText = "📻";
                RadioImage.style.fontSize = "25px";
            RadioWrapper.appendChild(RadioImage);

            var RadioVol = document.createElement("span");
            RadioVol.innerText = "";
            RadioVol.style.color = "#fff";
            RadioWrapper.appendChild(RadioVol);

            RadioImage.addEventListener("click", ()=>{
                if(Playing === false){
                    Playing = true;
                    aPlayer = new Audio(RadioSettingsConfig.Radios[index].Url);
                    RadioName.style.fontWeight = "bold";
                    aPlayer.volume  = RadioSettingsConfig.Volume;
                    aPlayer.play();
                }else{
                    Playing = false;
                    aPlayer.pause();
                    aPlayer.src = "";
                    RadioName.style.fontWeight = "normal";
                }
            });

            RadioName.addEventListener("click", ()=>{
 
                index++;
                if(index > RadioSettingsConfig.Radios.length-1)index = 0;
                RadioName.innerText = RadioSettingsConfig.Radios[index].Name;
                if(Playing){  
                    aPlayer.pause();
                    aPlayer.src = ""; 
                    aPlayer = new Audio(RadioSettingsConfig.Radios[index].Url);
                    aPlayer.volume  = RadioSettingsConfig.Volume;
                    aPlayer.play();
                }
    
            });

            RadioWrapper.addEventListener("wheel", MouseWheelHandler, false);
		    function MouseWheelHandler(e) {		
                    if(aPlayer == undefined)return;
		    		var e = document.body.event || e;
                    var dd = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))) /  100;
            
                    RadioSettingsConfig.Volume = RadioSettingsConfig.Volume + dd;
                    if(RadioSettingsConfig.Volume<0)RadioSettingsConfig.Volume=0;
                    if(RadioSettingsConfig.Volume>1)RadioSettingsConfig.Volume=1;

                    aPlayer.volume  = RadioSettingsConfig.Volume.toFixed(2);

                    RadioVol.innerText = Math.floor(RadioSettingsConfig.Volume*100);
                    BdApi.saveData("RadioButton", "Volume", RadioSettingsConfig.Volume);
		    	return false;
		    }
        }    
    }
    stop(){

        let RadioCheck = document.getElementById("Radio");
        if(RadioCheck){
            RadioCheck.remove();
        }

        aPlayer = null;
        var RadioSettingsConfig = {
            Radios : [],
            Volume : 0
        }

    }
}