const chatService = require('../services/chatService');

module.exports = async (ctx) => {
  const message = ctx.message.text;
  if (message) {
    // 保存聊天记录
    await chatService.saveMessage(ctx.from.id, message);
    ctx.reply(`You said: ${message}`);
  }
};
