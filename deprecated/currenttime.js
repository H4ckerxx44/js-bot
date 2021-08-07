module.exports = {
    name: 'currenttime',
    description: 'get the current time with output of seperate attrs',
    execute(message, args)
    {
        date = new Date()
        message.channel.send(`date.now: ${Date.now()}
        full year: ${date.getFullYear()}
        month: ${date.getMonth()}
        day: ${date.getDay()}
        hours: ${date.getHours()}
        minutes: ${date.getMinutes()}
        seconds: ${date.getSeconds()}
        milliseconds: ${date.getMilliseconds()}
        getDate: ${date.getDate()}`);
    },
};
