module.exports = {
  name: "raid",
  description: "Raid command",
  aliases: ["raiding"],
  usage: "",
  clientRequired: true,
  execute(msg, args) {
    msg.channel.send(
      "https://cdn.discordapp.com/attachments/453953489933041686/824316792369184838/RaidRaidRaid.gif"
    );
  },
};
