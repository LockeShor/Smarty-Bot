module.exports = {
    name: 'kick',
    description: "kick a member of the server.",
    execute(message, args, client){
       const member = message.mentions.users.first();
       if(message.member.roles.cache.has('786317746513379389')){
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                message.channel.send('Member has been kicked')
                console.log(`${member} was kicked`);
                client.channels.cache.get('788065072898768976').send(`${member} was kicked`);
            } else{
                message.channel.send('Kick Failed')
       } } else {
        message.channel.send('This command is not available to your rank. contact Redpug111#1111 if you believe this to be a bug.');
    }
    }}