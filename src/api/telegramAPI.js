const { Bot } = require('grammy');

class TelegramAPI {
  constructor(token) {
    this.bot = new Bot(token);
  }

  async sendMessage(chatId, message) {
    await this.bot.api.sendMessage(chatId, message);
  }

  async getUserProfile(userId) {
    const user = await this.bot.api.getUserProfilePhotos(userId);
    return user;
  }
}

module.exports = TelegramAPI;
