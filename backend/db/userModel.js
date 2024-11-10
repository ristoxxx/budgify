
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },

  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },
  /*
  username: {
    type: String,
    required: [true, "Please provide an username!"],
    unique: true,
  },*/
  /*
  role: {
    type: Number,
    required: [false, "Please provide a role!"],
    unique: false,
  },*/
});

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
