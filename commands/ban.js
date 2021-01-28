module.exports = {
    name: "ban",
    description: "Ban a member of the server.",
    execute(message, _args, client) {
        const member = message.mentions.users.first();
        if (message.member.roles.cache.has('760587977021063188')) {
            if (member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.channel.send('Member has been banned.')
                console.log(`${member} was banned`);
                client.channels.cache.get('788065072898768976').send(`${member} was banned.`);
            } else {
                message.channel.send('Ban Failed.');
            }
        } else {
            message.channel.send('This command is not available to your rank. Contact Redpug111#1111 if you believe this to be a bug.');
        }
    }
}