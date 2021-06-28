module.exports = {
  name: "raid",
  isBotPrefixRequired: false,
  description: "Raid command",
  aliases: ["raiding", "raid"],
  usage: "",
  clientRequired: true,
  execute(msg, args) {
    if(msg.author.username === "Cakey"){
      msg.channel.send(
        "https://cdn.discordapp.com/attachments/453953489933041686/824316792369184838/RaidRaidRaid.gif"
      );
    }
  },
};
