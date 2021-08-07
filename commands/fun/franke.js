const Commando = require("discord.js-commando");

module.exports = class AddCommand extends Commando.Command
{
    constructor(client)
    {
        super(client, {
            name: "franke",
            group: "fun",
            memberName: "franke",
            description: "wir kennen ihn alle",
            argsType: "single"
        })
    }

    async run(message, args)
    {
        await message.channel.send("Soooooooooooooo")
        await message.delete();
    }
}
// Done