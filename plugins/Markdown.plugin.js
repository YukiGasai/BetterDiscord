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
    
        function addListeners(){

            if($(".contextMenu-HLZMGh.da-contextMenu").length && !$("#MEIN").length){
            $(textbox).addClass("added");

            
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

            var divforBold = $("<div>", {
                "tabindex": "0",
                "class" :"item-1Yvehc itemBase-tz5SeC da-item da-itemBase itemToggle-S7XGOQ itemBase-tz5SeC da-itemToggle da-itemBase clickable-11uBi- da-clickable",
                "role":"button"
            }).appendTo($(submenu));

            var textforBold = $("<div>", {
                "html": "BOLD",
                "class" :"label-JWQiNe da-label",
            }).appendTo($(divforBold));

            var divforItalic = $("<div>", {
                "tabindex": "0",
                "class" :"item-1Yvehc itemBase-tz5SeC da-item da-itemBase itemToggle-S7XGOQ itemBase-tz5SeC da-itemToggle da-itemBase clickable-11uBi- da-clickable",
                "role":"button"
            }).appendTo($(submenu));

            var textforItalic = $("<div>", {
                "html": "Italic",
                "class" :"label-JWQiNe da-label",
            }).appendTo($(divforItalic));

            var divforUnderline = $("<div>", {
                "tabindex": "0",
                "class" :"item-1Yvehc itemBase-tz5SeC da-item da-itemBase itemToggle-S7XGOQ itemBase-tz5SeC da-itemToggle da-itemBase clickable-11uBi- da-clickable",
                "role":"button"
            }).appendTo($(submenu));

            var textforUnderline = $("<div>", {
                "html": "Underline",
                "class" :"label-JWQiNe da-label",
            }).appendTo($(divforUnderline));

            var divforThrough = $("<div>", {
                "tabindex": "0",
                "class" :"item-1Yvehc itemBase-tz5SeC da-item da-itemBase itemToggle-S7XGOQ itemBase-tz5SeC da-itemToggle da-itemBase clickable-11uBi- da-clickable",
                "role":"button"
            }).appendTo($(submenu));

            var textforThrough = $("<div>", {
                "html": "Through",
                "class" :"label-JWQiNe da-label",
            }).appendTo($(divforThrough));

            var divforThrough = $("<div>", {
                "tabindex": "0",
                "class" :"item-1Yvehc itemBase-tz5SeC da-item da-itemBase itemToggle-S7XGOQ itemBase-tz5SeC da-itemToggle da-itemBase clickable-11uBi- da-clickable",
                "role":"button"
            }).appendTo($(submenu));

            var textforThrough = $("<div>", {
                "html": "Through",
                "class" :"label-JWQiNe da-label",
            }).appendTo($(divforThrough));

            var divforHightlight = $("<div>", {
                "tabindex": "0",
                "class" :"item-1Yvehc itemBase-tz5SeC da-item da-itemBase itemToggle-S7XGOQ itemBase-tz5SeC da-itemToggle da-itemBase clickable-11uBi- da-clickable",
                "role":"button"
            }).appendTo($(submenu));

            var textforHightlight = $("<div>", {
                "html": "Hightlight",
                "class" :"label-JWQiNe da-label",
            }).appendTo($(divforHightlight));

            textforBold.click(function(){

                sel = txtarea[0].value.substring(start, finish);

                if(sel.includes("**")){

                    text = text.replace("**","");
                    text = text.replace("**","");

                    finish = finish - 4;

                    textbox[0].value = text;

                }else{

                    text = insert(text,"**",start);
                    text = insert(text,"**",finish+2);

                    finish = finish + 4;

                    textbox[0].value = text;

                }

                console.log("Start " + start + "  Value " + text[start]);
                console.log("Stop " + finish + "  Value " + text[finish]);
                console.log("TEXTBOX " + text + "  SELECTION+" + sel +"+");
            });

            textforItalic.click(function(){

                sel = txtarea[0].value.substring(start, finish);

                text = insert(text,"*",start);
                text = insert(text,"*",finish+1);

                finish = finish + 2;

                console.log("Start " + start + "  Value " + text[start]);
                console.log("Stop " + finish + "  Value " + text[finish]);
                console.log("TEXTBOX " + text + "  SELECTION+" + sel +"+");

                textbox[0].value = text;
            });

            textforUnderline.click(function(){
                
                sel = txtarea[0].value.substring(start, finish);

                if(sel.includes("__")){

                    text = text.replace("__","");
                    text = text.replace("__","");

                    finish = finish - 4;

                    textbox[0].value = text;

                }else{

                    text = insert(text,"__",start);
                    text = insert(text,"__",finish+2);

                    finish = finish + 4;

                    textbox[0].value = text;

                }

                console.log("Start " + start + "  Value " + text[start]);
                console.log("Stop " + finish + "  Value " + text[finish]);
                console.log("TEXTBOX " + text + "  SELECTION+" + sel +"+");
            });

            textforThrough.click(function(){

                sel = txtarea[0].value.substring(start, finish);

                if(sel.includes("~~")){

                    text = text.replace("~~","");
                    text = text.replace("~~","");

                    finish = finish - 4;

                    textbox[0].value = text;

                }else{

                    text = insert(text,"~~",start);
                    text = insert(text,"~~",finish+2);

                    finish = finish + 4;

                    textbox[0].value = text;

                }

                console.log("Start " + start + "  Value " + text[start]);
                console.log("Stop " + finish + "  Value " + text[finish]);
                console.log("TEXTBOX " + text + "  SELECTION+" + sel +"+");
            });

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
            
        }
        }

    }

    setInterval(addListeners,100);

}

    stop(){}

}