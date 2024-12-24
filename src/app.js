const express = require('express');
const connectDB = require('./database/dbConnection');
const bot = require('./bot/bot');

const app = express();
const config = require('../config/default.json');

// 连接数据库
connectDB();

// 启动机器人
bot.start();

// 启动服务器
app.listen(config.server.port, config.server.host, () => {
  console.log(`Server is running on http://${config.server.host}:${config.server.port}`);
});
