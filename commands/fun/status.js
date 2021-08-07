const Commando = require("discord.js-commando");

module.exports = class AddCommand extends Commando.Command
{
    constructor(client)
    {
        super(client, {
            name: "status",
            group: "fun",
            memberName: "status",
            description: "change bot status",
            argsType: "multiple"
        })
    }

    async run(message, args)
    {
        let name = args[0]
        let type = args[1]
        let url = args[2]
        if (args.length === 2)
        {
            await this.client.user.setPresence({
                activity:
                    {
                        name: name,
                        type: type,
                    }
            })
        }
        else
        {
            await this.client.user.setPresence({
                activity:
                    {
                        name: name,
                        type: type,
                        url: url
                    }
            })
        }
        console.log(args);
    }
}
// Done
