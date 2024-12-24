const { Bot } = require('grammy');
const commandHandler = require('../../src/bot/handlers/commandHandler');
const { MockContext } = require('grammy');

describe('Command Handler', () => {
  it('should handle /start command', async () => {
    const ctx = new MockContext();
    ctx.message = { text: '/start', from: { id: 12345 } };

    await commandHandler(ctx);

    expect(ctx.reply).toHaveBeenCalledWith('Welcome to the bot!');
  });
});
