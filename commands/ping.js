const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  isBotPrefixRequired: true,
  description: "Determine bot latency",
  usage: "",
  clientRequired: true,
  execute(msg, args) {
    const client = args[0];
    const latencyms = Date.now() - msg.createdTimestamp;

    const pongMsg = new MessageEmbed().setColor("#7f1489");

    pongMsg.setTitle("Pong!");
    pongMsg.setDescription(
      `Bot latencies:\n**Bot**: ${latencyms}ms\n**API**: ${Math.round(
        client.ws.ping
      )}ms`
    );

    msg.channel.send(pongMsg);
    
  },
};
