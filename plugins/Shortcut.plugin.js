//META{"name":"Shortcut"}*//

class Shortcut {
    constructor() { }

    getName() { return "Shortcut"; }

    getDescription() { return "Creates Shortcuts to start Programs"; }

    getVersion() { return "1.0.0"; }

    getAuthor() { return "L7Yuki Gasai"; }

    //legacy
    load() {
        var fs = require('fs');
        var filepath1 = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'] + "\\AppData\\Roaming\\BetterDiscord\\plugins\\Shortcut.config.json";
        //CREATES SETTINGS FILE
        fs.exists(filepath1, function (exists) {
            if (!exists) {
                fs.writeFileSync(filepath1, '{"Programs":[{"Name":"Visual Code","Path":"C:\\Users\\Richard\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe"},{"Name":"Minecraft","Path":"E:\\Games\\Minecraft\\MinecraftLauncher.exe"}]}', { flag: 'wx' }, function (err, data) { })
            }
        });
    }

    start() {

        var fs = require('fs');
        var exec = require('child_process').execFile;
        var settings;
        var Buttons = [];
        var currentProgram = 0;
        var addbool = true;
        function readTextFile(file, callback) {
            let filepath = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'] + file;
            callback(fs.readFileSync(filepath));
        };

        function saveTextFile(value, file) {
            let filepath = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'] + file;
            fs.writeFileSync(filepath, value, function (err) {
                if (err) {
                    console.log(err);
                }
            });
        }

        function startexe(filepath) {
            console.log("fun() start");
            exec(filepath, function (err, data) {
                console.log(err)
                console.log(data.toString());
            });
        }

        readTextFile("\\AppData\\Roaming\\BetterDiscord\\plugins\\Shortcut.config.json", function (text) {
            settings = JSON.parse(text);
            console.log(settings);
        });

        function erstellen() {

            var cssstyle = {
                "position": "relative",
                "width": "80%",
                "height": "25px",
                "font-size": "20px",
                "margin": "5px 10%",
                "text-align": "center",
                "transition": "all 1s"
            }

            if ($("#OptionLink").length) {


            } else if ($(".scroller-2FKFPG.members-1998pB").length && $(".membersGroup-v9BXpm").length) {

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
                        "transition": "all 0.4s ease-in-out "
                    }
                });
                $(".scroller-2FKFPG.members-1998pB").prepend($(OptionLink));

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
                            'max': settings.Programs.length - 1,
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
                            'val': settings.Programs[currentProgram].Name,
                            css: cssstyle
                        }).appendTo(ShortcutSettings);

                        var ShortcutPathP = $("<p>", {
                            'class': "ShortcutPathP",
                            'html': "Path of EXE",
                            css: cssstyle
                        }).appendTo(ShortcutSettings);

                        var ShortcutPathInput = $("<input>", {
                            'class': "ShortcutPathInput",
                            'val': settings.Programs[currentProgram].Path,
                            css: cssstyle
                        }).appendTo(ShortcutSettings);

                        var ShortcutIconP = $("<p>", {
                            'class': "ShortcutIconP",
                            'html': "URL of ICON",
                            css: cssstyle
                        }).appendTo(ShortcutSettings);

                        var ShortcutIconInput = $("<input>", {
                            'class': "ShortcutIconInput",
                            'val': settings.Programs[currentProgram].Icon,
                            css: cssstyle
                        }).appendTo(ShortcutSettings);

                        var ShortcutDeleteButton = $("<button>", {
                            'html': "DELTE",
                            'class': "ShortcutDeleteButton",
                            css: cssstyle
                        }).css({
                            "background": "tomato"
                        }).appendTo(ShortcutSettings);

                        var ShortcutAddButton = $("<button>", {
                            'html': "Add",
                            'class': "ShortcutAddButton",
                            css: cssstyle
                        }).css({
                            "background": "lightgreen"
                        }).appendTo(ShortcutSettings);

                        var ShortcutSaveButton = $("<button>", {
                            'html': "Change",
                            'class': "ShortcutSaveButton",
                            css: cssstyle
                        }).css({
                            "background": "lightgreen"
                        }).appendTo(ShortcutSettings);

                        $(ShortcutIndexInput).bind('input', function () {
                            currentProgram = $(".ShortcutIndexInput").val();
                            $(".ShortcutNameInput").val(settings.Programs[currentProgram].Name);
                            $(".ShortcutPathInput").val(settings.Programs[currentProgram].Path);
                            $(".ShortcutIconInput").val(settings.Programs[currentProgram].Icon);

                        });

                        $(ShortcutDeleteButton).click(function () {
                            settings.Programs.splice(currentProgram, 1);

                            var Jsontext = JSON.stringify(settings);
                            saveTextFile(Jsontext, "\\AppData\\Roaming\\BetterDiscord\\plugins\\Shortcut.config.json");

                            Buttons.forEach(Button => {
                                Button.remove();
                            });
                            $(ShortcutSettings).remove();
                            $(OptionLink).remove();


                        });

                        $(ShortcutAddButton).click(function () {
                            if (addbool) {
                                $(".ShortcutIndexInput").val(settings.Programs.length);
                                $(".ShortcutNameInput").val("");
                                $(".ShortcutPathInput").val("");
                                $(".ShortcutIconInput").val("");
                                addbool = false;
                            } else {
                                settings.Programs.push({
                                    "Name": $(".ShortcutNameInput").val(),
                                    "Path": $(".ShortcutPathInput").val().replace("\\", "\\\\"),
                                    "Icon": $(".ShortcutIconInput").val()
                                })

                                addbool = true;
                                var Jsontext = JSON.stringify(settings);
                                saveTextFile(Jsontext, "\\AppData\\Roaming\\BetterDiscord\\plugins\\Shortcut.config.json");

                                Buttons.forEach(Button => {
                                    Button.remove();
                                });
                                $(ShortcutSettings).remove();
                                $(OptionLink).remove();

                            }
                        });

                        $(ShortcutSaveButton).click(function () {
                            settings.Programs[currentProgram].Name = $(".ShortcutNameInput").val();
                            settings.Programs[currentProgram].Path = $(".ShortcutPathInput").val();
                            settings.Programs[currentProgram].Icon = $(".ShortcutIconInput").val();

                            var Jsontext = JSON.stringify(settings);
                            saveTextFile(Jsontext, "\\AppData\\Roaming\\BetterDiscord\\plugins\\Shortcut.config.json");

                            Buttons.forEach(Button => {
                                Button.remove();
                            });
                            $(ShortcutSettings).remove();
                            $(OptionLink).remove();
                        });
                    }
                });

                for (var i = 0; i < settings.Programs.length; i++) {
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
                            "background": 'url("' + settings.Programs[i].Icon + '")',
                            "background-Size": 'cover',
                            "transition": "all 0.4s ease-in-out "
                        }

                    });

                    $(Link).click(function () {
                        var inde = $(this).attr('id')
                        inde = parseInt(inde, 10);
                        var exepath = settings.Programs[inde].Path;
                        if (exepath.includes("http")) {
                            window.open(exepath);
                        } else {
                            fs.exists(exepath, function (exists) {
                                if (exists) {
                                    startexe(exepath);
                                }
                            })
                        }
                    });

                    $(Link).hover(
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

                    $(".scroller-2FKFPG.members-1998pB").prepend($(Link));

                    Buttons.push(Link);
                }

            }
        }


        setInterval(erstellen, 1000);

    }

    stop() { }

}
