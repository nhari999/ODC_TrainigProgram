const mongoose = require('mongoose');

// Define the schema for the trainer
const trainerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  numTrainingPrograms: {
    type: Number,
    required: true
  },
  programs: [{
    type: String,
    required: true
  }]
});

// Create and export the Trainer model
module.exports = mongoose.model('Trainer', trainerSchema);
