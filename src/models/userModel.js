const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  username: { type: String }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
