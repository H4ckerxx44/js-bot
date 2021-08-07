module.exports = {
    name: 'newdate',
    description: 'generate a new date with given args',
    execute(message, args)
    {
        tempdate = new Date(args[0], args[1], args[2], args[3], args[4], args[5])
        message.channel.send(`date created with following args
        year: ${args[0]}, 
        month: ${args[1]}, 
        day: ${args[2]}, 
        hour: ${args[3]}, 
        minute: ${args[4]}, 
        second: ${args[5]}`);
        message.channel.send(`${tempdate}`);
    },
};
