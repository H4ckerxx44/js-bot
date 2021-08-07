const Commando = require("discord.js-commando");

module.exports = class AddCommand extends Commando.Command
{
    constructor(client)
    {
        super(client, {
            name: "cmd name",
            group: "cmd group",
            memberName: "cmd membername (kp)",
            description: "cmd desc",
            argsType: "multiple"
        })
    }

    async run(message, args)
    {
        //
    }
}
