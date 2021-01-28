const { ReactionCollector } = require("discord.js");

module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, _args, Discord, client) {
        const channel = '788235574611410984';
        const minecraft = message.guild.roles.cache.find(role => role.name === "Minecrafters");
        const amongUs = message.guild.roles.cache.find(role => role.name === "Among Us");

        const minecraftEmoji = client.emojis.cache.get("788407942490882048");
        const amongUsEmoji = client.emojis.cache.get("788407780729290803");

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Select a role!')
            .setDescription(`Select a role to decide what games you like to play!\n\n
                ${minecraftEmoji} for Minecraft.\n
                ${amongUsEmoji} for Among Us.`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(minecraftEmoji);
        messageEmbed.react(amongUsEmoji);

        client.on('messageReactionAdd', async(reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === minecraftEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(minecraft);
                }
                if (reaction.message.channel.id == channel) {
                    if (reaction.emoji.name === amongUsEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(amongUs);
                    }
                } else {
                    return;
                }
            }
        })
        client.on('messageReactionRemove', async(reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === minecraftEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(minecraft);
                }
                if (reaction.message.channel.id == channel) {
                    if (reaction.emoji.name === amongUsEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(amongUs);
                    }
                } else {
                    return;
                }
            };

        })
    }
}