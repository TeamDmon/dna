const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', (message) => {    

    if (message.content == 'ping') {
        message.channel.sendMessage('pong');
    }
    
    // Commands
    
    if (message.content == '!bunkerlink') {
        message.delete(message);
        message.channel.sendMessage('https://piratesbunker.tumblr.com/');
    }

    if (message.content == '!id') {
        message.reply("Your discord is " + message.author.username + "#" + message.author.discriminator);
    }
    
    if (message.content == '!help') {
        message.channel.sendMessage('**DNA Bot (Commands)** \n !bunkerlink - ???');
    }
    
    
    // Banned Words
    
    msg = message.content.toLowerCase(); // Ignore Case
    
    if (msg.includes('nigger') || msg.includes('niggers')) {
        message.delete(message);
    }
    
    if (msg.includes('kike') || msg.includes('kikes')) {
        message.delete(message);
    }
    
    if (msg.includes('kike') || msg.includes('kikes')) {
        message.delete(message);
    }
    
});

client.login(process.env.BOT_TOKEN);
