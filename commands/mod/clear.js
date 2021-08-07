const Commando = require("discord.js-commando");

module.exports = class AddCommand extends Commando.Command
{
    constructor(client)
    {
        super(client, {
            name: "clear",
            group: "mod",
            memberName: "clear",
            description: "Löscht Nachrichten",
            argsType: "single"
        })
    }

    async run(message, args)
    {
        let msg_count = args[0] + 1
        if (isNaN(args[0])) return message.channel.send("invalid number, douchebag")
        if (args[0] >= 251) return message.channel.send("number has to be <= 250")
        await message.channel.bulkDelete(msg_count)
            .then(message => message.channel.send(`deleted ${msg_count} messages`))
    }
}
