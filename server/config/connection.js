const mongoose = require('mongoose');

//require('dotenv').config(); // remove on production

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks');

module.exports = mongoose.connection;
