const Discord = require('discord.js');
const client = new Discord.Client();


client.once('ready', () => {
    console.log('Back online')
});

client.on('message', msg => {
    if (msg.author.username === 'Cakey') //Cakey
    {
      const stringMsg = msg.toString();
      if (stringMsg.includes('raid') || stringMsg.includes('Raid') || stringMsg.includes('raiding') || stringMsg.includes('Raiding'))
      {
        msg.channel.send('https://cdn.discordapp.com/attachments/453953489933041686/824316792369184838/RaidRaidRaid.gif');
      }
    }

    if (msg.content === 'ping') 
    {
      msg.reply('Pong!');
    }
});
client.login(process.argv[2]);