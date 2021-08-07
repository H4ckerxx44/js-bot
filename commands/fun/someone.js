const Commando = require("discord.js-commando");

module.exports = class AddCommand extends Commando.Command
{
    constructor(client)
    {
        super(client, {
            name: "someone",
            group: "fun",
            memberName: "someone",
            description: "pings someone",
            argsType: "multiple"
        })
    }

    async run(message, args)
    {
        let random_person = (await message.guild.members.fetch()).random().user;
        await message.channel.send(`${random_person}`);
    }
}
// Done