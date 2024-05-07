// Import mongoose
const mongoose = require('mongoose');

// Define the participant schema
const participantSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true
  },
  dateofbirth: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'], // Assuming only Male and Female genders are allowed
    required: true
  },
  Training_program_Name: {
    type: String,
    required: true
  },
  date_of_enrollment: {
    type: Date,
    required: true
  },
  note: {
    type: Number,
    default: null
  }
});

// Create the Participant model
const Participant = mongoose.model('Participant', participantSchema);

// Export the Participant model
module.exports = Participant;
