module.exports = {
  name: "ping",
  description: "Pings the bot",
  async execute(message, args) {
    const msg = await message.channel.createMessage("Pinging...");
    const ping = msg.timestamp - message.timestamp;
    msg.edit(`🏓 Pong! \`${ping} ms\``);
  },
};
