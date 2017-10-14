module.exports = async(client, message, args) => {
    /**
     * Shortcut to disable the farewell
     * @param {Client} client The bot instance
     * @param {Object} message The message which triggered this shortcut
     * @param {Array} args The splitted arguments
     */
    return new Promise(async(resolve, reject) => {
        const guildEntry = client.guildData.get(message.guild.id);
        guildEntry.onEvent.guildMemberRemove.farewell.enabled = false;
        client.guildData.set(message.guild.id, guildEntry);
        resolve(await message.channel.send(`:white_check_mark: Alright, the farewell is now disabled`));
    });
}