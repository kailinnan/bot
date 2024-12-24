const messageModel = require('../models/messageModel');

module.exports.saveMessage = async (userId, message) => {
  const newMessage = new messageModel({ userId, message });
  await newMessage.save();
};
