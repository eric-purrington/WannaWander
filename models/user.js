const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// var passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String, 
    required: true, 
    unique: true 
  },
  email_is_verified: {
    type: Boolean,
    default: false
  },
  password: {
    type: String
  }
});

// userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

module.exports = User;