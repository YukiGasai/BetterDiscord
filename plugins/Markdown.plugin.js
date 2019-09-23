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
  
        

        var textbox = $(".textArea-2Spzkt.da-textArea.textArea-2Spzkt.da-textArea.scrollbarGhostHairline-1mSOM1.scrollbar-3dvm_9.da-scrollbarGhostHairline.da-scrollbar");
        var texteee = $(".channelTextArea-1LDbYG.da-channelTextArea.channelTextArea-rNsIhG.da-channelTextArea");
        function addListeners(){

            function styling(){

                var b,i,u,t = "";

                sel = txtarea[0].value.substring(start, finish);   
                
                if($(realtickforBold).is(":checked"))b = "**"; else b = ""; 
                if($(realtickforItalic).is(":checked"))i = "*"; else i = ""; 
                if($(realtickforUnderline).is(":checked"))u = "__"; else u = ""; 
                if($(realtickforThrough).is(":checked"))t = "~~"; else t = ""; 

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

            if($(".contextMenu-HLZMGh.da-contextMenu").length && !$("#MEIN").length){
            $(textbox).addClass("added");

            var containerelement = {
                "tabindex": "0",
                "class" :"item-1Yvehc itemBase-tz5SeC da-item da-itemBase itemToggle-S7XGOQ itemBase-tz5SeC da-itemToggle da-itemBase clickable-11uBi- da-clickable",
                "role":"button",
                css:{
                    "display":"none",
                    "transition":"all 1s"
                }
            }

            var checkforObject = {
                "role": "button",
                "tabindex":"0",
                "class" :"checkbox-3kaeSU da-checkbox checkbox-3EVISJ da-checkbox",
            }
            
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

            var submenu2 = $("<div>",{
                "id":"MEIN2",
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

            //--------------------------------------------------------------------------------------------------------------------------------

            var divforBold = $("<div>",containerelement).appendTo($(submenu));

            var textforBold = $("<div>", {
                "html": "BOLD",
                "class" :"label-JWQiNe da-label",
            }).css("font-weight","bold").appendTo($(divforBold));
            
            var checkforBold = $("<div>",checkforObject).appendTo($(divforBold));

            var tickforBold = $("<div>", {
                "class":"checkboxInner-3yjcPe da-checkboxInner",
            }).appendTo($(checkforBold));

            var realtickforBold = $("<input>", {
                "class":"checkboxElement-1qV33p da-checkboxElement",
                "type":"checkbox",
            }).appendTo($(tickforBold));

            var spanforBold = $("<span>").appendTo($(tickforBold));


            //--------------------------------------------------------------------------------------------------------------------------------

            var divforItalic = $("<div>",containerelement).appendTo($(submenu));

            var textforItalic = $("<div>", {
                "html": "Italic",
                "class" :"label-JWQiNe da-label",
            }).css("font-style","italic").appendTo($(divforItalic));
            
            var checkforItalic = $("<div>", checkforObject).appendTo($(divforItalic));

            var tickforItalic = $("<div>", {
                "class":"checkboxInner-3yjcPe da-checkboxInner",
            }).appendTo($(checkforItalic));

            var realtickforItalic = $("<input>", {
                "class":"checkboxElement-1qV33p da-checkboxElement",
                "type":"checkbox",
            }).appendTo($(tickforItalic));

            var spanforItalic = $("<span>").appendTo($(tickforItalic));

            //--------------------------------------------------------------------------------------------------------------------------------


            var divforUnderline = $("<div>",containerelement).appendTo($(submenu));

            var textforUnderline = $("<div>", {
                "html": "Underline",
                "class" :"label-JWQiNe da-label",
            }).css("text-decoration","underline").appendTo($(divforUnderline));
            
            var checkforUnderline = $("<div>", checkforObject).appendTo($(divforUnderline));

            var tickforUnderline = $("<div>", {
                "class":"checkboxInner-3yjcPe da-checkboxInner",
            }).appendTo($(checkforUnderline));

            var realtickforUnderline = $("<input>", {
                "class":"checkboxElement-1qV33p da-checkboxElement",
                "type":"checkbox",
            }).appendTo($(tickforUnderline));

            var spanforUnderline = $("<span>").appendTo($(tickforUnderline));


            //--------------------------------------------------------------------------------------------------------------------------------

            var divforThrough = $("<div>",containerelement).appendTo($(submenu));

            var textforThrough = $("<div>", {
                "html": "Through",
                "class" :"label-JWQiNe da-label",
            }).css("text-decoration","line-through").appendTo($(divforThrough));
            
            var checkforThrough = $("<div>", checkforObject).appendTo($(divforThrough));

            var tickforThrough = $("<div>", {
                "class":"checkboxInner-3yjcPe da-checkboxInner",
            }).appendTo($(checkforThrough));

            var realtickforThrough = $("<input>", {
                "class":"checkboxElement-1qV33p da-checkboxElement",
                "type":"checkbox",
            }).appendTo($(tickforThrough));

            var spanforThrough = $("<span>").appendTo($(tickforThrough));


            //--------------------------------------------------------------------------------------------------------------------------------

            checkEvent(divforBold,realtickforBold,"**");
            checkEvent(divforItalic,realtickforItalic,"*");
            checkEvent(divforUnderline,realtickforUnderline,"__");
            checkEvent(divforThrough,realtickforThrough,"~~");


  
            //--------------------------------------------------------------------------------------------------------------------------------

            var divcombinecodeblock = $("<div>", {
                "tabindex": "0",
                "class" :"item-1Yvehc itemBase-tz5SeC da-item da-itemBase itemToggle-S7XGOQ itemBase-tz5SeC da-itemToggle da-itemBase clickable-11uBi- da-clickable",
            }).appendTo($(submenu2));

            var textcombinecodeblock = $("<div>", {
                "html": "Color",
                "class" :"label-JWQiNe da-label",
            }).appendTo($(divcombinecodeblock));

            $(textcombinecodeblock).click(function(){
                if($(divforRed).is(":hidden")){
                    $(divforRed).css("display","flex");
                    $(divforOrange).css("display","flex");
                    $(divforYellow).css("display","flex");
                    $(divforGreen).css("display","flex");
                }else{
                    $(divforRed).css("display","none");
                    $(divforOrange).css("display","none");
                    $(divforYellow).css("display","none");
                    $(divforGreen).css("display","none");
                }
            });

            var divforHightlight = $("<div>", containerelement).appendTo($(submenu2));

            var textforHightlight = $("<div>", {
                "html": "Hightlight",
                "class" :"label-JWQiNe da-label",
            }).appendTo($(divforHightlight));

            var divforRed = $("<div>", containerelement).appendTo($(submenu2));

            var textforRed = $("<div>", {
                "html": "RED",
                "class" :"label-JWQiNe da-label",
            }).css("color","Red").appendTo($(divforRed));

            var divforOrange = $("<div>", containerelement).appendTo($(submenu2));

            var textforOrange = $("<div>", {
                "html": "ORANGE",
                "class" :"label-JWQiNe da-label",
            }).css("color","Orange").appendTo($(divforOrange));

            var divforYellow = $("<div>", containerelement).appendTo($(submenu2));

            var textforYellow = $("<div>", {
                "html": "YELLOW",
                "class" :"label-JWQiNe da-label",
            }).css("color","Yellow").appendTo($(divforYellow));

            var divforGreen = $("<div>", containerelement).appendTo($(submenu2));

            var textforGreen = $("<div>", {
                "html": "Green",
                "class" :"label-JWQiNe da-label",
            }).css("color","Green").appendTo($(divforGreen));
           
            textforHightlight.click(function(){

                sel = txtarea[0].value.substring(start, finish);
                text = txtarea[0].value;

                if(text.includes("```")){

                    var linebreak = text.indexOf("\n");
                    text = text.substring(linebreak+1,text.length)
                    var lastlinebreak = text.lastIndexOf("\n");
                    text = text.substring(0,lastlinebreak)

                    finish = finish - 10;

                    textbox[0].value = text;

                }else{

                    text = insert(text,"```\n",0);
                    text = insert(text,"\n```",text.length);

                    finish = finish + 10;

                    textbox[0].value = text;

                }

                console.log("Start " + start + "  Value " + text[start]);
                console.log("Stop " + finish + "  Value " + text[finish]);
                console.log("TEXTBOX " + text + "  SELECTION+" + sel +"+");

            });

            textforRed.click(function(){

                sel = txtarea[0].value.substring(start, finish);
                text = txtarea[0].value;

                if(text.includes("```")){

                    var linebreak = text.indexOf("\n")+1;
                    text = text.substring(linebreak+1,text.length)
                    var lastlinebreak = text.lastIndexOf("\n");
                    text = text.substring(0,lastlinebreak)

                    finish = finish - 30;

                    textbox[0].value = text;

                }else{

                    text = insert(text,"```diff\n-",0);
                    text = insert(text,"\n```",text.length);

                    finish = finish + 30;

                    textbox[0].value = text;

                }

                console.log("Start " + start + "  Value " + text[start]);
                console.log("Stop " + finish + "  Value " + text[finish]);
                console.log("TEXTBOX " + text + "  SELECTION+" + sel +"+");

            });
            
            
        }
        }

    }

    setInterval(addListeners,100);

}

    stop(){}

}