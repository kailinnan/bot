const userService = require('../services/userService');

module.exports = async (ctx) => {
  if (ctx.message.text === '/start') {
    await userService.registerUser(ctx.from.id);
    ctx.reply('Welcome to the bot!');
  } else if (ctx.message.text === '/help') {
    ctx.reply('Here is some help...');
  }
};
