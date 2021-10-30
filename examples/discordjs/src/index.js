const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
const prefix = "!" // Character(s) that the bot checks for to validate commands, you can set this to just about anything.

// Token from Railway
const TOKEN = process.env.DISCORD_TOKEN;

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if(msg.content.toLowerCase() === (prefix + "ping"))
  {
    msg.reply("Pong 🏓");
  } 
  else if (msg.content.toLowerCase() === (prefix + "hello")) 
  {
    msg.reply("Choo choo! 🚅");
  };
});

client.login(TOKEN);
