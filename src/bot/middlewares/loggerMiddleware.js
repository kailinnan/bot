const logger = require('../utils/logger');

module.exports = (ctx, next) => {
  logger.info(`User ${ctx.from.id} sent message: ${ctx.message.text}`);
  return next();
};
