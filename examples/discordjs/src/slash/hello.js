module.exports = {
  name: "hello",
  description: "Say Hello To me!",
  run: async (interaction, client) => {
    return interaction.reply({ content: "Choo choo! 🚅" });
  },
};
