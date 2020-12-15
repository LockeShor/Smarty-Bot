const fs = require('fs')
module.exports = {
    name: 'help',
    description: "Display all commands!",
    execute(message, args, client){
        txt = fs.readFile('helpfile.txt', (err, data) => { 
            if (err) throw err; 
          
            message.channel.send(data.toString());
        }) 

        console.log(`help command used`);
        client.channels.cache.get('788065072898768976').send(`help command used`);
    }
}