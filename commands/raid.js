module.exports = {
  name: "raid",
  description: "Raid command",
  aliases: ["raiding"],
  usage: "",
  allowAnywhere: true /* Rather than calling this as a command, this will be triggered if a user types this anywhere in their message */,
  clientRequired: true,
  execute(msg, args) {
    msg.channel.send(
      "https://cdn.discordapp.com/attachments/453953489933041686/824316792369184838/RaidRaidRaid.gif"
    );
  },
};
