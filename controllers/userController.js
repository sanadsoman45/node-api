const User = require('../models/user');
require('dotenv').config();

async function getAllUsers(req, res) {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
}

async function getUserById(req, res) {
  const user = await user.findById(req.params.id);
  return user
    ? res.status(200).json(user)
    : res.status(404).json({ error: 'User Not Found..' });
}

async function updateuserById(req, res) {
  await User.findByIdAndUpdate(req.params.id, { lastName: req.body.lastName });
  return res.json({ status: 'Success' });
}

async function deleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: 'Success' });
}


module.exports = {
  // handlegetAllUsers,
  getUserById,
  updateuserById,
  deleteUserById,
  getAllUsers
};
