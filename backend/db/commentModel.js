
const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "Please provide a text!"],
    unique: false,
  },

  score: {
    type: Number,
    required: [true, "Please provide a score!"],
    unique: false,
  },

  owner: {
    type: mongoose.Schema.ObjectId,
    required: [true, "Please provide a user owner!"],
    unique: false,
  },
});


module.exports = mongoose.model.Comments || mongoose.model("Comments", CommentSchema);
