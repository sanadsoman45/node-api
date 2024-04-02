require('dotenv').config();
const mongoose = require('mongoose');

async function connectMongoDb() {
  return mongoose.connect(process.env.db_url);
}

module.exports = {
  connectMongoDb
};
