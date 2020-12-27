/**
 * @name CleanUp
 * @authorId 262613777357209601
 * @source https://github.com/YukiGasai/BetterDiscord/blob/master/plugins/CleanUp.plugin.js
 */
var keys = [];
var Serverlist;
var showOffline;
var secbool = true;


function HideServer() {
    if (secbool) {
        for (var i = 0; i < Serverlist.length; i++) {
            var target = $("[aria-label*='" + Serverlist[i].Name + "']").parent();
            if (target.parent().parent('.wrapper-25eVIn.da-wrapper').length) {

                $("[aria-label*='" + Serverlist[i].Name + "']").parent().parent().parent().hide();

            }
        }
    } else {
        for (var i = 0; i < Serverlist.length; i++) {
            var target = $("[aria-label*='" + Serverlist[i].Name + "']").parent();
            if (target.parent().parent('.wrapper-25eVIn.da-wrapper').length) {
                $("[aria-label*='" + Serverlist[i].Name + "']").parent().parent().parent().show();
            }
        }
    }
}

class CleanUp {
    constructor() {}

    getName() { return "CleanUp"; }

    getDescription() { return "CleanUp"; }

    getVersion() { return "1.7.0"; }

    getAuthor() { return "Yuki Gasai"; }

    getSettingsPanel() {
            const fs = require('fs');
            const path = require('path');
            let html = fs.readFileSync(path.join(BdApi.Plugins.folder, 'CleanUp.settings.html'), 'utf8');
            return html;
        }
        //legacy
    load() {}

    start() {
        Serverlist = BdApi.loadData("CleanUp", "Servers");
        if (Serverlist == undefined) BdApi.saveData("CleanUp", "Servers", []);
        Serverlist = BdApi.loadData("CleanUp", "Servers");

        showOffline = BdApi.loadData("CleanUp", "showOffline");
        if (showOffline == undefined) BdApi.saveData("CleanUp", "showOffline", false);
        showOffline = BdApi.loadData("CleanUp", "showOffline");

        if (!showOffline) {
            BdApi.injectCSS('CleanUpCSS', ".da-offline {display:none;}");
        } else {
            BdApi.clearCSS('CleanUpCSS');
        }


        function checkFlag() {
            if ($('.listItem-2P_4kh.da-listItem').length) {
                $(document).off('mousedown').on("keydown", function(e) {
                    keys[e.keyCode] = true;
                    // . KEY
                    if (keys[190]) {

                        secbool = !secbool;
                        console.log(secbool);
                        HideServer();
                    }
                });
                $(document).off('mousedown').on("keyup", function(e) { keys[e.keyCode] = false; });
                HideServer();
            }
        }
        window.setTimeout(checkFlag, 1000);

    }

    onSwitch() {


        var Serverdiv = $(".scroller-2TZvBN.da-scroller.none-2Eo-qx.scrollerBase-289Jih").find("[aria-controls='Servers']");

        var servers = $(".listItem-2P_4kh.da-listItem");


        HideServer();

    }

    stop() {
        for (var i = 0; i < Serverlist.length; i++) {
            var target = $("[aria-label*='" + Serverlist[i].Name + "']").parent();
            if (target.parent().parent('.wrapper-25eVIn.da-wrapper').length) {
                $("[aria-label*='" + Serverlist[i].Name + "']").parent().parent().parent().show();
            }
        }
    }

}