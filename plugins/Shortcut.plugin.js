/**
 * @name Shortcut
 * @authorId 262613777357209601
 * @source https://github.com/YukiGasai/BetterDiscord/blob/master/plugins/Shortcut.plugin.js
 */
var Programs;
module.exports = class BlackList {

    getName() { return "Shortcut"; }

    getDescription() { return "Creates Shortcuts to start Programs"; }

    getVersion() { return "1.0.7"; }

    getAuthor() { return "L7Yuki Gasai"; }

    //legacy
    load() {}

    start() {
        //CREATES SETTINGS FILE
        Programs = BdApi.loadData("Shortcut","Programs");
        if(Programs == undefined)BdApi.saveData("Shortcut","Programs",[{"Name":"Minecraft","Path":"E:\\\\Games\\\\Minecraft\\\\MinecraftLauncher.exe","Icon":"https://cdn.freebiesupply.com/logos/large/2x/minecraft-1-logo-png-transparent.png"},{"Name":"Osu!","Path":"C:\\\\Users\\\\Richard\\\\AppData\\\\Local\\\\osu!\\\\osu!.exe","Icon":"https://upload.wikimedia.org/wikipedia/commons/6/65/Osu%21Logo_%282015%29.svg"},{"Name":"Rocket League","Path":"E:\\\\Games\\\\SteamLibrary\\\\steamapps\\\\common\\\\rocketleague\\\\Binaries\\\\Win32\\\\RocketLeague.exe","Icon":"https://i.dlpng.com/static/png/4988652_thumb.png"},{"Name":"Twitter","Path":"https://twitter.com/home?lang=de","Icon":"https://www.yoyochinese.com/images/webpage/front/footer/Twitter-ICON.svg"},{"Name":"YouTube","Path":"https://www.youtube.com/?hl=de&gl=DE","Icon":"https://static.getjar.com/icon-50x50/ae/853366_thm.png"},{"Name":"Whats App","Path":"https://web.whatsapp.com/","Icon":"https://static.getjar.com/icon-50x50/b9/847775_thm.png"},{"Name":"Twitch","Path":"https://www.twitch.tv/","Icon":"https://static.getjar.com/icon-50x50/e7/861632_thm.jpg"}]);
        Programs = BdApi.loadData("Shortcut","Programs");
    }

    onSwitch(){

        var exec = require('child_process').execFile;
        var Buttons = [];
        var currentProgram = 0;
        var addbool = true;

        function startexe(filepath) {
            exec(filepath, function (err, data) {
                console.log(err)
                console.log(data.toString());
            });
        }
    
        function addHover(requestElement, Color){
            $(requestElement).hover(function(){
                    $(this).css({"transform": "scaleY(1.1)","background": "#"+ Color})
                },
                function(){
                    $(this).css({"transform": "scaleY(1.0)","background": "white"})
            });
        }

            var Main = $(".members-1998pB.da-members.thin-1ybCId.scrollerBase-289Jih.fade-2kXiP2");
            var cssstyle = {
                "position": "relative",
                "width": "80%",
                "height": "25px",
                "font-size": "20px",
                "margin": "5px 10%",
                "text-align": "center",
                "transition": "all 1s",
            }
            
            if ($("#OptionLink").length) {
                

            } else if (Main.length /*&& $(".membersGroup-v9BXpm").length*/) {
             
                var OptionLink = $("<button>", {
                    "id": "OptionLink",
                    "class": "OptionLink",
                    css: {
                        "zIndex": "10",
                        "position": 'relative',
                        "opacity": '0.5',
                        "width": '50px',
                        "height": '50px',
                        "borderRadius": '50%',
                        "marginRight": '5px',
                        "marginTop ": '5px',
                        "background": 'url("https://image.flaticon.com/icons/svg/1665/1665731.svg")',
                        "background-Size": 'cover',
                        "font-weight":"bold",
                        "transition": "all 0.4s ease-in-out "
                    }
                });
                Main.prepend($(OptionLink));

                $(OptionLink).hover(
                    function () {
                        $(this).css({
                            "opacity": "1",
                            "transform": "scale(1.1)"
                        });
                    },
                    function () {
                        $(this).css({
                            "opacity": "0.5",
                            "transform": "scale(1.0)"
                        });
                    });

                OptionLink.click(function () {
                    if ($(".ShortcutSettings").length) {
                        $(".ShortcutSettings").remove();
                        console.log("REMOVE")
                    } else {
                        console.log("CREATE")
                        var ShortcutSettings = $("<div>", {
                            'class': "ShortcutSettings",
                            "hidden": "true",
                            css: {
                                "position": "absolute",
                                "width": "50%",
                                "height": "auto",
                                "top": "20%",
                                "left": "25%",
                                "font-size": "10px",
                                "background-color": "rgba(213, 254, 253,0.5)",
                                "background-image": "linear-gradient(315deg, rgba(213, 254, 253,0.8) 0%, #rgba(255, 252, 255,0.8) 74%)",
                                "border-radius": "50px",
                                "padding-top": "10px",
                                "z-index":"10",
                                "padding-bottom": "10px"                              
                            }
                        }).insertAfter("body");

                        $(ShortcutSettings).first().fadeIn("slow");

                        $(ShortcutSettings).keydown(function (e) {
                            if (e.which == 27) $(ShortcutSettings).remove();

                        });

                        var ShortcutIndexP = $("<p>", {
                            'class': "ShortcutIndexP",
                            'html': "Index of Shortcut",
                            css: cssstyle
                        }).appendTo(ShortcutSettings);

                        var ShortcutIndexInput = $("<input>", {
                            'type': "number",
                            'min': 0,
                            'max': Programs.length - 1,
                            'val': 0,
                            'class': "ShortcutIndexInput",
                            css: cssstyle
                        }).appendTo(ShortcutSettings);

                        var ShortcutNameP = $("<p>", {
                            'class': "ShortcutNameP",
                            'html': "Name of Shortcut",
                            css: cssstyle
                        }).appendTo(ShortcutSettings);

                        var ShortcutNameInput = $("<input>", {
                            'class': "ShortcutNameInput",
                            'val': Programs[0].Name,
                            css: cssstyle
                        }).appendTo(ShortcutSettings);

                        var ShortcutPathP = $("<p>", {
                            'class': "ShortcutPathP",
                            'html': "Path of EXE",
                            css: cssstyle
                        }).appendTo(ShortcutSettings);

                        var ShortcutPathInput = $("<input>", {
                            'class': "ShortcutPathInput",
                            'val': Programs[0].Path,
                            css: cssstyle
                        }).appendTo(ShortcutSettings);

                        var ShortcutIconP = $("<p>", {
                            'class': "ShortcutIconP",
                            'html': "URL of ICON",
                            css: cssstyle
                        }).appendTo(ShortcutSettings);

                        var ShortcutIconInput = $("<input>", {
                            'class': "ShortcutIconInput",
                            'val': Programs[0].Icon,
                            css: cssstyle
                        }).appendTo(ShortcutSettings);

                        var ShortcutDeleteButton = $("<button>", {
                            'html': "DELETE",
                            'class': "ShortcutDeleteButton",
                            css: cssstyle
                        }).appendTo(ShortcutSettings);

                        addHover(ShortcutDeleteButton,"ff6347");

                        var ShortcutAddButton = $("<button>", {
                            'html': "Add",
                            'class': "ShortcutAddButton",
                            css: cssstyle
                        }).appendTo(ShortcutSettings);

                        addHover(ShortcutAddButton,"90ee90");

                        var ShortcutSaveButton = $("<button>", {
                            'html': "Change",
                            'class': "ShortcutSaveButton",
                            css: cssstyle
                        }).appendTo(ShortcutSettings);

                        addHover(ShortcutSaveButton,"90ee90");

                        var ShortcutBackButton = $("<button>", {
                            'html':"Back",
                            'class':"ShortcutBackButton",
                            css: cssstyle
                        }).appendTo(ShortcutSettings);

                        addHover(ShortcutBackButton,"7ff7ff");

                        $(ShortcutIndexInput).bind('input', function () {
                            currentProgram = $(".ShortcutIndexInput").val();
                            $(".ShortcutNameInput").val(Programs[currentProgram].Name);
                            $(".ShortcutPathInput").val(Programs[currentProgram].Path);
                            $(".ShortcutIconInput").val(Programs[currentProgram].Icon);

                        });

                        $(ShortcutDeleteButton).click(function () {
                            Programs.splice(currentProgram, 1);
                            $(this).html("DELETE ✔");
                            BdApi.saveData("Shortcut","Programs",Programs);

                            Buttons.forEach(Button => {
                                Button.remove();
                            });
                            $(ShortcutSettings).remove();
                            $(OptionLink).remove();

                            currentProgram = 0;
                        });

                        $(ShortcutAddButton).click(function () {
                            
                            if (addbool) {
                                
                                $(".ShortcutIndexInput").val(Programs.length);
                                $(".ShortcutAddButton").html("Click again to save");
                                $(".ShortcutNameInput").val("");
                                $(".ShortcutPathInput").val("");
                                $(".ShortcutIconInput").val("");
                                addbool = false;
                                $(ShortcutDeleteButton).attr("disabled",true);
                                $(ShortcutSaveButton).attr("disabled",true);
                             

                            } else {
                                $(this).html("SAVED ✔");
                                Programs.push({
                                    "Name": $(".ShortcutNameInput").val(),
                                    "Path": $(".ShortcutPathInput").val().replace("\\", "\\\\"),
                                    "Icon": $(".ShortcutIconInput").val()
                                })

                                addbool = true;                   
                                BdApi.saveData("Shortcut","Programs",Programs);
                                Buttons.forEach(Button => {
                                    Button.remove();
                                });
                                $(ShortcutSettings).remove();
                                $(OptionLink).remove();

                            }
                        });

                        $(ShortcutSaveButton).click(function () {
                            Programs[currentProgram].Name = $(".ShortcutNameInput").val();
                            Programs[currentProgram].Path = $(".ShortcutPathInput").val();
                            Programs[currentProgram].Icon = $(".ShortcutIconInput").val();
                            $(this).html("CHANGED ✔");
                            BdApi.saveData("Shortcut","Programs",Programs);
                            currentProgram = 0;
                            Buttons.forEach(Button => {
                                Button.remove();
                            });
                            $(ShortcutSettings).remove();
                            $(OptionLink).remove();
                        });

                        $(ShortcutBackButton).click(function(){
                            ShortcutSettings.remove();
                        });
                    }
                });

                for (var i = 0; i < Programs.length; i++) {
                    var Link = $("<button>", {
                        "id": i,
                        "class": "Link",
                        css: {
                            "zIndex": "10",
                            "position": 'relative',
                            "opacity": '0.5',
                            "width": '50px',
                            "height": '50px',
                            "borderRadius": '50%',
                            "marginRight": '5px',
                            "marginTop ": '5px',
                            "background": 'url("' + Programs[i].Icon + '")',
                            "background-Size": 'cover',
                            "transition": "all 0.4s ease-in-out "
                        }

                    });

                    $(Link).click(function () {
                        var inde = $(this).attr('id')
                        inde = parseInt(inde, 10);
                        var exepath = Programs[inde].Path;
                        exepath = exepath.replace("\"","");
                        if (exepath.includes("http")) {
                            window.open(exepath);
                        } else {
                            fs.exists(exepath, function (exists) {
                                if (exists) {
                                    startexe(exepath);
                                }else{
                                    console.log(exepath)
                                    alert(`The selected Path for  ${Programs[inde].Name} is not valid`)
                                }
                            })
                        }
                    });

                    $(Link).hover(function(){
                            $(this).css({"opacity": "1", "transform": "scale(1.1)"});
                        },
                        function(){
                            $(this).css({"opacity": "0.5", "transform": "scale(1.0)"});
                        });

                        Main.prepend($(Link));  

                    Buttons.push(Link);
                }

            }
    }

    stop() { }
    observer(changes) {}
}
