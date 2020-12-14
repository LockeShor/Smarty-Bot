module.exports = {
    name: 'youtube',
    description: "Check the official youtube of SmartEntity!",
    execute(message, args, client){
        message.channel.send('https://www.youtube.com/channel/UCY3xEi428Ty5jQ2AuX2aYgw');
        console.log(`youtube link posted`);
        client.channels.cache.get('788065072898768976').send(`youtube link posted`);
    }}