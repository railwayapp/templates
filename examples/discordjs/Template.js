//Slash Command Template

module.exports = {
  name: "name",
  description: "My cool command does this!",
  execute: async (interaction, client) => {
    return interaction.reply("Hey! you used my command!");
  },
};

// Message Command Template

module.exports = {
  name: "name",
  description: "My cool command does this!",
  execute: async (client, message, args) => {
    return message.channel.send("Hey! you used my command!");
  },
};
