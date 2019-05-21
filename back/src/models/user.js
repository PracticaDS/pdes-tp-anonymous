const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user_schema = new Schema({
    name: {type: String, require: true}
});

export const User = mongoose.model("User", user_schema);