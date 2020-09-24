/**
 * @name BlackList
 * @authorId 262613777357209601
 * @source https://github.com/YukiGasai/BetterDiscord/blob/master/plugins/BlackList.plugin.js
 */
var People;
var HideM;
module.exports = class BlackList {
    
    getName () {return "BlackList";}
    
    getDescription () {return "For ignorining People who ignore you";}
    
    getVersion () {return "1.2.0";}
    
    getAuthor () {return "L7Yuki Gasai";}

	getSettingsPanel () {
		const fs = require('fs'); 
		const path = require('path');
		let html = fs.readFileSync( path.join(BdApi.Plugins.folder,'BlackList.settings.html'),'utf8');
        return html;
    };

    load () {}
    
    start () { 
        People = BdApi.loadData("BlackList","People");
        if(People == undefined)BdApi.saveData("BlackList","People",[]);
        People = BdApi.loadData("BlackList","People");

        HideM = BdApi.loadData("BlackList","HideM");
        if(HideM == undefined)BdApi.saveData("BlackList","HideM",false);
        HideM = BdApi.loadData("BlackList","HideM");

        if(HideM)
        {
            $('head').append(`
            <style id="HideM" type="text/css">
            .blockedSystemMessage-2Rk1ek {display:none;}
            </style>
            `);
        }else{
            try{
                $("#HideM").remove();
            }catch(e){};
        }


    }
    

    onSwitch()
    {
        $(".member-3-YXUe.da-member.container-2Pjhx-.da-container.clickable-1JJAn8.da-clickable").mousedown(function(event ){
            let Name = event.target.textContent;
            if(event.which == 2 && event.target.nodeName.toUpperCase() == 'SPAN' && Name.toUpperCase() != "BOT"){
                
                BdApi.showConfirmationModal("Hide away "+Name, 
                    [],
                    {
                        danger: true,
                        confirmText: "Yes",
                        cancelText: "No",
                        onConfirm :()=>{

                            for(let i=0;i<People.length;i++){

                                if(People[i].Name==Name)
                                {
                                    return;
                                }
                            }
                            People.push({"Name": Name});
                            BdApi.saveData("BlackList","People",People);
                        }
                    }
                );
            }
        });

   
        //Hides from friendlist
        $( ".username-2b1r56.da-username.username-31C1TQ.da-username" ).each(function( index ) {
            for(var i = 0; i < People.length; i++){
                if($( this ).text()== People[i].Name){
                    $( this ).parent().parent().parent().parent().parent().hide() 
                }
            }
        });
        //hides from Direct Messages
        $( ".name-uJV0GL.da-name" ).each(function( index ) {
            for(var i = 0; i < People.length; i++){
                if($( this ).text()== People[i].Name){
                    $( this ).parent().parent().parent().parent().hide() 
                }
            }
        });

        //Hide from Channel list
        $(".usernameFont-aFalyR.username-lm8y6T.da-username").each(function(index){
            for(var i = 0; i < People.length; i++){
                if($( this ).text()== People[i].Name){
                    $( this ).parent().parent().parent().hide();
                }
            }
        })


        $( ".textContent-3N7xXx.da-textContent.base-1x0h_U.da-base.size16-1P40sf" ).each(function( index ) {
            for(var i = 0; i < People.length; i++){
                if($( this ).text()== People[i].Name){
                    $( this ).parent().parent().parent().parent().hide();
                }
            }
            
            var childs = $(this).children(); 
            for (var k = 0; k < childs.length; k++){
                for(var i = 0; i < People.length; i++){
                    if($(childs[k]).text()== People[i].Name){
                        $(this).parent().parent().parent().parent().hide() ;
                    }
                }
            }
        });
    }

    initialize(){}
        
    stop(){
        try{
            $("#HideM").remove();
        }catch(e){};
    }
    observer(changes) {}
}