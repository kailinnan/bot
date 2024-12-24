telegram-bot-framework/
│
├── config/                        # 配置文件夹
│   ├── default.json               # 默认配置文件
│   └── production.json            # 生产环境配置
│ 
├── src/                           # 源代码目录
│   ├── bot/                       # Telegram Bot 相关逻辑
│   │   ├── bot.js                 # 主 Bot 实例文件
│   │   ├── handlers/              # 处理 Telegram 消息和事件的逻辑
│   │   │   ├── commandHandler.js  # 命令处理
│   │   │   └── messageHandler.js  # 消息处理
│   │   ├── middlewares/           # 中间件（如鉴权、验证等）
│   │   │   └── loggerMiddleware.js# 日志中间件
│   │   ├── services/              # 服务层（如数据库操作、API 请求等）
│   │   │   ├── userService.js     # 用户服务
│   │   │   └── chatService.js     # 聊天服务
│   │   └── utils/                 # 工具类文件（如格式化函数、日志等）
│   │       └── logger.js          # 日志工具
│   │
│   ├── commands/                  # 用户命令定义
│   │   ├── startCommand.js        # /start 命令处理
│   │   ├── helpCommand.js         # /help 命令处理
│   │   └── customCommands.js      # 其他自定义命令
│   │
│   ├── models/                    # 数据模型（如用户数据、聊天记录等）
│   │   └── userModel.js           # 用户模型
│   │
│   ├── database/                  # 数据库层
│   │   ├── dbConnection.js        # 数据库连接管理
│   │   └── migrations/            # 数据库迁移脚本
│   │
│   ├── api/                       # 外部API集成
│   │   └── telegramAPI.js         # Telegram API 的封装
│   │
│   └── app.js                     # 入口文件，启动 Telegram Bot
│
├── public/                        # 公共资源文件夹（如前端界面、图片等）
│
├── test/                          # 测试文件夹
│   ├── bot/                       # Bot 相关单元测试
│   ├── services/                  # 服务层测试
│   ├── commands/                  # 命令相关测试
│   └── integration/               # 集成测试
│
├── .env                           # 环境变量配置
├── .gitignore                     # Git 忽略文件
├── package.json                   # 项目依赖和脚本
└── README.md                      # 项目说明文档
