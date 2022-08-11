// WARNING: EVAL IS DANGEROUS!!! Use at your own risk. If you don't know what eval does, DON'T USE IT!
module.exports = {
  name: "eval",
  description: "Developer Command",
  run: async (message, client, args) => {
    if (message.author.id !== process.env.OWNER_ID) return;
    if (!args[0]) return;
    let code = args.join(" ");
    code = code.replace(/"/g, '"').replace(/'/g, "'");

    let evaled;
    try {
      const start = process.hrtime();
      evaled = eval(code);
      if (evaled instanceof Promise) {
        evaled = eval;
      }

      const stop = process.hrtime(start);
      let response = [
        `**Output:: \`\`\`js\n${inspect(evaled, { depth: 0 })}\n\`\`\``,
        `**Time taken: \`\`\`${(stop[0] * 1e9 + stop[1]) / 1e6}ms \`\`\``,
      ];
      const res = response.join("\n");
      await message.channel.send(res);
    } catch (error) {
      console.log(error);
      message.channel.send(`There was an error while executing this command!`);
    }
  },
};
