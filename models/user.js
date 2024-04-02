//model which represents structure

//importing the mongoose dependency for odm.
const mongoose = require('mongoose');

//schema of user structure
const usersSchema = new mongoose.Schema({
  // _id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   default: mongoose.Types.ObjectId // Auto-generate ID
  // },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  emailId: {
    type: String,
    required: true,
    unique: true
  },
  mobNum: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const user = mongoose.model('user', usersSchema);

module.exports = user;
