const fs = require("fs");
module.exports = {
  name: "help",
  description: "Shows help for all commands",
  async execute(message, args) {
    const commands = fs
      .readdirSync(__dirname)
      .filter(file => file.endsWith(".js"));
    message.channel.createMessage({
      embed: {
        title: "Help",
        description: "Here's a list of all the commands:",
        fields: commands.map(cmd => {
          const cmdObj = require(__dirname + "/" + cmd);
          return {
            name: cmdObj.name,
            value: cmdObj.description,
          };
        }),
      },
    });
  },
};
