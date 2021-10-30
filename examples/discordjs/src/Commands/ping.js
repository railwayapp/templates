const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Get the bots latency!"),
  execute: async (interaction, client) => {
    return interaction.reply(`Pong \`${client.ws.ping}ms\` 🏓`);
  },
};
