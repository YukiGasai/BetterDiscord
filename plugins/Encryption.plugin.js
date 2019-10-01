//META{"name":"Encryption","version":"1.0.0"}*//

class Encryption {
  constructor() {}

  getName() {
    return "Encryption";
  }

  getDescription() {
    return "Encryption";
  }

  getVersion() {
    return "1.0.0";
  }

  getAuthor() {
    return "L7Yuki Gasai";
  }

  //legacy
  load() {
    var fs = require('fs');
    var filepath1 = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'] + "\\AppData\\Roaming\\BetterDiscord\\plugins\\Encryption.config.json";

    //CREATES SETTINGS FILE
    fs.exists(filepath1, function (exists) {
        if (!exists) {
            fs.writeFileSync(filepath1, '{"KEY":"TEST"}', { flag: 'wx' }, function (err, data) { })
        }
    });
  }

  start() {  
     var fs = require('fs');
     var KEY;
     var txtarea = document.getElementsByClassName("textArea-2Spzkt da-textArea textArea-2Spzkt da-textArea scrollbarGhostHairline-1mSOM1 scrollbar-3dvm_9 da-scrollbarGhostHairline da-scrollbar");
     
     function readTextFile(file, callback) {
        let filepath = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'] + file;
        callback(fs.readFileSync(filepath));
    };
    readTextFile("\\AppData\\Roaming\\BetterDiscord\\plugins\\Encryption.config.json", function (text) {
        settings = JSON.parse(text);
        KEY = settings.KEY;
    });


    $("<script>", {
      src:"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js"
    }).appendTo($("head"));

    function addListeners() {

      if ($(".contextMenu-HLZMGh.da-contextMenu").length && !$("#MEIN3").length){
        var start  = txtarea[0].selectionStart;
        var finish = txtarea[0].selectionEnd;
        var text   = txtarea[0].value;
        if (text[finish - 1] == " ") finish--;
        var sel = txtarea[0].value.substring(start, finish);

        if (sel.length > 0) {
          var submenu2 = $("<div>", {
            id: "MEIN3",
            class: "itemGroup-1tL0uz da-itemGroup"
          }).appendTo($(".contextMenu-HLZMGh.da-contextMenu"));

          var divforColor = $("<div>",{
            tabindex: "0",
            class:"item-1Yvehc itemBase-tz5SeC da-item da-itemBase itemToggle-S7XGOQ itemBase-tz5SeC da-itemToggle da-itemBase clickable-11uBi- da-clickable",
            role: "button"
          }).appendTo($(submenu2));

          var textforColor = $("<div>", {
            html: "Encrypt",
            class: "label-JWQiNe da-label"
          }).appendTo($(divforColor));

          $(divforColor).click(function() {
            $(txtarea).select();
            let text = $(txtarea).val();
            var ciphertext = CryptoJS.AES.encrypt(text, KEY);

            document.execCommand("insertText", false, "$$" +ciphertext.toString());
          });
        }
      }
    }

    function binden() {

        $(".markup-2BOw-j.da-markup.isCompact-1hsne1.da-isCompact").each(function(index){
            $(this).mousedown(function(but){
                if(but.which==2){
                   let selText = $(this).contents().get(1).nodeValue;   
                   selText = selText.substring(2, selText.length);

                   let bytes2 = CryptoJS.AES.decrypt(selText, KEY);
                   let plaintext2 = bytes2.toString(CryptoJS.enc.Utf8)

                   if(plaintext2.replace(/^\s+|\s+$/g, '').length != 0)
                   $(this).contents().get(1).nodeValue =  plaintext2;
                }
            });
        });

        var MessageList = $(".scroller-2FKFPG.firefoxFixScrollFlex-cnI2ix.da-scroller.da-firefoxFixScrollFlex.systemPad-3UxEGl.da-systemPad.messages-3amgkR");
        if($(MessageList).length && !$(MessageList).hasClass("binded")) {
            $(MessageList).addClass("binded");

            $(".binded").on("DOMNodeInserted", function(e) {
                var rawMessages = e.target;
               
                if ($(rawMessages).hasClass("messageCompact-kQa7ES da-messageCompact")) {
                    if ($(rawMessages).children().hasClass("contentCompact-1QLHBj content-3dzVd8 da-contentCompact da-content containerCompact-3pGPJs container-206Blv da-containerCompact da-container")){
                        var TEXTDIV = $(".markup-2BOw-j.da-markup.isCompact-1hsne1.da-isCompact").last();
                        console.log("chnage");
                        var node = $(TEXTDIV).contents().filter(function() {
                            return this.nodeType == 3; 
                        });
            
                        var TEXT = node.text();
             
                        if(TEXT[0] == "$" && TEXT[1] == "$"){
                        
                            TEXT = TEXT.substring(2, TEXT.length);
                            var bytes = CryptoJS.AES.decrypt(TEXT, KEY);
                            var plaintext = bytes.toString(CryptoJS.enc.Utf8);
                            $(".markup-2BOw-j.da-markup.isCompact-1hsne1.da-isCompact").last().contents().get(1).nodeValue =  plaintext;
                        }
                    }
                }
            });
        }
    }

    setInterval(binden, 1000);
    setInterval(addListeners, 100);
  }

  stop() {}
}
