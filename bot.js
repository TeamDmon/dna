const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', (message) => {    
    
    msg = message.content.toLowerCase();

    if (msg.includes('nigger') || msg.includes('niggers')) {
        message.delete(message);
    }

    if (message.content == '!bunkerlink') {
        message.delete(message);
        message.channel.sendMessage('https://piratesbunker.tumblr.com/');
    }

    if (message.content == 'ping') {
        message.channel.sendMessage('pong');
    }

    if (message.content == '!id') {
        message.reply("Your discord is " + message.author.username + "#" + message.author.discriminator);
    }
});

bot.login(process.env.BOT_TOKEN);
