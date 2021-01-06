const fs = require('fs')
module.exports = {
    name: 'help',
    description: "Display all commands.",
    execute(message, _args, client) {
        txt = fs.readFile('helpfile.txt', (err, data) => {
            if (err) throw err;

            message.channel.send(data.toString());
        });
        console.log("Help command used.");
        client.channels.cache.get('788065072898768976').send("Help command used.");
    }
}