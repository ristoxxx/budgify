
const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name!"],
    unique: true,
  },

  description: {
    type: String,
    required: [true, "Please provide a description!"],
    unique: false,
  },

  owner: {
    type: mongoose.Schema.ObjectId,
    required: [true, "Please provide a user owner!"],
    unique: false,
  },

  budget: {
    type: Number,
    required: [true, "Please provide a budget limit!"],
    unique: false,
  },

  timeLimit: {
    type: Number,
    required: [true, "Please provide a time limit!"],
    unique: false,
  },

  type: {
    type: Number,
    required: [true, "Please provide a type!"],
    unique: false,
  },
  
  link: {
    type: String
  },
  
  members: {
    type: Array,
    default: []
  },
  
  samples: {
    type: Array,
    default: []
  },
  
  votes: {
    type: Array,
    default: []
  },
  
  scenarios: {
    type: Array,
    default: []
  },

});


module.exports = mongoose.model.Projects || mongoose.model("Projects", ProjectSchema);
