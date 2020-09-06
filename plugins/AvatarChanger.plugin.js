/**
 * @name AvatarChanger
 * @authorId 262613777357209601
 * @source https://github.com/YukiGasai/BetterDiscord/blob/master/plugins/AvatarChanger.plugin.js
 */

module.exports = class AvatarChanger {

	getSettingsPanel () {
		const fs = require('fs'); 
		const path = require('path');
		let html = fs.readFileSync( path.join(BdApi.Plugins.folder,'AvatarChanger.settings.html'),'utf8');
        return html;
    };

	getName () {return "AvatarChanger";}

	getDescription () {return "Random Avatar";}

	getVersion () {return "1.3.0";}

	getAuthor () {return "L7Yuki Gasai";}

	//legacy
	load () {}

	start () {

	const fs = require("fs")
	const os = require("os");
	const path = require('path');
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

		AvatarChangerSettings.AvatarPathForConsole  = path.join(AvatarChangerSettings.AvatarFolderPath , Filearray[index]);

		if(os.platform="win32")
		AvatarChangerSettings.AvatarPathForConsole  = AvatarChangerSettings.AvatarPathForConsole.replace(/\\/g,'\\\\');


		cp.exec(AvatarChangerSettings.DiscordConsolePath + ' -t ' + '"user ' + AvatarChangerSettings.DiscordToken + '"' + ' -x ' + '"avatar ' + AvatarChangerSettings.AvatarPathForConsole + '"' );

	});
  }

	initialize(){}

	stop(){}

}
