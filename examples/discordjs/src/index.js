const { Client } = require('discord.js');
const client = new Client({ intents: 513 });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('Pong 🏓');
  } else if (msg.content === 'hello') {
    msg.channel.send('Choo choo! 🚅');
  }
});

client.login();
