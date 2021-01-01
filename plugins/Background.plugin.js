/**
 * @name Background
 * @authorId 262613777357209601
 * @source https://github.com/YukiGasai/BetterDiscord/blob/master/plugins/Background.plugin.js
 */

var ThemeSettings = {
    Images: [],
    Time: 1000,
    Dim: 50,
    Transparancy: false,
    Rotation: true,
    ThemeStatus: true,
    LastIndex: 0
}



module.exports = class Background {

    getSettingsPanel () {
        const fs = require('fs'); 
        const path = require('path');
		let html = fs.readFileSync( path.join(BdApi.Plugins.folder,'Background.settings.html'),'utf8');
        return html;
    };

    inter;

    getSettingsVar(){return ThemeSettings;}

    setSettingsVar(settings){ThemeSettings = settings;}

    getName() { return "Background"; }

    getDescription() { return "Background"; }

    getVersion() { return "1.5.7"; }

    getAuthor() { return "L7Yuki Gasai"; }

    //legacy
    load() {}
    start() {
        var FirstStart = true;
        this.inter = setInterval(update, ThemeSettings.Time * 100000000000000000)
        //Check if Theme exists else download and use it
        if (BdApi.Themes.get("BackgroundChanger Theme") == null) {
            fetch("https://raw.githubusercontent.com/YukiGasai/BetterDiscord/master/themes/BackgroundChanger.theme.css")
                .then(response => response.text())
                .then(text => {
                    (async() => await require('fs').promises.writeFile(BdApi.Themes.folder + "/BackgroundChanger.theme.css", text))();
                })
                .catch(err => console.log(err));
        }


        function WaitForFullLoad() {
            return new Promise((resolve, reject) => {
                let run = 0;
                let WaitIntervall = setInterval(() => {
                    run++;

                    if (BdApi.Themes.get("BackgroundChanger Theme") != null) {
                        clearInterval(WaitIntervall);
                        resolve();
                    } else {
                        if (run > 100) {
                            clearInterval(WaitIntervall);
                            reject();
                        }
                        console.log("WAIT");
                    }
                }, 100);
            })
        }

        function SwitchThemeOn() {
            if (!BdApi.Themes.isEnabled("BackgroundChanger Theme")) {
                BdApi.Themes.enable("BackgroundChanger Theme");
            }
        }


        WaitForFullLoad()
            .then(() => SwitchThemeOn())
            .catch(() => console.log('Theme could not be loaded'))

        function UpdateSettingsSmart(Key, Value) {
            ThemeSettings[Key] = BdApi.loadData("Background", Key);
            if (ThemeSettings[Key] == undefined) BdApi.saveData("Background", Key, JSON.parse(Value));
            ThemeSettings[Key] = BdApi.loadData("Background", Key);
        }


        UpdateSettingsSmart("Images", '[{"Name":"Akali Big","Link":"https://i.imgur.com/Wqtx1pJ.jpg"},{"Name":"Your Name Small","Link":"https://i.imgur.com/PblkDJk.jpg"},{"Name":"Your Name Sky","Link":"https://i.imgur.com/PblkDJk.jpg"},{"Name":"Kat","Link":"https://images.alphacoders.com/876/thumb-1920-876868.jpg"},{"Name":"totoro","Link":"https://images6.alphacoders.com/896/thumb-1920-896802.jpg"},{"Name":"Thresh","Link":"https://i.imgur.com/TMKVrls.jpg"},{"Name":"Zero Two Sky","Link":"https://i.imgur.com/AA0Ld8g.jpg"},{"Name":"Akali AMOLED","Link":"https://i.imgur.com/656WElf.jpg"},{"Name":"02 Dark","Link":"https://i.redd.it/cuutei59ixi11.jpg"},{"Name":"02 Outside","Link":"https://i.imgur.com/lvpEwPA.jpg"}]');
        UpdateSettingsSmart("Time", "1000");
        UpdateSettingsSmart("Dim", "50");
        UpdateSettingsSmart("Transparancy", "false");
        UpdateSettingsSmart("Rotation", "true");
        UpdateSettingsSmart("ThemeStatus", "true");
        UpdateSettingsSmart("LastIndex", "0");
        console.log("EEEEEEEEEEE" + ThemeSettings.LastIndex);

        function SaveAllSettings() {
            for (var key in ThemeSettings) {
                if (ThemeSettings.hasOwnProperty(key)) {
                    BdApi.saveData("Background", "" + key, ThemeSettings[key]);
                }
            }
        }


        function addHover(requestElement, Color) {
            $(requestElement).hover(function() {
                    $(this).css({ "transform": "scaleY(1.1)", "background": "#" + Color })
                },
                function() {
                    $(this).css({ "transform": "scaleY(1.0)", "background": "white" })
                });
        }

        var delay = ThemeSettings.Time * 1000;
        var keys = [];
        var opa = ThemeSettings.Dim / 100;

        function GetRotationstring() {
            if (ThemeSettings.Rotation) {
                return "ON";
            } else {
                return "OFF";
            }
        }


        if (BdApi.Themes.get("BackgroundChanger Theme") != null) {
            if (ThemeSettings.ThemeStatus) {
                BdApi.Themes.enable("BackgroundChanger Theme");
            } else {
                BdApi.Themes.disable("BackgroundChanger Theme");
            }
        }


        $("#app-mount").css("background", "rgba(0,0,0," + opa + ")");

        function UpdateBackgroundImage(ImageUrl) {
            document.body.style.background = `url("${ImageUrl}")`;
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.backgroundSize = 'cover';
        }


        function update() {
            if (!ThemeSettings.Transparancy) {
                var index;
                if(FirstStart)
                {
                    FirstStart = false; 
                    index = ThemeSettings.LastIndex;

                }else{
                    index = Math.floor(Math.random() * ThemeSettings.Images.length);
                    BdApi.saveData("Background", "LastIndex", index);
                }
                
                UpdateBackgroundImage(ThemeSettings.Images[index].Link);
            }
        }
        update();

        function Pause() {
            if (ThemeSettings.Rotation == false) {
                ThemeSettings.Rotation = true;
                this.inter = setInterval(update, ThemeSettings.Time * 1000);
            } else {
                ThemeSettings.Rotation = false;
                clearInterval(this.inter);
            }
            BdApi.saveData("Background", "Rotation", ThemeSettings.Rotation);
        }
        document.body.addEventListener("keydown", keysPressed, false);
        document.body.addEventListener("keyup", keysReleased, false);

        document.body.addEventListener('wheel', function(e) {
            if (ThemeSettings.Rotation) {
                let increase = 0
                if (keys[17] && keys[20]) increase = 1;
                else if (keys[17] && keys[16]) increase = 60;
                if (increase == 0) return;
                let wDelta = e.wheelDelta < 0 ? -1 : 1;
                ThemeSettings.Time = parseInt(ThemeSettings.Time) + parseInt(wDelta) * increase;
                if (ThemeSettings.Time < 1) ThemeSettings.Time = 1;
                let min = Math.trunc(ThemeSettings.Time / 60);
                let sec = ThemeSettings.Time - min * 60;
                $(".name-3YKhmS").html('' + min + " : " + sec + '');
                $(".BackgroundDelayInput").val(ThemeSettings.Time);
                clearInterval(this.inter);
                this.inter = setInterval(update, ThemeSettings.Time * 1000);
            }
        });

        function keysReleased(e) { keys[e.keyCode] = false; }

        function keysPressed(e) {
            keys[e.keyCode] = true;

            //CTRL + SHIFT + 1-9 = set das Bild des richtigen Index
            for(var index = 0;  index < 9; index++)
            {
                if (keys[17] && keys[16] && keys[index+49]) { 
                    if( index < ThemeSettings.Images.length)
                    {
                        document.body.style.background = UpdateBackgroundImage(ThemeSettings.Images[index].Link);
                    }
                }
            }

            //CTRL + SHIFT + R = Neues Random Bild
            if (keys[17] && keys[16] && keys[82]) update();
            //CTRL + SHIFT + Space = Increase Background Opacity
            if (keys[17] && keys[16] && keys[187]) {
                opa = opa + 0.05;
                if (opa > 1) opa = 1;
                $("#app-mount").css("background", "rgba(0,0,0," + opa + ")");
            }
            //CTRL + SHIFT + Space = Decrease Background Opacity
            if (keys[17] && keys[16] && keys[189]) {
                opa = opa - 0.05;
                if (opa < 0) opa = 0.0;
                $("#app-mount").css("background", "rgba(0,0,0," + opa + ")");
            }
            //CTRL + SHIFT + Space = Start STOP
            if (keys[17] && keys[16] && keys[32]) Pause();
        }
        //HERE STARTS THE SETTINGS PAGE A LOT OF HTML CSS SHIT----------------------------------------------------------------------------------
        /*function WallpaperIO() {

            if ($('#Set-Img-Button').length < 1) {
                var cssstyle = {
                    "position": "relative",
                    "width": "80%",
                    "height": "25px",
                    "font-size": "20px",
                    "margin": "5px 10%",
                    "text-align": "center",
                    "transition": "all 1s",
                }
                let setImgbutton = $("<button>", {
                    'id': "Set-Img-Button",
                    'html': "Set Img",
                    css: {
                        "position": "relative",
                        "width": "48px",
                        "height": "20px",
                        "font-size": "10px",
                        "margin-left": "11px",
                        "margin-bottom": "11px",
                        "background-color": "#2f3136",
                        "color": "#b9bbbe",
                        "border-radius": "4px"
                    }
                }).insertAfter("#bd-pub-li");
                setImgbutton.click(function() {
                    if ($(".BackgroundSettings").length) {
                        $(".BackgroundSettings").remove();
                    } else {
                        var BackgroundSettings = $("<div>", {
                            'class': "BackgroundSettings",
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
                                "padding-bottom": "10px",
                                "z-index": "10"

                            }
                        }).insertAfter("body");
                        $(BackgroundSettings).first().fadeIn("slow");
                        $(BackgroundSettings).keydown(function(event) {
                            if (event.which == 27) {
                                $(BackgroundSettings).remove();
                            }
                        });
                        var BackgroundIndexP = $("<p>", {
                            'class': "BackgroundIndexP",
                            'html': "Index of Wallpaper",
                            css: cssstyle
                        }).appendTo($(BackgroundSettings));

                        var BackgroundIndexInput = $("<input>", {
                            'type': "number",
                            'min': 0,
                            'max': 9,
                            'class': "BackgroundIndexInput",
                            'val': x,
                            css: cssstyle
                        }).appendTo($(BackgroundSettings));

                        var BackgroundNameP = $("<p>", {
                            'class': "BackgroundNameP",
                            'html': "Name of Wallpaper",
                            css: cssstyle
                        }).appendTo($(BackgroundSettings));

                        var BackgroundNameInput = $("<input>", {
                            'class': "BackgroundNameInput",
                            'val': ThemeSettings.Images[x].Name,
                            css: cssstyle
                        }).appendTo($(BackgroundSettings));

                        var BackgroundUrlP = $("<p>", {
                            'class': "BackgroundUrlP",
                            'html': "URL of Wallpaper",
                            css: cssstyle
                        }).appendTo($(BackgroundSettings));

                        var BackgroundUrlInput = $("<input>", {
                            'class': "BackgroundUrlInput",
                            'val': ThemeSettings.Images[x].Link,
                            css: cssstyle
                        }).appendTo($(BackgroundSettings));

                        var BackgroundDelayP = $("<p>", {
                            'class': "BackgroundDelayP",
                            'html': "Delay between Wallpapers",
                            css: cssstyle
                        }).appendTo($(BackgroundSettings));

                        var BackgroundDelayInput = $("<input>", {
                            'class': "BackgroundDelayInput",
                            'val': ThemeSettings.Time,
                            css: cssstyle
                        }).appendTo($(BackgroundSettings));

                        var BackgroundDimP = $("<p>", {
                            'class': "BackgroundDimP",
                            'html': "Dimming of Wallpapers " + Math.trunc(opa * 100) + "%",
                            css: cssstyle
                        }).appendTo($(BackgroundSettings));

                        var BackgroundDimInput = $("<input>", {
                            'class': "BackgroundDimInput",
                            'type': "range",
                            'min': "0",
                            'max': "100",
                            'step': "1",
                            'val': Math.trunc(opa * 100),
                            css: cssstyle
                        }).appendTo($(BackgroundSettings));

                        var BackgroundRotateButton = $("<button>", {
                            'class': "BackgroundRotateButton",
                            'html': "Wallpaper Rotation " + GetRotationstring(),
                            css: cssstyle
                        }).appendTo($(BackgroundSettings));
                        addHover(BackgroundRotateButton, "FFA500");

                        var BackgroundTransparancyButton = $("<button>", {
                            'class': "BackgroundTransparancyButton",
                            'html': "Wallpaper Transparancy ",
                            css: cssstyle
                        }).appendTo($(BackgroundSettings));
                        addHover(BackgroundTransparancyButton, "FFA500");

                        var BackgroundThemeButton = $("<button>", {
                            'class': "BackgroundThemeButton",
                            'html': "Transparent Theme " + BdApi.Themes.isEnabled("BackgroundChanger Theme") ? 'ON' : 'OFF',
                            css: cssstyle
                        }).appendTo($(BackgroundSettings));
                        addHover(BackgroundThemeButton, "FFA500");
                        var BackgroundOkButton = $("<button>", {
                            'class': "BackgroundOkButton",
                            'html': "Save Settings",
                            css: cssstyle
                        }).appendTo($(BackgroundSettings));
                        addHover(BackgroundOkButton, "90ee90");
                        var BackgroundChnageButton = $("<button>", {
                            'class': "BackgroundChnageButton",
                            'html': "Test Wallpaper",
                            css: cssstyle
                        }).appendTo($(BackgroundSettings));
                        addHover(BackgroundChnageButton, "90ee90");
                        var Helpbutton = $("<button>", {
                            'class': "Helpbutton",
                            'html': "HELP",
                            css: cssstyle
                        }).appendTo($(BackgroundSettings));
                        addHover(Helpbutton, "7ff7ff");
                        var BackgroundSettingsBack = $("<button>", {
                            "class": "BackgroundSettingsBack",
                            "html": "Back",
                            css: cssstyle
                        }).appendTo($(BackgroundSettings));
                        addHover(BackgroundSettingsBack, "7ff7ff");
                        BackgroundSettingsBack.click(function() {
                            $(BackgroundSettings).remove();
                        });
                        //Event to chnage Background and information when clicking the arrow Keys 
                        $(BackgroundIndexInput).bind('input', function() {
                            if (!ThemeSettings.Transparancy) {
                                inde = $(".BackgroundIndexInput").val();
                                $(BackgroundChnageButton).html("Test Wallpaper");
                                $(BackgroundOkButton).html("Save Settings");
                                $(".BackgroundNameInput").val(ThemeSettings.Images[inde].Name);
                                $(".BackgroundUrlInput").val(ThemeSettings.Images[inde].Link);
                                x = inde;
                                UpdateBackgroundImage(ThemeSettingsurl.Images[inde].Link);
                            }
                        });
                        $(BackgroundDelayInput).bind('input', function() {

                            if (!isNaN($(".BackgroundDelayInput").val())) {
                                ThemeSettings.Time = $(".BackgroundDelayInput").val();
                            }
                        });

                        //Turns on off Rotation on Buttonpress 
                        BackgroundRotateButton.click(function() {
                            Pause();
                            BackgroundRotateButton.html("Wallpaper Rotation " + GetRotationstring());

                        });
                        BackgroundTransparancyButton.click(function() {
                            if (ThemeSettings.Transparancy) {
                                ThemeSettings.Transparancy = false;
                                inde = $(".BackgroundIndexInput").val();
                                UpdateBackgroundImage(ThemeSettings.Images[inde].Link);

                            } else {
                                ThemeSettings.Transparancy = true;
                                UpdateBackgroundImage('');
                            }

                            BdApi.saveData("background", "Rotation", ThemeSettings.Rotation);
                            BdApi.saveData("background", "ThemeStatus", ThemeSettings.Transparancy);
                            BackgroundRotateButton.html("Wallpaper Rotation " + GetRotationstring());
                        })
                        BackgroundThemeButton.click(function() {
                            ThemeSettings.ThemeStatus = !ThemeSettings.ThemeStatus
                            BdApi.Themes.toggle("BackgroundChanger Theme");
                            $(".BackgroundThemeButton").html("Transparent Theme " + BdApi.Themes.isEnabled("BackgroundChanger Theme") ? 'ON' : 'OFF');
                            BdApi.saveData("background", "ThemeStatus", ThemeSettings.ThemeStatus);
                        });
                        //Sliderevent to see the dimming in real time
                        BackgroundDimInput.change(function() {
                            opa = BackgroundDimInput.val() / 100;
                            $("#app-mount").css("background", "rgba(0,0,0," + opa + ")");
                            BackgroundDimP.html("Dimming of Wallpapers " + Math.trunc(opa * 100) + "%");
                            BdApi.saveData("background", "Dim", ThemeSettings.Dim);
                        });
                        //Changes Background Picture to see if it works for you but doesnt save it to .json file
                        BackgroundChnageButton.click(function() {
                            $(this).html("Test Wallpaper ✓");
                            x = inde;
                            UpdateBackgroundImage(BackgroundUrlInput.val());
                        });
                        //Changes Background Picture + all other settings and saves the values to the .json file
                        BackgroundOkButton.click(function() {
                            $(this).html("Save Settings ✓");
                            let realindex = $(BackgroundIndexInput).val();
                            ThemeSettings.Images[realindex].Name = $(".BackgroundNameInput").val();
                            ThemeSettings.Images[realindex].Link = $(".BackgroundUrlInput").val();
                            if (!isNaN($(".BackgroundDelayInput").val())) {
                                ThemeSettings.Time = $(".BackgroundDelayInput").val();
                            }


                            $(".BackgroundOkButton").css("background", "springgreen");
                            if (ThemeSettings.Rotation) {
                                clearInterval(this.inter);
                                this.inter = setInterval(update, ThemeSettings.Time * 1000);
                            }
                            console.log(ThemeSettings);
                            SaveAllSettings();
                        });
                        Helpbutton.click(function() {
                            var HelpPage = $("<div>", {
                                'class': "HelpPage",
                                css: {
                                    "position": "absolute",
                                    "width": "100%",
                                    "height": $(BackgroundSettings).height() + "px",
                                    "top": "0%",
                                    "left": "0%",
                                    "font-size": "10px",
                                    "background-color": "#000000",
                                    "background-image": "linear-gradient(147deg, #000000 0%, #2c3e50 74%)",
                                    "color": "white",
                                    "border-radius": "50px",
                                    "padding-top": "10px",
                                    "padding-bottom": "10px",
                                    "overflow": "hidden"
                                }
                            }).appendTo($(BackgroundSettings));
                            HelpPage.focus();
                            var Helptexth1 = $("<h1>", {
                                'class': "Helptexth1",
                                'html': "<br>Helppage<br><br>",
                                css: {
                                    "position": "relative",
                                    "width": "80%",
                                    "height": "auto",
                                    "font-size": "40px",
                                    "margin": "10px 10%",
                                    "margin-top": "0",
                                    "text-align": "center",
                                }
                            }).appendTo($(".HelpPage"));
                            var Helptext = $("<pre>", {
                                'class': "Helptext",
                                'html': "Use Ctrl+Shift+^-9		to switch between your set wallpapers\
						<br>Use Ctrl+Shift+R		to switch between to a random image\
						<br>Use Ctrl+Shift+Space	to switch the Wallpaper rotation on and off\
						<br>Use Ctrl+Shift+Wheel	to in/decrease the delay by minutes\
						<br>Use Ctrl+Shift+Wheel	to in/decrease the delay by seconds\
						<br>Use Ctrl+Shift+ -/+		to in/decrease the background opacity\
						<br><br><br><pre style='text-align:center'> Plugin created by L7Yuki Gasai </pre>",
                                css: {
                                    "position": "relative",
                                    "width": "80%",
                                    "height": "auto",
                                    "font-size": "30px",
                                    "margin": "10px 10%",
                                    "margin-top": "0",
                                    "text-align": "left",
                                }
                            }).appendTo($(".HelpPage"));
                            var HelppageBack = $("<button>", {
                                "class": "HelppageBack",
                                "html": "Back",
                                css: {
                                    "position": "relative",
                                    "width": "80%",
                                    "height": "30px",
                                    "font-size": "20px",
                                    "margin": "5px 10%",
                                    "margin-top": "20px",
                                    "text-align": "center",
                                    "background": "white"
                                }
                            }).appendTo($(".HelpPage"));
                            HelppageBack.click(function() {
                                $(HelpPage).remove();
                            })
                        });
                    }
                });
            }
        }
        
        WallpaperIO();
        */
        if (ThemeSettings.Rotation) this.inter = setInterval(update, ThemeSettings.Time * 1000);

    }
    initialize() {}
    stop() {

        clearInterval(this.inter);    

    }
}