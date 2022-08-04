import { Bot } from "grammy";

/*
  TELEGRAM_BOT_TOKEN is an environment variable
  that should be configured on Railway
*/
if (!process.env.TELEGRAM_BOT_TOKEN) throw new Error("Please add a bot token");
const bot = new Bot(process.env.TELEGRAM_BOT_TOKEN ?? "TOKEN");

// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.

// Handle the /start command.
bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
// Handle other messages.
bot.on("message", (ctx) => ctx.reply("Got another message!"));

// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

// Start the bot.
bot.start();
