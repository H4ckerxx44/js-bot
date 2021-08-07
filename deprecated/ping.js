module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(message, args)
    {
        message.channel.send("Pong!");
        const like = client.emojis.find(emoji => emoji.name === "like");
        const dislike = client.emojis.find(emoji => emoji.name === "dislike");

        message.react(like);
        message.react(dislike);
        },
};
