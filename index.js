// packages
const Commando = require("discord.js-commando");
const path = require("path");

// config
const config = require("./config.json");

// bot setup
const client = new Commando.CommandoClient({
    owner: "244822137490112512",
    commandPrefix: config.prefix
});

client.registry
    .registerGroups([
        ["misc", "misc commands"],
        ["fun", "fun commands"],
        ["utility", "utility commands"],
        ["aufgaben", "commands die wir machen sollen"],
        ["mod", "moderation stuff"]
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, "commands"))


// fires when bot disconnects
client.on("disconnect", () => { console.log("disconnected"); });

// fires when bot is ready
client.on("ready", () => { console.log(`logged in as ${client.user.tag} / ${client.user.id}`); });

// client.on('message', message => { console.log(`saw ${message.content}`); });

// logs the bot in
client.login(config.token);
