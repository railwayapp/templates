const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
  name: "avatar",
  description: "Get the avatar of a user",
  options: [
    {
      type: 6,
      name: "user",
      description: "Request for another server member's avatar.",
      required: false,
    },
  ],
  run: async (interaction, client) => {
    const user = interaction.options.getUser("user") || interaction.user;

    interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setTitle(`${user.username}'s Avatar`)
          .setImage(user.avatarURL({ dynamic: true, size: 1024 }))
          .setTimestamp(),
      ],
      components: [
        new ActionRowBuilder().addComponents(
          new ButtonBuilder()
            .setStyle(ButtonStyle.Link)
            .setLabel("URL")
            .setURL(user.avatarURL({ dynamic: true, size: 1024 }))
        ),
      ],
    });
  },
};
