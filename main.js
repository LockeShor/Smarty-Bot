const Discord = require('discord.js');

const client = new Discord.Client();

const config = require("./config.json");

const fs = require('fs');

const ms = require('ms');

const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection();

const commandfiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandfiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

client.once('ready', () =>{
    console.log('Bot activated!');
    memberCounter(client);
});

client.on('message', message =>{
    if(!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args, client);
    } else if (command == 'youtube'){
        client.commands.get('youtube').execute(message, args, client);
    } else if (command == 'report'){
        client.commands.get('report').execute(message, args, client);
    } else if (command == 'Smarty_Bot'){
        client.commands.get('Smarty_Bot').execute(message, args, client);
    } else if (command == 'kick'){
        client.commands.get('kick').execute(message, args, client);
    } else if (command == 'ban'){
        client.commands.get('ban').execute(message, args, client);
    } else if (command == 'mute'){
        client.commands.get('mute').execute(message, args, client);
    }  else if (command == 'unmute'){
        client.commands.get('unmute').execute(message, args, client);
    }  else if (command == 'bugreport'){
        client.commands.get('bugreport').execute(message, args, client);
    } else if (command == 'help'){
        client.commands.get('help').execute(message, args, client);
    } else if (command == 'clear'){
        client.commands.get('clear').execute(message, args, client);
    }
});

client.login(config.token);