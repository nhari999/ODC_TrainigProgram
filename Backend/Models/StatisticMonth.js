const mongoose = require('mongoose');

// Define the schema for the statistic model
const statisticSchema = new mongoose.Schema({
  mois: {
    type: String,
    required: true
  },
  userGainMonth: {
    type: Number,
    required: true
  }
});

// Create the model using the schema
const StatisticMonth = mongoose.model('StatisticMonth', statisticSchema); // Changed model name to StatisticMonth

module.exports = StatisticMonth;
