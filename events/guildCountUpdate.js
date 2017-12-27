const request = require(`../util/modules/request.js`);

module.exports = async(client) => {
    //If no discord bot list api key is provided just return, else emit the guildCountUpdate event
    if (client.config.discordBotList) {
        const updateDbl = await request.post(`https://discordbots.org/api/bots/${client.user.id}/stats`, { server_count: client.guilds.size }, { header: `Authorization`, value: client.config.discordBotList });
        if (updateDbl.statusCode !== 200) client.emit('error', `Failed to update guild count on Discord Bot List: ${updateDbl.body}`);
    }
    if (client.config.discordBotFr) {
        const updateDbf = await request.post(`https://discordbot.takohell.com/api/v1/bots/${client.user.id}`, { server_count: client.guilds.size, shard_count: client.shards.size }, { header: `Authorization`, value: client.config.discordBotFr }, null, true);
        if (updateDbf.statusCode !== 200) client.emit('error', `Failed to update guild count on Discord Bot List fr: ${JSON.stringify(updateDbf.raw_body)}`);
    }
    if (client.config.terminalBotList) {
        const updateTerminal = await request.post(`https://ls.terminal.ink/api/v1/bots/${client.user.id}`, { server_count: client.guilds.size }, { header: `Authorization`, value: client.config.terminalBotList }, null, true);
        if (updateTerminal.statusCode !== 200) client.emit('error', `Failed to update guild count on terminal: ${updateTerminal.body}`);
    }
}