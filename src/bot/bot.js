const { Bot } = require('grammy');
const config = require('../../config/default.json');
const commandHandler = require('./handlers/commandHandler');
const messageHandler = require('./handlers/messageHandler');
const loggerMiddleware = require('./middlewares/loggerMiddleware');

const bot = new Bot(config.telegram.token);

// 使用中间件
bot.use(loggerMiddleware);

// 注册命令处理器
bot.command('start', commandHandler);
bot.command('help', commandHandler);

// 注册消息处理器
bot.on('message', messageHandler);

// 启动 Bot
bot.start();
