import { Client, Message } from 'discord.js';
const { DISCORD_TOKEN } = process.env; // The TOKEN from railway

const client = new Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user?.tag}!`);
});

client.on('message', (msg: Message) => {
	if (msg.content === 'ping') {
		msg.reply('Pong 🏓');
	} else if (msg.content === 'hello') {
		msg.reply('Choo choo! 🚅');
	}
});

client.login(DISCORD_TOKEN);
