const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({ name: { type: String, require: true } });
const User = mongoose.model('User', UserSchema);

module.export = User;
