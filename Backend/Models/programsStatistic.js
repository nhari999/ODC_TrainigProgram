const mongoose = require('mongoose');

// Define the schema for the program statistics
const programStatisticSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  averageScore: {
    type: Number,
    required: true
  },
  numParticipants: {
    type: Number,
    required: true
  },
  numParticipantsAboveAverage: {
    type: Number,
    required: true
  },
  satisfactionRate: {
    type: Number,
    required: true
  }
});

// Create and export the ProgramStatistic model
module.exports = mongoose.model('ProgramStatistic', programStatisticSchema);
