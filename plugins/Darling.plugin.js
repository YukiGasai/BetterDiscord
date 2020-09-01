//META{"name":"Darling"}*//

class Darling {

getSettingsPanel () {
	return "<h3>Rightclick on 02 to change her volume</h3>";
};

getName () {return "Darling";}

getDescription () {return "For 02 Fans";}

getVersion () {return "0.0.2";}

getAuthor () {return "L7Yuki Gasai";}

load () {
    var fs = require('fs');
    var filepath = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'] + "\\AppData\\Roaming\\BetterDiscord\\plugins\\Darling.config.json";

    fs.exists(filepath, function (exists) {
        if(!exists){	
            fs.writeFileSync(filepath, '{"vol":"69","url":"https://minatobot.000webhostapp.com/Darling/","amount":"24","img":"https://i.imgur.com/MdCJUZz.png"}', {flag: 'wx'}, function (err, data){}) 
        }
    });
}

start () {
    var fs = require('fs');
    var settings;

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

    readTextFile("\\AppData\\Roaming\\BetterDiscord\\plugins\\Darling.config.json",function(text){
        settings = JSON.parse(text);
        console.log("Loaded 02 VOICE");
        console.log(settings);
    });

    $('head').append('<style class="z2style" type="text/css">.homeIcon-tEMBK1.da-homeIcon{display: none;}.wrapper-1BJsBx[aria-label=Home]{background-image:url('+ settings.img+');background-size:contain}.childWrapper-anI2G9.da-childWrapper{background:transparent}.wrapper-1BJsBx.selected-bZ3Lue .childWrapper-anI2G9, .wrapper-1BJsBx:hover .childWrapper-anI2G9 {background:transparent}</style>');

    var box =  $(".listItem-2P_4kh.da-listItem").first();
    var max  = settings.amount;
    var audios = []; 
    for(var i = 0; i<max; i++){
        audios.push(new Audio(settings.url + i + ".mp3"));
    }

    box.mousedown(function(event) {
        if (event.which == 3) {
            if($(".contextdiv").length){
                $(".contextdiv").remove();
            }else{
                var contextdiv = $("<div>", {
                    'class': "contextdiv",
                    "hidden":"true",
                    css: {
                        "position": "absolute",
                        "width":"auto",
                        "height":"auto",
                        "top":"2%",
                        "left":"5%",
                        "background-color":"rgba(213, 254, 253,1)",
                        "background-image":"linear-gradient(315deg, rgba(213, 254, 253,0.8) 0%, #rgba(255, 252, 255,0.8) 74%)",
                        "border-radius":"10px",
                        "padding-top":"50px 50px",
                        "z-index":10,
                    }
                }).insertAfter("body");
 
                $(contextdiv).first().fadeIn("slow");

                var z2VolP = $("<p>",{
                    "html":"VOLUME OF 02 " + settings.vol,
                    css :{
                        "text-align":"center",
                        "font-size":"15px"
                    }
                }).appendTo($(contextdiv));

                var z2VolInput = $("<input>",{
                    "val": settings.vol,
                    "type":"range",
                    "html":"VOLUME OF 02",
                }).appendTo($(contextdiv));

                $(z2VolInput).on('change',function(){
                    audios.forEach(aud =>{
                        aud.volume = z2VolInput.val()/100;
                    })
                    audios[0].play()
                    $(z2VolP).html("VOLUME OF 02 "+ z2VolInput.val());
                    settings.vol = z2VolInput.val();
                    var jsonContent  = JSON.stringify(settings);
                    saveTextFile(jsonContent,"\\AppData\\Roaming\\BetterDiscord\\plugins\\Darling.config.json");
                });
            }
        }
        audios[Math.floor(Math.random() * (max))].play();
    });
}

initialize(){}
	
stop(){}

}