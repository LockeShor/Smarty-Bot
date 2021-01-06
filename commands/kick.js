module.exports = {
    name: 'kick',
    description: "Kick a member of the server.",
    execute(message, _args, client) {
        const member = message.mentions.users.first();
        if (message.member.roles.cache.has('786317746513379389')) {
            if (member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                message.channel.send('Member has been kicked.')
                console.log(`${member} was kicked.`);
                client.channels.cache.get('788065072898768976').send(`${member} was kicked.`);
            } else {
                message.channel.send('Kick failed.')
            }
        } else {
            message.channel.send('This command is not available to your rank. Contact Redpug111#1111 if you believe this to be a bug.');
        }
    }
}