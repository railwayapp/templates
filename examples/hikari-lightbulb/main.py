# This example requires the 'message_content' privileged intents

import os
import hikari
import lightbulb

intents = (
    hikari.Intents.MESSAGE_CONTENT |
    hikari.Intents.DM_MESSAGES |
    hikari.Intents.GUILD_MESSAGES
)

bot = lightbulb.BotApp(token = os.environ["DISCORD_TOKEN"], prefix = "!", intents = intents)

@bot.listen(hikari.StartedEvent)
async def on_ready(event):
    me = bot.get_me()
    print(f"Logged in as {me.username}")

@bot.command
@lightbulb.command("ping", "Sends 'pong'")
@lightbulb.implements(lightbulb.PrefixCommand)
async def ping(ctx: lightbulb.Context):
    await ctx.respond("pong")

@bot.command
@lightbulb.command("hello", "Greets the user who uses the command")
@lightbulb.implements(lightbulb.PrefixCommand)
async def hello(ctx: lightbulb.Context):
    await ctx.respond("Choo choo! 🚅")

bot.run()
