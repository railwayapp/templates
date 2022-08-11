const fs = require("fs"); // Define fs (file system).
const { Client, GatewayIntentBits, Collection } = require("discord.js"); // Define Client, Intents, and Collection.
const { REST } = require("@discordjs/rest"); // Define REST
const { Routes } = require("discord-api-types/v10"); // Define Routes
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
}); // Add Intents to Client.

const cmds = new Collection(); // Where the bot (message) commands will be stored.
const slashcmds = new Collection(); // Where the bot (slash) commands will be stored.

// Array to store commands for sending to the REST API.
const commands = [];
client.once("ready", () => {
  // Get and filter all the files in the "Slash Commands" Folder.
  const slashFiles = fs
    .readdirSync("src/slash")
    .filter((file) => file.endsWith(".js"));
  // Loop through the command files
  for (const file of slashFiles) {
    const slash = require(`./slash/${file}`);
    commands.push({
      name: slash.name,
      description: slash.description,
      options: slash.options,
    });
    slashcmds.set(slash.name, slash);
  }

  const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

  // Register slash commands.
  (async () => {
    try {
      console.log("Started refreshing application (/) commands.");

      await rest.put(Routes.applicationCommands(client.user.id), {
        body: commands,
      });

      console.log("Successfully reloaded application (/) commands.");
    } catch (error) {
      console.error(error);
    }
  })();
  //Set the bot's status to Watching Trains.
  client.user.setActivity("Trains", {
    type: "WATCHING",
  });
  console.log(`Logged in as ${client.user.tag}!`);
});
// Get and filter all event files.
const eventFiles = fs
  .readdirSync("./src/events")
  .filter((file) => file.endsWith(".js"));
// Loop through the event files.
for (const file of eventFiles) {
  const event = require(`./../src/events/${file}`);
  if (event.once) {
    // Runs the event once.
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    // Sets the event to be listened for.
    client.on(event.name, (...args) => event.execute(...args));
  }
}

// Loop through all message command files and store them in the collector.
fs.readdir("./src/commands/", (error, files) => {
  if (error) return console.log("Could not find any commands!");
  const jsFiles = files.filter((f) => f.split(".").pop() === "js");
  if (jsFiles.length <= 0) return console.log("Could not find any commands!");
  jsFiles.forEach((file) => {
    const cmd = require(`./commands/${file}`);
    cmds.set(cmd.name, cmd);
  });
});

// Message Command handler.
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  const prefix = process.env.prefix;
  if (!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = cmds.get(command);
  if (!cmd) return;
  try {
    cmd.run(client, message, args);
  } catch (error) {
    console.log(error);
    message.channel.send("There was an error while executing this command!");
  }
});

// Slash Command handler.
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;
  const command = slashcmds.get(interaction.commandName);
  if (!command) return;
  try {
    await command.run(interaction, client);
  } catch (error) {
    console.error(error);
    return interaction.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    });
  }
});

client.login(process.env.DISCORD_TOKEN); // Login to the bot client via the defined "token" string.
