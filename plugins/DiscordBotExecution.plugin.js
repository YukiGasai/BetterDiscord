/**
 * @name DiscordBotExecution
 * @authorId 262613777357209601
 * @source https://github.com/YukiGasai/BetterDiscord/blob/master/plugins/DiscordBotExecution.plugin.js
 */

 var client;

module.exports = class DiscordBotExecution {

	getSettingsPanel () {
		const fs = require('fs'); 
		const path = require('path');
		let html = fs.readFileSync( path.join(BdApi.Plugins.folder,'DiscordBotExecution.settings.html'),'utf8');
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

		client = new Discord.Client();

		client.on('ready', () => {
			console.log(`Logged in as ${client.user.tag}!`);
		});

		client.on('message', msg => {
		  if (msg.content === 'ping') {
			client.users.fetch(msg.author.id)
			.then(user => {
				var shit = user.avatarURL;
				msg.reply(shit);
			})
			.catch(console.error);
		   
		  }
		});

		client.login(token);

    }

    stop(){
		client.destroy();
	}
}
