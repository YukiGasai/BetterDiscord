//META{"name":"BlackList"}*//

class BlackList {
    
    getName () {return "BlackList";}
    
    getDescription () {return "For ignorining People who ignore you";}
    
    getVersion () {return "1.0.0";}
    
    getAuthor () {return "L7Yuki Gasai";}
    
    load () {}
    
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
    
        readTextFile("\\AppData\\Roaming\\BetterDiscord\\plugins\\BlackList.config.json",function(text){
            settings = JSON.parse(text);
        });
        
function checkForClear(){
        //Hides from friendlist
        $( ".username-2b1r56.da-username.username-31C1TQ.da-username" ).each(function( index ) {
            for(var i = 0; i < settings.People.length; i++){
                if($( this ).text()==settings.People[i].Name){
                    $( this ).parent().parent().parent().parent().parent().hide() 
                }
            }
        });
        //hides from Direct Messages
        $( ".name-uJV0GL.da-name" ).each(function( index ) {
            for(var i = 0; i < settings.People.length; i++){
                if($( this ).text()==settings.People[i].Name){
                    $( this ).parent().parent().parent().parent().hide() 
                }
            }
        });

        $( ".textContent-3N7xXx.da-textContent.base-1x0h_U.da-base.size16-1P40sf" ).each(function( index ) {
            
            for(var i = 0; i < settings.People.length; i++){
                if($( this ).text()==settings.People[i].Name){
                    $( this ).parent().parent().parent().parent().hide();
                }
            }
            
            var childs = $(this).children(); 
            for (var k = 0; k < childs.length; k++){
                for(var i = 0; i < settings.People.length; i++){
                    if($(childs[k]).text()==settings.People[i].Name){
                        $(this).parent().parent().parent().parent().hide() ;
                    }
                }
            }
        });
		
		
		
		
		//$(".scroller-2FKFPG.da-scroller.systemPad-3UxEGl.da-systemPad.scroller-2TZvBN.da-scroller").show();
		
		
		
		
		
		
        setTimeout(checkForClear, 1000);
    }

    checkForClear();

        


    }
    
    initialize(){}
        
    stop(){}
    
}