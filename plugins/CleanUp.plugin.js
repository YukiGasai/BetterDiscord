/**
 * @name CleanUp
 * @authorId 262613777357209601
 * @source https://github.com/YukiGasai/BetterDiscord/blob/master/plugins/CleanUp.plugin.js
 */
var keys = [];
var Serverlist;
var secbool = true;

   
function HideServer(){
    if(secbool){
        for(var i = 0; i < Serverlist.length; i++){
            var target = $("[aria-label*='"+Serverlist[i].Name+"']").parent();
            if(target.parent().parent('.wrapper-25eVIn.da-wrapper').length){

                if(!$("[aria-label*='"+Serverlist[i].Name+"']").parent().is(":hidden"))
                    $("[aria-label*='"+Serverlist[i].Name+"']").parent().hide();
                   
            }
        }
    }else{
        for(var i = 0; i < Serverlist.length; i++){
            var target = $("[aria-label*='"+Serverlist[i].Name+"']").parent();
            if(target.parent().parent('.wrapper-25eVIn.da-wrapper').length){
                if($("[aria-label*='"+ Serverlist[i].Name+"']").parent().is(":hidden"))
                    $("[aria-label*='"+ Serverlist[i].Name+"']").parent().show();
            }
        }
    }
}

class CleanUp{
	constructor () {}

	getName () {return "CleanUp";}

	getDescription () {return "CleanUp";}

	getVersion () {return "1.7.0";}

	getAuthor () {return "Yuki Gasai";}
	
	//legacy
    load(){}
    
    start(){
        Serverlist = BdApi.loadData("CleanUp","Servers");
        if(Serverlist[0] == undefined)BdApi.saveData("CleanUp","Servers",[]);
        Serverlist = BdApi.loadData("CleanUp","Servers");


        function checkFlag() {
            if($('.listItem-2P_4kh.da-listItem').length) {
                $(document).off('mousedown').on("keydown",function(e){
                    keys[e.keyCode] = true; 
                    // . KEY
                    if (keys[190]) {
                        console.log("IT happend")
                        if(secbool)secbool=false;
                        else secbool = true;
                        HideServer();
                    }
                });
                $(document).off('mousedown').on("keyup",function(e){keys[e.keyCode] = false;});
               HideServer();
            }
        }
        window.setTimeout(checkFlag, 1000);   
       
    }

    onSwitch(){
       

        var Serverdiv = $(".scroller-2TZvBN.da-scroller.none-2Eo-qx.scrollerBase-289Jih").find("[aria-controls='Servers']");

        var servers = $(".listItem-2P_4kh.da-listItem");
        
        servers.each(function(index){

            if(index > 3){

            $(this).off('mousedown').on('mousedown', function(e){
                var Name =  $(this).find(".wrapper-1BJsBx.da-wrapper").attr("aria-label");
                var found = false;
                for(var i = 0; i < Serverlist.length; i++) {
                    if (Serverlist[i].Name == Name) {
                        found = true;
                        break;
                    }
                }
                console.log("CLICK");
                //Midddle Mouse 
                if(e.which == 2){ 
             
                    e.preventDefault();
                    if(found){
                        BdApi.showConfirmationModal("Show Server "+Name,[],{
                            danger: true,
                            confirmText: "Yes",
                            cancelText: "No",
                            onConfirm :()=>{
                                var index = Serverlist.indexOf({"Name": Name});
                                Serverlist.splice(index,1);
                                BdApi.saveData("CleanUp","Servers",Serverlist);
                            }
                        });   
                    }else{
                        BdApi.showConfirmationModal("Hide Server "+Name,[],{
                        danger: true,
                        confirmText: "Yes",
                        cancelText: "No",
                        onConfirm :()=>{
                                Serverlist.push({"Name": Name});
                                BdApi.saveData("CleanUp","Servers",Serverlist);
                            }
                        });  
                    }
                    HideServer();
                }
            });
            }
        });
       
        
        HideServer();

        var d =  $('.membersGroup-v9BXpm.da-membersGroup').last().html();
        if($('.membersGroup-v9BXpm.da-membersGroup').last().nextAll() && d.indexOf("Offline") >= 0){
            $('.membersGroup-v9BXpm.da-membersGroup').last().nextAll().hide();
        }

        var ServerError =  $('.anchor-3Z-8Bb.anchorUnderlineOnHover-2ESHQB.guildsError-b7zR5H.da-anchor.da-anchorUnderlineOnHover.da-guildsError');
        if($(ServerError).is(":visible")){
            $(ServerError).hide();
            console.log("Hide Server Error")
        } 
    }
    
    stop(){
        


    }

}
