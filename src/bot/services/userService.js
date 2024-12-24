const userModel = require('../models/userModel');

module.exports.registerUser = async (userId) => {
  const userExists = await userModel.findOne({ userId });
  if (!userExists) {
    const newUser = new userModel({ userId });
    await newUser.save();
  }
};
