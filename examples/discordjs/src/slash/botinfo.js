const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "botinfo",
  description: "Get information about the bot.",
  run: async (interaction, client) => {
    return interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setTitle("Information")
          .setDescription(
            `**Node.js Version:** ${process.version}\n**Ping:** ${client.ws.ping} ms\n**Guilds:** ${client.guilds.cache.size}\n**Users:** ${client.users.cache.size}`
          )
          .setFooter({
            text: "Railway",
            iconURL:
              "https://avatars.githubusercontent.com/u/66716858?s=200&v=4",
          })
          .setTimestamp(),
      ],
    });
  },
};
