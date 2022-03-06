from os import environ

from telegram import Update
from telegram.ext import Updater, CommandHandler, CallbackContext

def start(update: Update, _) -> None:
    update.message.reply_text(f"Hello {update.effective_user.first_name}\nI am a sample Telegram bot made with python-telegram-bot powered by railway.app!")
    return

TOKEN = environ.get("TOKEN")
if not TOKEN:
    print("No bot token to start the bot!")
    exit(1)
updater = Updater(TOKEN)

updater.dispatcher.add_handler(CommandHandler("start", start, run_async=True))

print("Bot started successfully!")

updater.start_webhook(listen="0.0.0.0",
                      port=int(environ.get("PORT", 84)),
                      url_path=TOKEN,
)                     
updater.idle()
updater.stop()
print("Bot stoped successfully!")
