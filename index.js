// packages
const Discord = require('discord.js');
const fs = require("fs");

// config
const config = require("./config.json");

// bot setup
const client = new Discord.Client();
client.commands = new Discord.Collection();

// command files
const commandFolders = fs.readdirSync('./commands');

// scan command-folders
for (const folder of commandFolders)
{
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));

    // register command files
    for (const file of commandFiles)
    {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

// fires when bot is ready
client.on("disconnect", () => { console.log("disconnected"); });

client.on("ready", () => { console.log("ready"); });


// fires when the bot sees a message
client.on('message', message => {
    // returns if the message does not begin with set prefix or if the message author is another bot
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    // splits the arguments into an array
    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    // removes the prefix from the array and turns it into lowercase
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    // tries to run the command
    try
    {
        client.commands.get(command).execute(message, args);
    }
    // on error, says it
    catch (error)
    {
        console.error(error);
        message.reply(`there was an error trying to execute ${command}!`);
    }
});

// logs the bot in
client.login(config.token)
