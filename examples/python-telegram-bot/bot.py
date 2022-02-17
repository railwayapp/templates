from telegram import Update
from telegram.ext import Updater, CommandHandler, CallbackContext
import os

def start(update: Update, context: CallbackContext) -> None:
    update.message.reply_text(f'Hello {update.effective_user.first_name}\nI am a sample Telegram bot made with python-telegram-bot!')

updater = Updater(os.environ.get("TOKEN"), use_context=True)

updater.dispatcher.add_handler(CommandHandler('start', start))

print("Bot started successfully")

updater.start_polling()
updater.idle()
