const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    //unique: true,
  },
  password: {
    type: String,
    required: true,
  }
  // Do not store confirmpassword
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
module.exports = User;
