
module.exports = {
  name: 'reload',
  description: 'Reloads a command',
  permissions: ['ADMIN'],
  execute(message, args) {
    if (!args.length) {
      return message.channel.send(
        `You didn't pass any command to reload, ${message.author}!`
      );
    }

    const commandName = args[0].toLowerCase();
    const command =
      message.client.commands.get(commandName) ||
      message.client.commands.find(
        (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
      );

    if (!command) {
      return message.channel.send(
        `There is no command with name or alias \`${commandName}\`, ${message.author}!`
      );
    }
    if (command.noreload === true) {
      return message.channel.send(`You cannot reload \`${command.name}\``);
    }
    delete require.cache[require.resolve(`./${command.name}.js`)];
    try {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      const newCommand = require(`./${command.name}.js`);
      message.client.commands.set(newCommand.name, newCommand);
      message.channel.send(`Command \`${command.name}\` was reloaded!`);
      return true;
    } catch (error) {
      console.error(error);
      message.channel.send(
        `There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``
      );
      return false;
    }
  },
};
