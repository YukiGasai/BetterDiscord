//META{"name":"Markdown"}*//

class Markdown {
    
    getName () {return "Markdown";}
    
    getDescription () {return "For Formatting your text";}
    
    getVersion () {return "1.0.0";}
    
    getAuthor () {return "L7Yuki Gasai";}
    
    load () {}

    start(){

        function insert(main_string, ins_string, pos) {
            return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
        }


        var containerelement = {
            "tabindex": "0",
            "class" :"item-1Yvehc itemBase-tz5SeC da-item da-itemBase itemToggle-S7XGOQ itemBase-tz5SeC da-itemToggle da-itemBase clickable-11uBi- da-clickable",
            "role":"button",
            css:{
                "display":"none",
                "transition":"all 1s"
            }
        }


        function addListeners(){

            var divsfor = [];
            var textsfor = [];
            var checksfor = [];
            var ticksfor = [];
            var realticksfor = [];
            var spansfor = [];
    
            var divforColors = [];
            var textforColors = [];
    

            function styling(){

                var b,i,u,t = "";

                sel = txtarea[0].value.substring(start, finish);   
                
                if($(realticksfor[0]).is(":checked"))b = "**"; else b = ""; 
                if($(realticksfor[1]).is(":checked"))i = "*"; else i = ""; 
                if($(realticksfor[2]).is(":checked"))u = "__"; else u = ""; 
                if($(realticksfor[3]).is(":checked"))t = "~~"; else t = ""; 

                var proto = u + t + i + b + sel + b + i + t + u;
                
                document.execCommand('insertText', false, proto)
                   
                }
            

            function checkEvent(button,checkbox){
                button.click(function(){
                    if($(checkbox).is(":checked")){
                        $(checkbox).prop('checked', false);
                    }else{
                        $(checkbox).prop('checked', true);
                    }
                });
            }
            
            function createElements(stylename, mainmenu){
                
                var divfor = $("<div>",containerelement).appendTo($(mainmenu));

                var textfor = $("<div>", {
                    "html": stylename,
                    "class" :"label-JWQiNe da-label",
                }).appendTo($(divfor));

                if(stylename.toUpperCase() == "BOLD") textfor.css("font-weight","bold");
                if(stylename.toUpperCase() == "ITALIC") textfor.css("font-style","italic");
                if(stylename.toUpperCase() == "UNDERLINE") textfor.css("text-decoration","underline");
                if(stylename.toUpperCase() == "THROUGH") textfor.css("text-decoration","line-through");
            
                var checkfor = $("<div>",{
                    "role": "button",
                    "tabindex":"0",
                    "class" :"checkbox-3kaeSU da-checkbox checkbox-3EVISJ da-checkbox",
                }).appendTo($(divfor));

                var tickfor = $("<div>", {
                    "class":"checkboxInner-3yjcPe da-checkboxInner",
                }).appendTo($(checkfor));

                var realtickfor = $("<input>", {
                    "class":"checkboxElement-1qV33p da-checkboxElement",
                    "type":"checkbox",
                }).appendTo($(tickfor));

                var spanfor = $("<span>").appendTo($(tickfor));

                divsfor.push(divfor);     
                textsfor.push(textfor);   
                checksfor.push(checkfor);  
                ticksfor.push(tickfor);   
                realticksfor.push(realtickfor);   
                spansfor.push(spanfor);  

            }

            function createColorElements(colorname,colorhex,mainmenu){
                var divforColor = $("<div>", containerelement).appendTo($(submenu2));

                var textforColor = $("<div>", {
                    "html": colorname,
                    "class" :"label-JWQiNe da-label",
                }).css("color", "#" + colorhex).appendTo($(divforColor));

                divforColors.push(divforColor);
                textforColors.push(textforColor);

            }

            function ColorClick(CodeString,Beginning,Ending){


                $(txtarea).select();
                let text = $(txtarea).val();
                if(text.includes("```")){
                    text = text.replace("```","")
                    text = text.replace("```","")
                    text = text.replace("\n","")
                    text = text.replace("css","")
                    text = text.replace("bash","")
                    text = text.replace("ini","")
                    text = text.replace("fix","")
                    text = text.replace("[","")
                    text = text.replace("\"","")
                    text = text.replace(/]([^\]]*)$/,'$1')
                    text = text.replace(/"([^"]*)$/,'$1')
                var colorproto = text;
                }else{
               
                var colorproto = "```"+ CodeString  +"\n"+ Beginning + text + Ending + "```";
                }
                document.execCommand('insertText', false, colorproto);
       
            
            }


            if($(".contextMenu-HLZMGh.da-contextMenu").length && !$("#MEIN").length){

            var txtarea = document.getElementsByClassName("textArea-2Spzkt da-textArea textArea-2Spzkt da-textArea scrollbarGhostHairline-1mSOM1 scrollbar-3dvm_9 da-scrollbarGhostHairline da-scrollbar");
            var start = txtarea[0].selectionStart;
            var finish = txtarea[0].selectionEnd; 
            var text = txtarea[0].value;
            if(text[finish-1]==" ")finish--;   
            var sel = txtarea[0].value.substring(start, finish);
         
        if(sel.length>0){

            var submenu = $("<div>",{
                "id":"MEIN",
                "class":"itemGroup-1tL0uz da-itemGroup",
            }).appendTo($(".contextMenu-HLZMGh.da-contextMenu"));

            var divcombineweight = $("<div>", {
                "tabindex": "0",
                "class" :"item-1Yvehc itemBase-tz5SeC da-item da-itemBase itemToggle-S7XGOQ itemBase-tz5SeC da-itemToggle da-itemBase clickable-11uBi- da-clickable",
            }).appendTo($(submenu));

            var textcombineweight = $("<div>", {
                "html": "Style",
                "class" :"label-JWQiNe da-label",
            }).appendTo($(divcombineweight));

            textcombineweight.click(function(){styling();})


            $(submenu).hover(function(){
                    
                $(submenu).children().not(':first').css("display","flex");
                },function(){
                $(submenu).children().not(':first').css("display","none");

            });

            createElements("BOLD",submenu)
            createElements("ITALIC",submenu)
            createElements("UNDERLINE",submenu)
            createElements("THROUGH",submenu)

            checkEvent(divsfor[0],realticksfor[0],"**");
            checkEvent(divsfor[1],realticksfor[1],"*");
            checkEvent(divsfor[2],realticksfor[2],"__");
            checkEvent(divsfor[3],realticksfor[3],"~~");
        }
 //--------------------------------------------------------------------------------------------------------------------------------
        //if(sel.length == text.length){
            if(sel.length>0){
            var submenu2 = $("<div>",{
                "id":"MEIN2",
                "class":"itemGroup-1tL0uz da-itemGroup",
 
            }).appendTo($(".contextMenu-HLZMGh.da-contextMenu"));

            var divcombinecodeblock = $("<div>", {
                "tabindex": "0",
                "class" :"item-1Yvehc itemBase-tz5SeC da-item da-itemBase itemToggle-S7XGOQ itemBase-tz5SeC da-itemToggle da-itemBase clickable-11uBi- da-clickable",
            }).appendTo($(submenu2));

            var textcombinecodeblock = $("<div>", {
                "html": "Color",
                "class" :"label-JWQiNe da-label",
            }).appendTo($(divcombinecodeblock));

            $(submenu2).hover(function(){
                      
                $(submenu2).children().not(':first').css("display","flex");
                },function(){
                $(submenu2).children().not(':first').css("display","none");
            });

            createColorElements("Hightlight","888888",submenu2);
            createColorElements("RED","ff0000",submenu2);
            createColorElements("YELLOW","FFFF00",submenu2);
            createColorElements("GREEN","00FF00",submenu2);
            createColorElements("BLUEGREEN","1F3A3D",submenu2);
            createColorElements("BLUE","0000ff",submenu2);

            textforColors[0].click(()=>ColorClick("","",""));
            textforColors[1].click(()=>ColorClick("css","[","]"));
            textforColors[2].click(()=>ColorClick("fix","",""));
            textforColors[3].click(()=>ColorClick("css","\"","\""));
            textforColors[4].click(()=>ColorClick("bash","\"","\""));
            textforColors[5].click(()=>ColorClick("ini","[","]"));
            
        }
        
        }

    }

    setInterval(addListeners,100);

}

    stop(){}

}