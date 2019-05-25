const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: { type: String, require: true },
  factories: { type: Array, default: [] }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
