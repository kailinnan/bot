const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
