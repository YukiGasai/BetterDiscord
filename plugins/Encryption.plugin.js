/**
 * @name Encryption
 * @authorId 262613777357209601
 * @source https://github.com/YukiGasai/BetterDiscord/blob/master/plugins/Encryption.plugin.js
 */


var EncryptionIntervall1;
var EncryptionIntervall2;

module.exports = class Encryption {

  getSettingsPanel () {
    var fs = require('fs'); 
    var html = fs.readFileSync(BdApi.Plugins.folder + '\\Encryption.settings.html','utf8');
    return html;
  }

  getName() {
    return "Encryption";
  }

  getDescription() {
    return "Encrypt Messages";
  }

  getVersion() {
    return "2.0.0";
  }

  getAuthor() {
    return "L7Yuki Gasai";
  }

  //legacy
  load() {}

  start() {  

    var KEY;
    KEY = BdApi.loadData("Encryption","KEY");
    if(KEY == undefined)BdApi.saveData("Encryption","KEY","Change ME");
    KEY = BdApi.loadData("Encryption","KEY");

    $("<script>", {
      src:"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js"
    }).appendTo($("head"));

    function addListeners() {

      if ($(".toolbar-2bjZV7.da-toolbar").length && !$("#MEINBUTTON3").length){

            var Base = $('.toolbar-2bjZV7.da-toolbar');
      
            var Button = $("<button>", {
              id: "MEINBUTTON3",
              style: "width=100px",
              type : "button",
              class: "button-qqmJ7w da-button button-38aScr da-button lookFilled-1Gx00P inactive-3i9Q2Q da-inactive hover-28QbSq da-hover grow-q77ONN da-grow hasHover-3X1-zV da-hasHover"
            }).appendTo($(".toolbar-2bjZV7.da-toolbar"));
      
            var Div = $("<div>", {
              id: "MEINDIV3",
              class: "contents-18-Yxp da-contents buttonInner-3shTxu da-buttonInner"
            }).appendTo($("#MEINBUTTON3"));
      
            var Svg = $("<img>", {
              id: "MEINSVG3",
              viewBox: "0 0 24 24",
              class: "icon-KgGMGo da-icon",
              width: 24,
              height: 24,
              style:" text-align: center;  margin-left: auto; margin-right: auto;width: 50%;",
              alt:"",
              src : "https://cdn.worldvectorlogo.com/logos/lets-encrypt-icon.svg"
            }).appendTo($("#MEINBUTTON3"));




          $("#MEINBUTTON3").click(function() {
         
            let text =  window.getSelection().toString()
                  var ciphertext = CryptoJS.AES.encrypt(text, KEY);

            document.execCommand("insertText", false, "$$" +ciphertext.toString() + "$$");
          });
        }
    }

    function binden() {
   
        $('div[id^=chat-messages-] > div.contents-2mQqc9.da-contents > div.markup-2BOw-j.da-markup.messageContent-2qWWxC.da-messageContent ').each(function (){
          $(this).off('click').on('click', function (e){
            var changes = false;
            var FULLTEXT = e.target.innerText;
            while(FULLTEXT.indexOf("$$") > -1){
              changes = true;
              var Index1 = FULLTEXT.indexOf('$$')
              var Index2 = FULLTEXT.indexOf('$$', Index1+2)
              if(Index1 == -1 || Index2 == -1) {
                break;
              }
  
              var cryptext = FULLTEXT.substring(Index1+2, Index2)
              var bytes = CryptoJS.AES.decrypt(cryptext, KEY);
              var plaintext = bytes.toString(CryptoJS.enc.Utf8);
            
              FULLTEXT = FULLTEXT.replace(/\$\$.*\$\$/,plaintext);
            }
            if(changes){
              e.target.innerText = FULLTEXT;
            }
          });
        });
    }

    EncryptionIntervall1 = setInterval(binden, 1000);
    EncryptionIntervall2 = setInterval(addListeners, 100);

  }

  stop() {
    clearInterval(EncryptionIntervall1);
    clearInterval(EncryptionIntervall2);

    $('div[id^=chat-messages-] > div.contents-2mQqc9.da-contents > div.markup-2BOw-j.da-markup.messageContent-2qWWxC.da-messageContent ').each(function (){
      $(this).off('click');
    })
  }
}
