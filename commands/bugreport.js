
module.exports = {
    name: 'bugreport',
    description: "report a bug to bot dev.",
    execute(message, args, client){
       const reason = args.slice(0).join(' ');
        client.users.fetch('481178930326405123').then((user) => {
             user.send(`Bug Report:\nReported by <@${message.author.id}>.\nReason: ${reason}`);
        }
        ,)}}