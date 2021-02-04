const Discord = require("discord.js");
const client = new Discord.Client();

// Token from Railway
const TOKEN = process.env.DISCORD_TOKEN;

client.on("ready", () => {
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
