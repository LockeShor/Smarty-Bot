module.exports = {
    name: 'clear',
    description: "clear some messages!",
    async execute(message, args, client){
        if(message.member.roles.cache.has('786317746513379389')){

        if(!args[0]) return message.reply("please enter the amount of messages to clear!");
        if(isNaN(args[0])) return message.reply("please enter a numerical value!");

        if(args[0] > 100) return message.reply("you can't delete more that 100 messages");
        if (args[0] < 1) return message.reply("invalid number");
        
        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
            console.log(`<@${message.author.id}> deleted ${args[0]} messages`)
            client.channels.cache.get('788065072898768976').send(`<@${message.author.id}> deleted ${args[0]} messages`);
        });
    } else {
        message.channel.send('This command is not available to your rank. contact Redpug111#1111 if you believe this to be a bug.');
}}}