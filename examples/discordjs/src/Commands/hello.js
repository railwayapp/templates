const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hello")
    .setDescription("Say Hello To me!"),
  execute: async (interaction, client) => {
    return interaction.reply({ content: "Choo choo! 🚅" });
  },
};
