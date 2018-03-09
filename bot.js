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
];

client.on("message", (message) => {
    // client.user.setActivity("!help", {type: "PLAYING"});
    
    //
    // Commands
    //

    msg = message.content.toLowerCase();
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
            message.delete();
            message.channel.send("https://piratesbunker.tumblr.com/");
            break;

        case "stream":
            message.reply("For live updates on when MEJKO goes live, follow\n:point_right: https://twitch.tv/MEJKOmusic");
            break;
            
        case "nightpulselucient":
            message.delete();
            message.channel.send("Obvious yet again, <@414202286848344075> is Lucient undercover.");
            break;

    }
    
    //
    // Banned Words
    //
    var bannedWords = [
        "nigger",
        "niggger",
        "n i g g e r",
        "niggers",
        "nigggers",
        "n i g g e r s",
        "discord.gg",
        "discord.me",
        "ben shapiro",
        "jordan peterson",
        "femenazi"
    ];

    for (i = 0; i < bannedWords.length; i++) {
        if (msg.includes(bannedWords[i])) {
            message.delete();
        }

        if (msg.includes("discord.me/dna")) return;
    }

    //
    // Exposure Prevention
    //
    if (msg.includes("jacob") && msg.includes("bunker")) {
        message.delete();
    }

    if (msg.includes("mejko") && msg.includes("bunker")) {
        message.delete();
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

client.on("guildMemberAdd", member => {
    member.guild.defaultChannel.send(`Welcome ${member}! Please take the time to look over our <#412464152293146634>.`);
});

client.login(process.env.BOT_TOKEN);
