
const mongoose = require("mongoose");

const ScenarioSchema = new mongoose.Schema({
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
  
  subprojects: {
    type: Array,
    default: []
  },

});


module.exports = mongoose.model.Scenarios || mongoose.model("Scenarios", ScenarioSchema);
