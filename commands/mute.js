const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "Mute a member of the server.",
    execute(message, args, client) {
        if (message.member.roles.cache.has('786317746513379389')) {
            const target = message.mentions.users.first();
            if (target) {
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Clone troopers');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Smart Mute (for Redpug\'s Bot)');

                let memberTarget = message.guild.members.cache.get(target.id);

                if (!args[1]) {
                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> has been muted.`)
                    console.log(`${target} was muted`);
                    client.channels.cache.get('788065072898768976').send(`${target} was muted.`);
                    return
                }
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}.`);
                console.log(`${target} was muted for ${ms(ms(args[1]))}`);
                client.channels.cache.get('788065072898768976').send(`${target} was muted for ${ms(ms(args[1]))}.`);

                setTimeout(function() {
                    memberTarget.roles.remove(muteRole.id);
                    memberTarget.roles.add(mainRole.id);
                    console.log(`${target} was auto unmuted.`);
                    client.channels.cache.get('788065072898768976').send(`${target} was auto unmuted.`);
                }, ms(args[1]));
            } else {
                message.channel.send('Mute failed.')
            }
        } else {
            message.channel.send('This command is not available to your rank. Contact Redpug111#1111 if you believe this to be a bug.');
        }
    }
}