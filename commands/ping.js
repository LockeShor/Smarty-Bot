module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args, client){
        message.channel.send('pong!');
        console.log(`ping was ponged`);
        client.channels.cache.get('788065072898768976').send(`ping was ponged`);
    }
}