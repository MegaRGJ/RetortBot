const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();

const botPrefix = "-";

/* Intialise the client commands object to a new discord collection */
client.commands = new Discord.Collection();

/* Read all command files from the command folder! */
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

/* Populate the client command object */
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

/**
 * Returns a validated array of arguments, grouping words within quotations together
 *
 * @param {array} arr The array of arguments to sort
 */
const sortArrArgs = (arr) => {
  const regexp = /[^\s"]+|"([^"]*)"/gi;
  const arrStr = arr.join(" ");
  const newArr = [];

  let match;
  do {
    match = regexp.exec(arrStr);
    if (match != null) {
      newArr.push(match[1] ? match[1] : match[0]);
    }
  } while (match != null);

  return newArr;
};

/**
 * Bot triggers that don't require to called command
 * @param {object} msg Discord message object
 */
const includeResponses = (msg) => {
  const msgContent = msg.content.toLowerCase();

  if (msgContent.includes("raid")) {
    if (msg.author.username === "Cakey") {
      msg.channel.send(
        "https://cdn.discordapp.com/attachments/453953489933041686/824316792369184838/RaidRaidRaid.gif"
      );
    }
  }
};

client.once("ready", () => {
  console.log("Back online");
});

client.on("message", (msg) => {
  /* Ignore bot messages */
  if (msg.author.bot) return;

  /* If you want to set a prefix, can so so here */
  if (!msg.content.startsWith(botPrefix)) {
    includeResponses(msg);
    return;
  }

  /* Retrieve and format user message */
  let args = msg.content.slice(botPrefix.length).trim().split(/ +/);
  let commandName = args.shift().toLowerCase();

  /* Find the called command */
  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
    );

  /* Exit if command does not exist */
  if (!command) return;

  /* Clean up the arguments (will also group words in quotations to single arg, e.g '-ping test "one two"' => ['test', 'one two']) */
  if (args != null && args.length !== 0) {
    args = sortArrArgs(args);
    if (args === null) {
      msg.reply("there was a problem with the provided arguments!");
    }
  }

  /* Attempt to run the command */
  try {
    command.execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply("there was an error trying to execute that command!");
  }
});

/* Log in to the client with the provided token (Might want to have a config file for this instead) */
client.login(process.argv[2]);
