module.exports = {
    name: 'report',
    description: "Report another user.",
    execute(message, args, client) {
        const member = message.mentions.users.first();
        const reason = args.slice(1).join(' ');
        if (message.member.roles.cache.has('776810503401373696')) {
            if (member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                client.channels.cache.get('787362528694632488').send(`<@${memberTarget.user.id}> was reported by <@${message.author.id}> for ${reason}.`)
                message.channel.send('Member reported');
                console.log(`${member} was reported`);
                client.channels.cache.get('788065072898768976').send(`${member} was reported.`);
            } else {
                message.channel.send('Report Failed');
            }
        } else {
            message.channel.send('This command is not available to your rank. Contact Redpug111#1111 if you believe this to be a bug.');
        }
    }
}