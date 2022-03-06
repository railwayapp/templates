from os import environ

from telegram import Update
from telegram.ext import Updater, CommandHandler, CallbackContext

def start(update: Update, _) -> None:
    update.message.reply_text(f"Hello {update.effective_user.first_name}\nI am a sample Telegram bot made with python-telegram-bot powered by railway.app!")
    return

updater = Updater(environ.get("TOKEN"))

updater.dispatcher.add_handler(CommandHandler("start", start, run_async=True))

print("Bot started successfully!")

updater.start_polling()
updater.idle()
updater.stop()
print("Bot stoped successfully!")
