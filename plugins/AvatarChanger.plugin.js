/**
 * @name AvatarChanger
 * @authorId 262613777357209601
 * @source https://github.com/YukiGasai/BetterDiscord/blob/master/plugins/AvatarChanger.plugin.js
 */

module.exports = class AvatarChanger {

	getSettingsPanel () {
        return `
        <div>
            <div>
                <input style="width:70%" placeholder="Path to Avatar Folder" id="PathInputAvatar"></input>
                <button onclick=' document.getElementById("PathInputAvatar").value  = BdApi.loadData("AvatarChanger", "AvatarPath");     '> LOAD </button>
                <button onclick=' 
                BdApi.saveData("AvatarChanger", "AvatarPath", "" + document.getElementById("PathInputAvatar").value ); 
                BdApi.Plugins.toggle("AvatarChanger");
                BdApi.Plugins.toggle("AvatarChanger");
                '> SAVE </button>
                <button onclick='
                    require("child_process").exec("start " + BdApi.loadData("AvatarChanger", "AvatarPath"));
                '> OPEN </button>
			</div>
			<br>
			<div>
				<input style="width:70%" placeholder="Path to Discord Console" id="PathInputConsole"></input>
				<button onclick=' document.getElementById("PathInputConsole").value  = BdApi.loadData("AvatarChanger", "ConsolePath");     '> LOAD </button>
				<button onclick='
					BdApi.saveData("AvatarChanger", "ConsolePath", "" + document.getElementById("PathInputConsole").value ); 
					BdApi.Plugins.toggle("AvatarChanger");
					BdApi.Plugins.toggle("AvatarChanger");
				'> SAVE </button>
			</div>
			<br>
			<div>
				<input style="width:70%" placeholder="Discord Token" id="InputToken"></input>
				<button onclick=' document.getElementById("InputToken").value  = BdApi.loadData("AvatarChanger", "DiscordToken");     '> LOAD </button>
				<button onclick=' 
				BdApi.saveData("AvatarChanger", "DiscordToken", "" + document.getElementById("InputToken").value ); 
				BdApi.Plugins.toggle("AvatarChanger");
				BdApi.Plugins.toggle("AvatarChanger");
				'> SAVE </button>
			</div>
        </div>
        `;
    };

	getName () {return "AvatarChanger";}

	getDescription () {return "Random Avatar";}

	getVersion () {return "1.3.0";}

	getAuthor () {return "L7Yuki Gasai";}

	//legacy
	load () {}

	start () {

	const fs = require("fs")
	const cp = require('child_process');
	const AvatarChangerSettings = {
		AvatarFolderPath : '',
		AvatarPathForConsole : '',
		DiscordConsolePath : '',
		DiscordToken: ''
	}

	AvatarChangerSettings.AvatarFolderPath = BdApi.loadData("AvatarChanger", "AvatarPath");
	if(AvatarChangerSettings.AvatarFolderPath == undefined){
		return 
	}
	AvatarChangerSettings.DiscordConsolePath = BdApi.loadData("AvatarChanger", "ConsolePath");
	if(AvatarChangerSettings.DiscordConsolePath == undefined){
		return 
	}
	AvatarChangerSettings.DiscordToken = BdApi.loadData("AvatarChanger", "DiscordToken");
	if(AvatarChangerSettings.DiscordToken == undefined){
		return 
	}

	fs.readdir(AvatarChangerSettings.AvatarFolderPath , function (err, Filearray) {
		if (err) console.log('Unable to scan ' + AvatarChangerSettings.AvatarFolderPath  + " :" + err);

		var index = Math.floor(Math.random() * Filearray.length);

		if(AvatarChangerSettings.AvatarFolderPath[AvatarChangerSettings.AvatarFolderPath.length-1] == "\\")
		{
			AvatarChangerSettings.AvatarPathForConsole  = AvatarChangerSettings.AvatarFolderPath  + Filearray[index];
		}else{
			AvatarChangerSettings.AvatarPathForConsole  = AvatarChangerSettings.AvatarFolderPath + "\\"  + Filearray[index];
		}
		AvatarChangerSettings.AvatarPathForConsole  = AvatarChangerSettings.AvatarPathForConsole.replace(/\\/g,'\\\\');


		cp.execFile(AvatarChangerSettings.DiscordConsolePath,
		[
			'-t',
			`"user ${AvatarChangerSettings.DiscordToken}"`,
			'-x',
			`avatar ${AvatarChangerSettings.AvatarPathForConsole}`
		],
		{},
		(data,err)=>{
			if(err) console.log(err);

			else console.log(data.toString()); 
		})
	});
  }

	initialize(){}

	stop(){}

}
