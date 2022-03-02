module.exports = {
  name: "hello",
  description: "Says hello!",
  async execute(message, args) {
    message.channel.createMessage(
      "Hello " + message.author.username + "!" + " Choo choo 🚅",
    );
  },
};
