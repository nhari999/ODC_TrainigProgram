const mongoose = require('mongoose');

// Define the Statistic schema
const Statistic = new mongoose.Schema({
  year: {
    type: Number,
    required: true
  },
  participants: {
    type: Number,
    required: true
  },
  averageScore: {
    type: Number,
    required: true
  },
  userGain: {
    type: Number,
    required: true
  },
  nombreAdmis: {
    type: Number,
    default: null
  },
  AgeRange: {
    type: String,
    default: null
  }
});



module.exports = mongoose.model("Statistic", Statistic);
