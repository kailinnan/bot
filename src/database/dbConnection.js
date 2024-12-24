const mongoose = require('mongoose');
const config = require('../../config/default.json');

const connectDB = async () => {
  try {
    await mongoose.connect(config.database.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Database connection error:', err);
  }
};

module.exports = connectDB;
