const Eris = require("eris");
const fs = require("node:fs");
const bot = Eris(`Bot ${process.env.DISCORD_TOKEN}`);
const prefix = process.env.PREFIX || "!";
const commands = fs
  .readdirSync(__dirname + "/commands")
  .filter(file => file.endsWith(".js"));

bot.on("ready", () => console.log(`Logged in as ${bot.user.username}#${bot.user.discriminator}`));

bot.on("messageCreate", async message => {
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  if (!commands.includes(command + ".js")) return;
  const cmd = require(`./commands/${command}.js`);
  cmd.execute(message, args);
});

bot.editStatus("online", {
  name: "Listening to Your commands <3",
  type: 0,
});

bot.connect();

process.on("unhandledRejection" || "uncaughtException", console.error);
