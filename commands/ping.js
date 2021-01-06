module.exports = {
    name: 'ping',
    description: "This is a ping command.",
    execute(message, _args, client) {
        message.channel.send('Pong!');
        console.log("Ping was ponged.");
        client.channels.cache.get('788065072898768976').send("Ping was ponged.");
    }
}