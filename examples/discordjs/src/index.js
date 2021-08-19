const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

// Token from Railway
const TOKEN = process.env.DISCORD_TOKEN;

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("Pong 🏓");
  } else if (msg.content === "hello") {
    msg.reply("Choo choo! 🚅");
  }
});

client.login(TOKEN);
