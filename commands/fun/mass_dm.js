const Commando = require("discord.js-commando");

module.exports = class AddCommand extends Commando.Command
{
    constructor(client)
    {
        super(client, {
            name: "mass_dm",
            group: "fun",
            memberName: "mass_dm",
            description: "mass dms members on the guild",
            argsType: "single"
        })
    }

    async run(message, args)
    {
        //
    }
}
