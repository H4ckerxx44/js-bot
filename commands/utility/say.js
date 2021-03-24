module.exports = {
    name: 'say',
    description: 'says the desired message',
    execute(message, args)
    {
        message.channel.send(`${args}`);
        console.log(args)
    },
};
