module.exports = {
    name: 'userinfo',
    description: 'basic userinfo',
    execute(message, args)
    {
        message.channel.send(`author: ${message.author}\nid: ${message.author.id}\naccount creation date: ${message.author.createdAt}\n`);
    },
};
