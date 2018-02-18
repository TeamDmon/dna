const Discord = require('discord.js');
const client = new Discord.Client();

client.user.setPresence({ status: 'online', game: { name: '!help' } });

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

client.login(process.env.BOT_TOKEN);
