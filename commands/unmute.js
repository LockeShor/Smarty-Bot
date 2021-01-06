module.exports = {
    name: 'unmute',
    description: "unmute a member of the server.",
    execute(message, _args, client) {
        if (message.member.roles.cache.has('786317746513379389')) {
            const target = message.mentions.users.first();
            if (target) {
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Clone troopers');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Smart Mute (for Redpug\'s Bot)');

                let memberTarget = message.guild.members.cache.get(target.id);

                memberTarget.roles.add(mainRole.id);
                memberTarget.roles.remove(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been unmuted.`);
                console.log(`${target} was unmuted`);
                client.channels.cache.get('788065072898768976').send(`${target} was unmuted.`);

            } else {
                message.channel.send('Unmute Failed');
            }
        } else {
            message.channel.send('This command is not available to your rank. Contact Redpug111#1111 if you believe this to be a bug.');
        }
    }
}