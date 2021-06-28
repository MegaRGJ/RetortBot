module.exports = {
  name: "wipe",
  isBotPrefixRequired: false,
  description: "when is wipe command",
  aliases: ["whens wipe", "when wipe", "whens wipe?", "when wipe"],
  usage: "",
  clientRequired: true,
  execute(msg, args) {
      msg.channel.send(
        "Thursday"
      );
  },
};
