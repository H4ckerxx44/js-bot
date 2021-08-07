const Commando = require("discord.js-commando");

module.exports = class AddCommand extends Commando.Command
{
    constructor(client)
    {
        super(client, {
            name: "random",
            group: "fun",
            memberName: "random",
            description: "Wählt random etwas aus 2 argumenten aus",
            argsType: "multiple"
        })
    }

    async run(message, args)
    {
        await message.channel.send(`${args[Math.floor(Math.random() * args.length)]}`);
    }
}
