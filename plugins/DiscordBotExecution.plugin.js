/**
 * @name DiscordBotExecution
 * @authorId 262613777357209601
 * @source https://github.com/YukiGasai/BetterDiscord/blob/master/plugins/DiscordBotExecution.plugin.js
 */

 var DiscordBotClient;

module.exports = class DiscordBotExecution {

	getSettingsPanel () {
        var fs = require('fs'); 
        var html = fs.readFileSync(BdApi.Plugins.folder + '\\DiscordBotExecution.settings.html','utf8');
        return html;
    };

	getName() { return "DiscordBotExecution"; }

	getDescription() { return "DiscordBotExecution"; }

	getVersion() { return "1.2.0"; }

	getAuthor() { return "L7Yuki Gasai"; }

	//legacy
    load() {}
    
    start(){

		const token = BdApi.loadData("DiscordBotExecution", "BotToken");
	
		const Discord = require('discord.js');
		DiscordBotClient = new Discord.Client();

		DiscordBotClient.on('ready', () => {
			console.log(`Logged in as ${DiscordBotClient.user.tag}!`);
		});

		DiscordBotClient.on('message', msg => {
		  if (msg.content === 'ping') {
		    msg.reply('pong');
		  }
		});

		DiscordBotClient.login(token);

    }

    stop(){
		DiscordBotClient.destroy();
	}
}
