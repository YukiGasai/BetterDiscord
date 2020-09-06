/**
 * @name Darling
 * @authorId 262613777357209601
 * @source https://github.com/YukiGasai/BetterDiscord/blob/master/plugins/Darling.plugin.js
 */

module.exports = class Darling {

getSettingsPanel () {
    const fs = require('fs'); 
    const path = require('path');
    let html = fs.readFileSync( path.join(BdApi.Plugins.folder,'Darling.settings.html'),'utf8');
    return html;
}

getName () {return "Darling";}

getDescription () {return "For 02 Fans";}

getVersion () {return "0.0.2";}

getAuthor () {return "L7Yuki Gasai";}

load () {}

start () {
    var DarlingSettings = {
        Url : "https://minatobot.000webhostapp.com/Darling/",
        Amount : 24,
        Volume : 69,
        Img : "https://i.imgur.com/MdCJUZz.png"
    }

    function UpdateSettingsSmart(Key,Value)
    {
        DarlingSettings[Key] = BdApi.loadData("Darling",Key);
        if(DarlingSettings[Key] == undefined)BdApi.saveData("Darling",Key,  Value);
        DarlingSettings[Key] = BdApi.loadData("Darling",Key);
    }

    UpdateSettingsSmart("Url", "https://minatobot.000webhostapp.com/Darling/");
    UpdateSettingsSmart("Amount", 24);
    UpdateSettingsSmart("Volume", 69);
    UpdateSettingsSmart("Img", "https://i.imgur.com/MdCJUZz.png");

    $('head').append('<style class="z2style" id="MyShitCSS" type="text/css">.homeIcon-tEMBK1.da-homeIcon{display: none;}.wrapper-1BJsBx[aria-label=Home]{background-image:url('+DarlingSettings.Img+');background-size:contain}.childWrapper-anI2G9.da-childWrapper{background:transparent}.wrapper-1BJsBx.selected-bZ3Lue .childWrapper-anI2G9, .wrapper-1BJsBx:hover .childWrapper-anI2G9 {background:transparent}</style>');

    var box =  $(".listItem-2P_4kh.da-listItem").first();
    var audios = []; 
    for(var i = 0; i<DarlingSettings.Amount; i++){
        audios.push(new Audio(DarlingSettings.Url + i + ".mp3"));
        
    }

    box.off('mousedown').on('mousedown', function(event) {
        let rand = Math.floor(Math.random() * (DarlingSettings.Amount));

        audios[rand].volume = BdApi.loadData("Darling","Volume")/100;
        audios[rand].play();
    });
}

    initialize(){}
    
    stop(){
        $(".listItem-2P_4kh.da-listItem").first().off('mousedown');
        $("head > #MyShitCSS").remove();
    }

}