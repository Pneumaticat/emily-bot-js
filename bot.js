var Discord = require("discord.js");

var bot = new Discord.Client();

//Displays information when bot is ready
bot.on("ready", () => {
    console.log(`Ready on server in a total of ${bot.channels.length} channels on ${bot.servers.length} servers,
     for a total number of ${bot.users.length} users`);
});

//Logs new members when joining the server
bot.on("serverNewMember", (server, user) => {
    console.log(`New User "${user.username}" has joined "${server.name}"`);
    bot.sendMessage(server.defaultChannel, `"${user.username}" has joined this server`);
});

//Commands + Messages
bot.on("message", msg =>{
    //Enablind Block-Scoped Declarations
    "use strict";
    
    //set the prefix
    let prefix = "!";
    //Exit and stop if it's not there
    if(!msg.content.startsWith(prefix)) return;
    //To prevent Botception
    if(msg.author.bot) return;
    
    //Ping Pong!
    if(msg.content.startsWith(prefix + "ping")) {
        bot.sendMessage(msg, "pong!");
    }
    
    //Foobar!
    else if (msg.content.startsWith(prefix + "foo")) {
        bot.sendMessage(msg, "bar!");
    }
    
    //Avatar URL
    else if (msg.content.startsWith(prefix + "avatar")) {
        bot.reply(msg, "Here is the URL for your avatar: " + msg.author.avatarURL);
    }
    
     //Server Avatar URL
    else if (msg.content.startsWith(prefix + "serveravatar")) {
        bot.reply(msg, "Here is the URL of the servers avatar: " + msg.server.iconURL);
    }
    
    //Send Doge Image
    else if (msg.content.startsWith(prefix + "doge")) {
		bot.sendFile(msg, "doge.png", (err, sentMessage) => {
			if (err)
				console.log("Couldn't send image: ", err);
		});
	}
    });
    
//Searching for Errors, Debug MSG, etc
bot.on('error', e => { console.error(e);});
bot.on('warn',e => {console.warn(e); });
bot.on('debug', e => {console.info(e); });



bot.loginWithToken("censored");
