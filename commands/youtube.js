module.exports = async(client) => {
    const guild = client.guilds.cache.get('727995234964996196');
    let vc = client.channels.cache.get('787513197217054732');
    vc.join();
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('787513197217054732');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`)
            //console.log(`Updating Member Count`)
            //client.channels.cache.get('788065072898768976').send(`Updating Member Count`);
    }, 900000);
}