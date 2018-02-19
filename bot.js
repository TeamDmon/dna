const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";

var fortunes = [
    "It is certain.",
    "Without a doubt.",
    "As I see it, yes.",
    "Don\'t count on it.",
    "My sources say no.",
    "Outlook not so good."
]

client.on("message", (message) => {
    // client.user.setActivity("!help", {type: "PLAYING"});
    
    //
    // Commands
    //
    // if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.send("pong");
            break;

        case "help":
            message.channel.send("**[DNA Bot]** - Moderation Bot\n\n**!help** ~~                                   ~~ this *very* page.\n**!bunker** ~~                              ~~ link to *The Bunker*\n**!8ball <question>** ~~           ~~ ask magic 8 ball a question.");
            break;

        case "8ball":
            if (args[1]) message.reply(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.reply("Can't read that");
            break;

        case "bunker":
            message.delete(message);
            message.channel.send("https://piratesbunker.tumblr.com/");
            break;

        case "purge5":

            break;

        case "purge10":

            break;
    }
    
    //
    // Banned Words
    //
    var bannedWords = ["nigger", "niggger", "n i g g e r", "niggers", "nigggers", "n i g g e rs"];
    msg = message.content.toLowerCase();

    for (i = 0; i < bannedWords.length; i++) {
        if (msg.includes(bannedWords[i])) {
            message.delete(message);
        }
    }

    //
    // Exposure Prevention
    //
    if (msg.includes("jacob") && msg.includes("bunker")) {
        message.delete(message);
    }

    if (msg.includes("mejko") && msg.includes("bunker")) {
        message.delete(message);
    }
});

client.on("guildMemberUpdate", (oldMember, newMember) => {
    var bannedChars = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "_"];

    for (i = 0; i < bannedChars.length; i++) {
        if (newMember.displayName.startsWith(bannedChars[i])) {
            newMember.setNickname(oldMember.displayName);
        }
    }
});

client.login(process.env.BOT_TOKEN);
